import BrainlyApi from "../api/brainly";
import { Language, acceptedLanguages } from "../interfaces/languages";

export const DEFAULT_LANGUAGE = 'pt'

interface BrainlyOptions {
  language?: string
}

export default class Brainly {

  private api: BrainlyApi
  public language: Language

  constructor(public options: BrainlyOptions = {}) {
    this.initLanguage()
    this.api = new BrainlyApi({ language: this.language })
  }

  public initLanguage() {
    const defaultLanguage = acceptedLanguages.find(({ code }) => code === DEFAULT_LANGUAGE)

    if (!this.options?.language) {
      console.warn(`None language was provided. Using default language: ${defaultLanguage.name}`)
      this.language = defaultLanguage
      return;
    }

    this.language = acceptedLanguages.find(lang => lang.code === this.options.language) || defaultLanguage

    if (!this.language) {
      console.warn(`Language ${this.options.language} not found. Using default language: ${defaultLanguage.name}`)
      this.language = defaultLanguage
    }

  }

  public search = async (query: string, limit: number = 10) => {
    return this.api.search(query, limit)
  }

  public getQuestionById = async (id: number) => {
    return this.api.getQuestionById(id)
  }

}