interface Language {
  code: string
  name: string
}

type Languages = Language[]

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

type AcceptedLanguageCodes<T> = 'pt' | 'es' | 'en' | T

const addLanguage = (language: Language) => {
  const exists = acceptedLanguages.find(({ code, name }) => code === language.code || name === language.name)
  if (exists) {
    throw new Error(`Language ${language.name} already exists`)
  }
  acceptedLanguages.push(language)
}

export { acceptedLanguages, addLanguage, Languages, Language, AcceptedLanguageCodes }