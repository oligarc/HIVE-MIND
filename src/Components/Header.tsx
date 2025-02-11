import Logo from "./Logo"
import TextInput from "./TextInput"

function Header() {
  return (
    <header>
        <div className="flex justify-between items-center">
            <div>
                <Logo />
            </div>
            <div>
                <nav>

                </nav>
            </div>
            <div>
              <TextInput name="prueba" placeholder="¿Quieres ver lo que hacemos?" />
            </div>
        </div>
    </header>
  )
}

export default Header