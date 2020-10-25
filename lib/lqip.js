const sharp = require('sharp')

module.exports = async function computeLqipImage(input, options = {}) {
  const {
    resize = 24,
    webp = false,
    blur,
    blurAmount = 2.4,
    quality = 100,
  } = options

  const image = sharp(input)
  const metadata = await image.metadata()

  let resized = image.resize(
    ...(Array.isArray(resize)
      ? resize
      : [
          Math.min(metadata.width, resize),
          Math.min(metadata.height, resize),
          { fit: 'inside' },
        ]),
  )

  if (blur) {
    resized = resized.blur(blurAmount)
  }

  let output

  if (webp) {
    output = resized.webp({
      quality,
      alphaQuality: quality,
      smartSubsample: true,
    })
  } else {
    output = resized.jpeg({
      quality,
    })
  }

  const { data, info } = await output.toBuffer({ resolveWithObject: true })

  return {
    width: info.width,
    height: info.height,
    dataURI: `data:image/${webp ? 'webp' : 'jpg'};base64,${data.toString(
      'base64',
    )}`,
  }
}
