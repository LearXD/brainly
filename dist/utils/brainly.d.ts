import { Language } from "../interfaces/languages";
interface BrainlyOptions {
    language?: Language;
}
export default class Brainly {
    options: BrainlyOptions;
    static instance: Brainly;
    private api;
    constructor(options?: BrainlyOptions);
    initLanguage(): void;
    search: (query: string, limit?: number) => Promise<import("../interfaces/brainly-api").BrainlySearch>;
    getQuestionById: (id: number) => Promise<import("../interfaces/brainly-api").BrainlyAnswers>;
}
export {};
