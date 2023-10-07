import {createContext} from "react";
import { TranslateState } from "../interfaces/interfaces";


export type TranslateContextProps = {
  translateState: TranslateState
  getTranslate: (text:string) => void
}
export const TranslateContext = createContext<TranslateContextProps>({} as TranslateContextProps);
