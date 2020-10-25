const getColors = require('get-image-colors')
const sharp = require('sharp')

module.exports = async (image) => {
  const rgbaPalette = await getColors(image)
  const palette = rgbaPalette.map((color) => color.hex())
  const imageMeta = await sharp(image).metadata()

  return {
    width: imageMeta.width,
    height: imageMeta.height,
    colors: palette,
  }
}
