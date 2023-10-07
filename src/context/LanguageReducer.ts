import { LanguageState } from "../interfaces/interfaces";
type LanguageAction = 
    | { type: 'getLanguage', payload: string}

const LanguageReducer = (state: LanguageState, action: LanguageAction): LanguageState => {
    if (action.type === "getLanguage") {
        return { ...state, lan:action.payload } 
    }
    return state
}
export default LanguageReducer