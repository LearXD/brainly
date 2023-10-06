export interface Language {
  code: string
  name: string
}

export type Languages = Language[]

const acceptedLanguages: Languages = [
  {
    code: 'pt',
    name: 'Português'
  },
  {
    code: 'es',
    name: 'Español'
  },
  {
    code: 'en',
    name: 'English'
  }
]

export { acceptedLanguages }