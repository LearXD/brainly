"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const languages_1 = require("../interfaces/languages");
const DEFAULT_LANGUAGE = 'pt';
class Brainly {
    options;
    constructor(options) {
        this.options = options;
        const defaultLanguage = languages_1.acceptedLanguages.find(lang => lang.code === DEFAULT_LANGUAGE);
        if (!this.options.language) {
            console.warn(`None language was provided. Using default language: ${defaultLanguage.name}}`);
            this.options.language = defaultLanguage;
            return;
        }
        this.options.language = languages_1.acceptedLanguages.find(lang => lang.code === this.options.language.code) || defaultLanguage;
    }
}
exports.default = Brainly;
