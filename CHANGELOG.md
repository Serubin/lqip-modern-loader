# 0.0.2

added a Readme

# 0.0.3

added a Next.js section to the Readme

# 0.0.3

Now can work together with `url-loader` and `file-loader` 🚀

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

The source of the original image is now included in the return type

```ts
{
  src: string // the source of the original image (using file-loader in the background)
  width: number // the width of the placeholder image
  height: number // the height of the placeholder image
  dataURI: string // the placeholder image Base64-URI
}
```

# 0.0.6

### you can now set the size of the placeholder image

by setting **size** to a **number**, it will set the width and height of the
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

and by setting **size** to an **Array of numbers**, you can specify the width
and height of the placeholder image.

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

# 0.1.0

### added a param to get a blurred image output

```js
import img from './image.jpg?lqip&blur&webp'
```

### added an option to set the blur amount

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

### added a param to get an array of dominant image colors

```js
import { src, width, height, colors } from './image.png?colors'
```
