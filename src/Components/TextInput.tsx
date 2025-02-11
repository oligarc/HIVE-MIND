import { TextInputProps } from "../types/interfaces"

function TextInput({name,placeholder,value,onChange} : TextInputProps) {
  return (
    <input type="text" className="text-black w-56 p-1
     placeholder-gray-500 placeholder:text-center
     border border-gray-500"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
     />
  )
}

export default TextInput