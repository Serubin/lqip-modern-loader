[![npm][npm]][npm-url]

# lqip-modern Loader

A Webpack loader used for either generating a low quality image in `jpeg` or
`webp` format, or an array of the dominant colors, to use as a placeholder while
the image loads

> if you are using **Next.js** you should check out our
> [next-lqip-images][next-lqip-images] Plugin.

## Install

```bash
npm install --save-dev lqip-modern-loader
```

```bash
yarn add --dev lqip-modern-loader
```

## Usage

### lqip

the `lqip-modern-loader` will load the image imports that have the **?lqip**
query param and generate a low quality image placeholder

```js
import { src, width, height, dataURI } from './image.jpg?lqip'
```

by default, the loader will return the placeholder in `jpeg` format for maximum
browser support. it is however possible to switch to `webp` using the **&webp**
query param, which will result in a much smaller image size

```js
import image from './image.jpg?lqip&webp'
```

commonly, a blur is added to the image placeholder using `css` for better looks.
the scale is used here together with an `overflow: hidden` on the parent to hide
the
[artifacts around the edges](http://volkerotto.net/2014/07/03/css-background-image-blur-without-blury-edges/)

```css
.placeholder {
  filter: blur(24px);
  transform: scale(1.1);
}
```

to avoid going throw that, you can just simply add the **&blur** query param to
get a blurred placeholder image by default.

```js
import image from './image.jpg?lqip&webp&blur'
import image2 from './image.png?lqip&blur'
```

> **Note:** the query params are composable but the `lqip` must be added at the
> beginning!

the above mentioned imports will return the following:

```ts
{
  src: string // the source of the original image (using file-loader in the background)
  width: number // the width of the placeholder image
  height: number // the height of the placeholder image
  dataURI: string // the placeholder image Base64-URI
}
```

### color palette

to get an array of the dominant colors to use as a placeholder instead, simply
add the **?colors** query param at the end of your imported image

```js
import { src, width, height, colors } from './image.jpg?lqip'
```

in this case, the returned values will be like following:

```ts
{
  src: string // the source of the original image (using file-loader in the background)
  width: number // the width of the original image
  height: number // the height of the original image
  colors: string[] // an array of the hex color codes representing the dominant colors of the image
}
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: ['lqip-modern-loader'],
      },
    ],
  },
}
```

it can also be used together with `url-loader` or `file-loader`, just make sure
it runs last 😉

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: ['lqip-modern-loader', 'url-loader'],
      },
    ],
  },
}
```

in this case, the result of the `url-loader` or `file-loader` will be included
in the `src` prop.

## options

### size

`default: 24`

by setting this to a **number**, it will set the width and height of the
placeholder image to a maximum of the provided number while maintaining the
aspect ratio.

example:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'lqip-modern-loader',
            options: {
              size: 32,
            },
          },
          'url-loader',
        ],
      },
    ],
  },
}
// an example output would be
{
  src: '...', //image source
  width: 16, // placeholder width
  height: 32, // placeholder height
  dataURI: '...', // placeholder image URI
}
```

and by setting this to an **Array of numbers**, you can specify the width and
height of the placeholder image.

example:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'lqip-modern-loader',
            options: {
              size: [32, 32],
            },
          },
          'url-loader',
        ],
      },
    ],
  },
}
// an example output would be
{
  src: '...', //image source
  width: 32, // placeholder width
  height: 32, // placeholder height
  dataURI: '...', // placeholder image URI
}
```

### blur

`default: 2.4`

you can also set the amount of blur you want to be applied to the images. I
found that deviding the size by 10 is a good point to start with!

example:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'lqip-modern-loader',
            options: {
              size: 32,
              blur: 3.2,
            },
          },
          'url-loader',
        ],
      },
    ],
  },
}
```

[npm]: https://img.shields.io/npm/v/lqip-modern-loader.svg
[npm-url]: https://npmjs.com/package/lqip-modern-loader
[lqip-modern]: https://www.npmjs.com/package/lqip-modern
[next-lqip-images]: https://www.npmjs.com/package/next-lqip-images
