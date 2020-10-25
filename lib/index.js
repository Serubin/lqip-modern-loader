const lqip = require('lqip-modern')
const loaderUtils = require('loader-utils')
const { validate } = require('schema-utils')
const fileLoader = require('file-loader')
const optionsSchema = require('./schema.json')

const isBase64Export = /(module.exports\s*=|export default )\s*(?<src>"data:image\/.+;base64.+")/i
const isUrlExport = /(module.exports\s*=|export default )\s*(?<src>.+\.(gif|jpe?g|png|webp)");?$/i

function loader(content) {
  const callback = this.async()

  if (!this.resourceQuery) {
    this.callback(null, content)
    return
  }

  const options = loaderUtils.getOptions(this) || {}

  validate(optionsSchema, options, { name: 'lqip-modern-loader' })

  try {
    const queryParams = loaderUtils.parseQuery(this.resourceQuery)

    if (!queryParams.lqip) {
      this.callback(null, content)
      return
    }

    let src

    const base64Export = content.match(isBase64Export)
    const urlExport = content.match(isUrlExport)

    if (base64Export && base64Export.groups && base64Export.groups.src) {
      src = base64Export.groups.src
    } else if (urlExport && urlExport.groups && urlExport.groups.src) {
      src = urlExport.groups.src
    } else {
      try {
        const urlExportContent = fileLoader.call(this, content)

        const contentMatch = urlExportContent.match(isUrlExport)
        if (!contentMatch || !contentMatch.groups) {
          throw new Error('Unable to get image URL!')
        }

        src = contentMatch.groups.src
      } catch (error) {
        this.callback(error)
      }
    }

    lqip(this.resourcePath, {
      outputFormat: queryParams.webp ? 'webp' : 'jpg',
      resize: options.size || 24,
    })
      .then((result) => {
        callback(
          null,
          `module.exports = {
            src: ${src},
            width: ${result.metadata.width},
            height: ${result.metadata.height},
            dataURI: "${result.metadata.dataURIBase64}",
          }`,
        )
      })
      .catch((error) => callback(error))
  } catch (error) {
    callback(error)
  }
}

module.exports = loader
