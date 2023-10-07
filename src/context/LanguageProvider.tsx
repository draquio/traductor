import { useReducer } from "react";
import { LanguageState } from "../interfaces/interfaces";
import { LanguageContext } from "./LanguageContext";
import LanguageReducer from "./LanguageReducer";
const initial_state: LanguageState = {
  id: crypto.randomUUID(),
  lan: "EN",
  word: "Translation",
};
interface Props {
  children: JSX.Element | JSX.Element[]
}

export const LanguageProvider = ({ children }: Props) => {
  const [languageState, dispatch] = useReducer(LanguageReducer, initial_state);
  const getLanguage = (lan: string, word: string) => {
    const id = crypto.randomUUID();
    dispatch({ type: "getLanguage", payload: {id,lan,word} });
  };

  return (
    <LanguageContext.Provider value={{ languageState, getLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
