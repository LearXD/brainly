import BrainlyApi from "../api/brainly";
import { Language, acceptedLanguages } from "../interfaces/languages";

const DEFAULT_LANGUAGE = 'pt'

interface BrainlyOptions {
  language?: Language
}

export default class Brainly {

  public static instance: Brainly
  private api: BrainlyApi

  constructor(public options: BrainlyOptions = {}) {
    Brainly.instance = this
    this.initLanguage()
    this.api = new BrainlyApi({ language: this.options.language })
  }

  public initLanguage() {
    const defaultLanguage = acceptedLanguages.find(({ code }) => code === DEFAULT_LANGUAGE)

    if (!this.options?.language) {
      console.warn(`None language was provided. Using default language: ${defaultLanguage.name}`)
      this.options.language = defaultLanguage
      return;
    }

    this.options.language = acceptedLanguages.find(lang => lang.code === this.options.language.code) || defaultLanguage
  }


  public search = async (query: string, limit: number = 10) => {
    return this.api.search(query, limit)
  }

  public getQuestionById = async (id: number) => {
    return this.api.getQuestionById(id)
  }

}