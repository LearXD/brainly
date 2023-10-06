import { Language } from "../../interfaces/languages";
import { SupportedTypes } from "../../interfaces/brainly-api";
interface BrainlyApiOptions {
    language: Language;
}
export default class BrainlyApi {
    private options;
    private instance;
    constructor(options: BrainlyApiOptions);
    search(query: string, limit?: number, supportedTypes?: SupportedTypes): Promise<any>;
    private request;
}
export {};
