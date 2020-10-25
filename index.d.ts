interface LqipImage {
  src: string
  width: number
  height: number
  dataURI: string
}

interface ImageColors {
  src: string
  width: number
  height: number
  colors: string[]
}

// LQIP
declare module '*.jpg?lqip' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.jpeg?lqip' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.png?lqip' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.webp?lqip' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

// with Webp
declare module '*.jpg?lqip&webp' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.jpeg?lqip&webp' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.png?lqip&webp' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.webp?lqip&webp' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

// with blur
declare module '*.jpg?lqip&blur' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.jpeg?lqip&blur' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.png?lqip&blur' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.webp?lqip&blur' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

// with webp & blur
declare module '*.jpg?lqip&blur&webp' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.jpeg?lqip&blur&webp' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.png?lqip&blur&webp' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.webp?lqip&blur&webp' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

// with blur & webp
declare module '*.jpg?lqip&webp&blur' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.jpeg?lqip&webp&blur' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.png?lqip&webp&blur' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.webp?lqip&webp&blur' {
  export const src: string
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

// Colors
declare module '*.jpg?colors' {
  export const src: string
  export const width: number
  export const height: number
  export const colors: string[]
  const value: ImageColors
  export default value
}

declare module '*.jpeg?colors' {
  export const src: string
  export const width: number
  export const height: number
  export const colors: string[]
  const value: ImageColors
  export default value
}

declare module '*.png?colors' {
  export const src: string
  export const width: number
  export const height: number
  export const colors: string[]
  const value: ImageColors
  export default value
}

declare module '*.webp?colors' {
  export const src: string
  export const width: number
  export const height: number
  export const colors: string[]
  const value: ImageColors
  export default value
}