"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLanguage = exports.Brainly = void 0;
const brainly_1 = __importDefault(require("./utils/brainly"));
exports.Brainly = brainly_1.default;
const languages_1 = require("./interfaces/languages");
Object.defineProperty(exports, "addLanguage", { enumerable: true, get: function () { return languages_1.addLanguage; } });
