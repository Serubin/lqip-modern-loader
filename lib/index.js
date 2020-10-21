const lqip = require('lqip-modern')
const loaderUtils = require('loader-utils')

function loader(contentBuffer) {
  const callback = this.async()

  if (!this.resourceQuery) {
    this.callback(null, contentBuffer)
    return
  }

  try {
    const queryParams = loaderUtils.parseQuery(this.resourceQuery)

    if (!queryParams.lqip) {
      this.callback(null, contentBuffer)
      return
    }

    lqip(contentBuffer, {
      outputFormat: queryParams.webp ? 'webp' : 'jpg',
    })
      .then((result) =>
        callback(
          null,
          `module.exports = ${JSON.stringify({
            width: result.metadata.width,
            height: result.metadata.height,
            dataURI: result.metadata.dataURIBase64,
          })}`,
        ),
      )
      .catch((error) => callback(error))
  } catch (error) {
    callback(error)
  }
}

module.exports = loader

module.exports.raw = true
