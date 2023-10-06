"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class BrainlyApi {
    options;
    instance;
    constructor(options) {
        this.options = options;
        this.instance = axios_1.default.create({
            validateStatus: () => true,
            headers: {
                'User-Agent': 'Android-App 5.161.0'
            }
        });
    }
    async search(query, limit = 10, supportedTypes = ["question", "tbsQuestion"]) {
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
        });
        return request.data;
    }
    async getQuestionById(id) {
        const request = await this.request({
            url: `https://brainly.com.br/graphql/${this.options.language.code}?operationName=QuestionByIdQuery`,
            method: 'POST',
            data: {
                operationName: "QuestionByIdQuery",
                variables: { id },
                query: "query QuestionByIdQuery($id: Int!) { questionById(id: $id) { databaseId content points grade { databaseId name } subject { databaseId name slug } author { __typename ...AuthorFragment } canBeAnswered attachments { __typename ...AttachmentFragment } answers { hasVerified nodes { databaseId content author { __typename ...AuthorFragment } thanksCount isBest created attachments { __typename ...AttachmentFragment } verification { hasAccess approval { approvedTime } } comments(last: 0) { count } rating ratesCount } } } }  fragment AuthorFragment on User { databaseId nick rank { name } avatar { thumbnailUrl } }  fragment AttachmentFragment on Attachment { databaseId url extension }"
            }
        });
        return request.data;
    }
    async request(config) {
        return this.instance(config);
    }
}
exports.default = BrainlyApi;
