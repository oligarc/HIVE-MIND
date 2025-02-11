export interface TextInputProps{
    name:string,
    placeholder:string,
    value?:string,
    onChange?: () => void
}