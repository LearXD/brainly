import { Language } from "../../interfaces/languages";
import { BrainlyAnswers, SupportedTypes } from "../../interfaces/brainly-api";
import { BrainlySearch } from "../../interfaces/brainly-api";
interface BrainlyApiOptions {
    language: Language;
}
export default class BrainlyApi {
    private options;
    private instance;
    constructor(options: BrainlyApiOptions);
    search(query: string, limit?: number, supportedTypes?: SupportedTypes): Promise<BrainlySearch>;
    getQuestionById(id: number): Promise<BrainlyAnswers>;
    private request;
}
export {};
