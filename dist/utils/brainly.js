"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_LANGUAGE = void 0;
const brainly_1 = __importDefault(require("../api/brainly"));
const languages_1 = require("../interfaces/languages");
exports.DEFAULT_LANGUAGE = 'pt';
class Brainly {
    options;
    api;
    language;
    constructor(options = {}) {
        this.options = options;
        this.initLanguage();
        this.api = new brainly_1.default({ language: this.language });
    }
    initLanguage() {
        const defaultLanguage = languages_1.acceptedLanguages.find(({ code }) => code === exports.DEFAULT_LANGUAGE);
        if (!this.options?.language) {
            console.warn(`None language was provided. Using default language: ${defaultLanguage.name}`);
            this.language = defaultLanguage;
            return;
        }
        this.language = languages_1.acceptedLanguages.find(lang => lang.code === this.options.language) || defaultLanguage;
        if (!this.language) {
            console.warn(`Language ${this.options.language} not found. Using default language: ${defaultLanguage.name}`);
            this.language = defaultLanguage;
        }
    }
    search = async (query, limit = 10) => {
        return this.api.search(query, limit);
    };
    getQuestionById = async (id) => {
        return this.api.getQuestionById(id);
    };
}
exports.default = Brainly;
