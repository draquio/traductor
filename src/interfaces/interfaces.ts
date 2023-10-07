type idstring = `${string}-${string}-${string}-${string}-${string}`
export interface TranslateState {
    id: idstring
    text: string
}


export interface Props {
    children: JSX.Element | JSX.Element[]
}