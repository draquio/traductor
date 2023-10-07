import { useReducer } from "react";
import { TranslateState } from "../interfaces/interfaces";
import { TranslateContext } from "./TranslateContext";
import TranslateReducer from "./TranslateReducer";
const initial_state: TranslateState = {
  id: crypto.randomUUID(),
  text: "",
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const TranslateProvider = ({ children }: Props) => {
  const [translateState, dispatch] = useReducer(
    TranslateReducer,
    initial_state
  );
  const getTranslate = (text:string) => {
    dispatch({type:"getTranslate", payload:text})
  }

  return (
    <TranslateContext.Provider value={{translateState, getTranslate}}>
      {children}
    </TranslateContext.Provider>
  );
};

