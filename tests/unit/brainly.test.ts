import { acceptedLanguages, addLanguage } from '../../src/interfaces/languages'
import Brainly, { DEFAULT_LANGUAGE } from '../../src/utils/brainly'

describe('initialize brainly object ', () => {

  it('initialize without language', () => {
    const brainly = new Brainly()
    expect(brainly.language).toBe(acceptedLanguages.find(language => language.code === DEFAULT_LANGUAGE))
  })

  it('initialize with language', () => {
    const brainly = new Brainly({ language: 'es' })
    expect(brainly.language).toBe(acceptedLanguages.find(language => language.code === 'es'))
  });

  it('initialize with invalid language', () => {
    const brainly = new Brainly({ language: 'invalid' })
    expect(brainly.language).toBe(acceptedLanguages.find(language => language.code === DEFAULT_LANGUAGE))
  });

  it('create existing language', () => {
    expect(() => addLanguage({ code: 'pt', name: 'Português' })).toThrowError('Language Português already exists')
  })

  it('create a new language', () => {
    addLanguage({ code: 'new', name: 'New Language' })
    expect(acceptedLanguages.find(language => language.code === 'new')).toBeTruthy()
  })

  it('initialize with new language', () => {
    const brainly = new Brainly({ language: 'new' })
    expect(brainly.language).toBe(acceptedLanguages.find(language => language.code === 'new'))
  });

})
