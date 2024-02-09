import { Language } from "./language";
import { TranslatedWord } from "./translatedWord";
export class Category {
    constructor(
      public categoryName: string,
      public numericIdentifier: number,
      public lastModifiedDate: Date,
      public sourceLanguage: Language,
      public targetLanguage: Language,
      public wordPairs: TranslatedWord[] = []
    ) {}
  }