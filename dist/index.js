"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brainly_1 = __importDefault(require("./utils/brainly"));
(async () => {
    const instance = new brainly_1.default();
    const response = await instance.search('Quem foi o primeiro presidente do Brasil?');
    const question = await instance.getQuestionById(response.results[0].question.id); //
    console.log(question.data.questionById.answers);
})();
