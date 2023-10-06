import axios, { AxiosInstance, AxiosRequestConfig } from "axios"
import { Language } from "../../interfaces/languages"
import { BrainlyAnswers, SupportedTypes } from "../../interfaces/brainly-api"
import { BrainlySearch } from "../../interfaces/brainly-api"

interface BrainlyApiOptions {
  language: Language
}

export default class BrainlyApi {

  private instance: AxiosInstance

  constructor(private options: BrainlyApiOptions) {
    this.instance = axios.create({
      validateStatus: () => true,
      headers: {
        'User-Agent': 'Android-App 5.161.0'
      }
    })
  }

  public async search(query: string, limit: number = 10, supportedTypes: SupportedTypes = ["question", "tbsQuestion"]): Promise<BrainlySearch> {
    const request = await this.request({
      url: `https://unified-search.brainly.com/api/v1/${this.options.language.code}/search`,
      method: 'POST',
      data: {
        context: {
          scenario: "",
          supportedTypes
        },
        pagination: { limit },
        query: {
          text: query
        }
      }
    })

    return request.data
  }

  public async getQuestionById(id: number): Promise<BrainlyAnswers> {
    const request = await this.request({
      url: `https://brainly.com.br/graphql/${this.options.language.code}?operationName=QuestionByIdQuery`,
      method: 'POST',
      data: {
        operationName: "QuestionByIdQuery",
        variables: { id },
        query: "query QuestionByIdQuery($id: Int!) { questionById(id: $id) { databaseId content points grade { databaseId name } subject { databaseId name slug } author { __typename ...AuthorFragment } canBeAnswered attachments { __typename ...AttachmentFragment } answers { hasVerified nodes { databaseId content author { __typename ...AuthorFragment } thanksCount isBest created attachments { __typename ...AttachmentFragment } verification { hasAccess approval { approvedTime } } comments(last: 0) { count } rating ratesCount } } } }  fragment AuthorFragment on User { databaseId nick rank { name } avatar { thumbnailUrl } }  fragment AttachmentFragment on Attachment { databaseId url extension }"
      }
    })

    return request.data
  }

  private async request(config: AxiosRequestConfig) {
    return this.instance(config)
  }
}