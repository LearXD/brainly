import { Language } from "../interfaces/languages";
interface BrainlyOptions {
    language?: Language;
}
export default class Brainly {
    options?: BrainlyOptions;
    constructor(options?: BrainlyOptions);
}
export {};
