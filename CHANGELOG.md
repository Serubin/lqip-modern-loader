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
        use: [
          'lqip-modern-loader',
          'url-loader'
        ],
      }
    ]
  }
};
```

The source of the original image is now included in the return type

```ts
{
  src: string; // the source of the original image (using file-loader in the background)
  width: number; // the width of the placeholder image
  height: number; // the height of the placeholder image
  dataURI: string; // the placeholder image Base64-URI
}
```