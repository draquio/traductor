import { TranslateState } from "../interfaces/interfaces";
type TranslateAction = 
    | { type: 'getTranslate', payload: string}

const TranslateReducer = (state: TranslateState, action: TranslateAction): TranslateState => {
    if (action.type === "getTranslate") {
        return { ...state, text:action.payload } 
    }
    return state
}
export default TranslateReducer