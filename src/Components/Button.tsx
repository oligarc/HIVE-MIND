import { ButtonProps } from "../types/interfaces"

function Button({displayText,rounded=false,onClick} : ButtonProps) {
  return (
    <button className={`text-blanco-nectar font-bold
     bg-hive-3 hover:bg-naranja-calido 
     cursor-pointer px-4 py-2 ${rounded ? "rounded-3xl" : "rounded-none"}`}
     onClick={onClick}>
      {displayText}
    </button>
  )
}

export default Button