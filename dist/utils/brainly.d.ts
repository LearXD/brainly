import { Language } from "../interfaces/languages";
export declare const DEFAULT_LANGUAGE = "pt";
interface BrainlyOptions {
    language?: string;
}
export default class Brainly {
    options: BrainlyOptions;
    private api;
    language: Language;
    constructor(options?: BrainlyOptions);
    initLanguage(): void;
    search: (query: string, limit?: number) => Promise<import("../interfaces/brainly-api").BrainlySearch>;
    getQuestionById: (id: number) => Promise<import("../interfaces/brainly-api").BrainlyAnswers>;
}
export {};
