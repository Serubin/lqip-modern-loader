[![npm][npm]][npm-url]

# lqip-modern Loader

A Webpack loader for [lqip-modern][lqip-modern], loads images and generates a
low quality image to use as a placeholder either in `jpeg` or `webp` format.

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

the `lqip-modern-loader` will load the image imports that have the `lqip` query
param and generate a low quality image placeholder

```js
import { src, width, height, dataURI } from './image.jpg?lqip'
```

by default, the loader will return the placeholder in `jpeg` format for maximum
browser support. it is however possible to switch to `webp` using the `webp`
query param

```js
import image from './image.jpg?lqip&webp'
```

the import will return the following:

```ts
{
  src: string // the source of the original image (using file-loader in the background)
  width: number // the width of the placeholder image
  height: number // the height of the placeholder image
  dataURI: string // the placeholder image Base64-URI
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

[npm]: https://img.shields.io/npm/v/lqip-modern-loader.svg
[npm-url]: https://npmjs.com/package/lqip-modern-loader
[lqip-modern]: https://www.npmjs.com/package/lqip-modern
[next-lqip-images]: https://www.npmjs.com/package/next-lqip-images
