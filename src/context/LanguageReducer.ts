import { LanguageState } from "../interfaces/interfaces";
type LanguageAction = 
    | { type: 'getLanguage', payload: LanguageState}

const LanguageReducer = (state: LanguageState, action: LanguageAction): LanguageState => {
    if (action.type === "getLanguage") {
        return { ...state, lan:action.payload.lan, word:action.payload.word } 
    }
    return state
}
export default LanguageReducer