import { LanguageMock } from "../interfaces/interfaces";
export const MapLanguages = (languages: LanguageMock[]) => {
  const result = languages.map((language) => ({
    key: language.acronym,
    text: language.name,
    value: language.acronym
  }));
  return result;
};
