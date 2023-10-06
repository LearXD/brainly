"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLanguage = exports.acceptedLanguages = void 0;
const acceptedLanguages = [
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
];
exports.acceptedLanguages = acceptedLanguages;
const addLanguage = (language) => {
    const exists = acceptedLanguages.find(({ code, name }) => code === language.code || name === language.name);
    if (exists) {
        throw new Error(`Language ${language.name} already exists`);
    }
    acceptedLanguages.push(language);
};
exports.addLanguage = addLanguage;
