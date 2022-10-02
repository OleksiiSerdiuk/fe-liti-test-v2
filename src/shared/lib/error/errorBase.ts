import { IError } from '.'

export abstract class ErrorBase extends Error implements IError {
  public readonly name: string
  public readonly description: string
  public readonly isOperational: boolean

  constructor(
    name: string,
    description: string = '',
    isOperational: boolean = true
  ) {
    super(description)
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = name
    this.isOperational = isOperational
    this.description = description
    if (Error.captureStackTrace !== undefined) {
      Error?.captureStackTrace(this)
    }
  }
}
