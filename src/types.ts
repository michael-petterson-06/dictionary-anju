export type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

export type DictionaryInfo = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
}