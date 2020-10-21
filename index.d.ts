interface LqipImage {
  width: number
  height: number
  dataURI: string
}

declare module '*.jpg?lqip' {
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.jpeg?lqip' {
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.png?lqip' {
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.jpg?lqip&webp' {
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.jpeg?lqip&webp' {
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}

declare module '*.png?lqip&webp' {
  export const width: number
  export const height: number
  export const dataURI: string
  const value: LqipImage
  export default value
}
