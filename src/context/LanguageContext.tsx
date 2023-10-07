import {createContext} from "react";
import { LanguageState } from "../interfaces/interfaces";


export type LanguageContextProps = {
  languageState: LanguageState
  getLanguage: (lan:string) => void
}
export const LanguageContext = createContext<LanguageContextProps>({} as LanguageContextProps);