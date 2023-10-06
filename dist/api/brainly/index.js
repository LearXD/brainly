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
        this.instance = axios_1.default.create({});
    }
    async search(query, limit = 10, supportedTypes = ["question", "tbsQuestion"]) {
        const request = await this.request({
            url: 'https://unified-search.brainly.com/api/v1/pt/search',
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
    async request(config) {
        return this.instance(config);
    }
}
exports.default = BrainlyApi;
