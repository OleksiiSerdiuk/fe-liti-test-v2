export interface IError extends Error {
  name: string
  description: string
  isOperational: boolean
}
