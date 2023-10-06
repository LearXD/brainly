"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brainly_1 = __importDefault(require("../api/brainly"));
const languages_1 = require("../interfaces/languages");
const DEFAULT_LANGUAGE = 'pt';
class Brainly {
    options;
    static instance;
    api;
    constructor(options = {}) {
        this.options = options;
        Brainly.instance = this;
        this.initLanguage();
        this.api = new brainly_1.default({ language: this.options.language });
    }
    initLanguage() {
        const defaultLanguage = languages_1.acceptedLanguages.find(({ code }) => code === DEFAULT_LANGUAGE);
        if (!this.options?.language) {
            console.warn(`None language was provided. Using default language: ${defaultLanguage.name}`);
            this.options.language = defaultLanguage;
            return;
        }
        this.options.language = languages_1.acceptedLanguages.find(lang => lang.code === this.options.language.code) || defaultLanguage;
    }
    search = async (query, limit = 10) => {
        return this.api.search(query, limit);
    };
    getQuestionById = async (id) => {
        return this.api.getQuestionById(id);
    };
}
exports.default = Brainly;
