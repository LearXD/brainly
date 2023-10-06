interface Language {
    code: string;
    name: string;
}
type Languages = Language[];
declare const acceptedLanguages: Languages;
type AcceptedLanguageCodes<T> = 'pt' | 'es' | 'en' | T;
declare const addLanguage: (language: Language) => void;
export { acceptedLanguages, addLanguage, Languages, Language, AcceptedLanguageCodes };
