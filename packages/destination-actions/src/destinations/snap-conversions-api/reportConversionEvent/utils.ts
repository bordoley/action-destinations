import { IntegrationError } from '@segment/actions-core/*'
import { createHash } from 'crypto'

export const hash = (value: string | undefined): string | undefined => {
  if (value === undefined) return

  const hash = createHash('sha256')
  hash.update(value)
  return hash.digest('hex')
}

export const isHashedEmail = (email: string): boolean => new RegExp(/[0-9abcdef]{64}/gi).test(email)

export const transformProperty = (
  property: string,
  items: Array<Record<string, string | number | undefined>>
): string =>
  items
    .map((i) =>
      i[property] === undefined || i[property] === null
        ? ''
        : typeof i[property] === 'number'
        ? (i[property] as number).toString()
        : (i[property] as string).toString().replace(/;/g, '')
    )
    .join(';')

export const hashEmailSafe = (email: string | undefined): string | undefined =>
  isHashedEmail(String(email)) ? email : hash(email)

export const emptyToUndefined = (str: string | undefined): string | undefined =>
  str != null && str === '' ? undefined : str

export const raiseIntegrationErrorIf = (condition: boolean, message: string, code: string, status: number) => {
  if (condition) {
    throw new IntegrationError(message, code, status)
  }
}

// Use an interface to work around typescript limitation of using arrow functions for assertions
interface S {
  raiseIntegrationErrorIfUndefined<T>(v: T | undefined, message: string, code: string, status: number): asserts v is T
}

export const raiseIntegrationErrorIfUndefined: S['raiseIntegrationErrorIfUndefined'] = <T>(
  v: T | undefined,
  message: string,
  code: string,
  status: number
): asserts v is T => raiseIntegrationErrorIf(v != null, message, code, status)

export const box = <T>(v: T | undefined): readonly T[] => (v != null ? [v] : [])
