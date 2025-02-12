import { NavHeaderProps } from "../types/interfaces"
import Logo from "./Logo"
import SearchInput from "./SearchInput"

function Header({firstli,secondli,thirdli,fourthli} : NavHeaderProps) {
  return (
    <header>
        <div className="flex justify-between items-center">
            <div>
                <Logo />
            </div>
            <div>
                <nav>
                  <ul className="inline-flex space-x-8 text-2xl">
                    <li><a href="#">{firstli}</a></li>
                    <li><a href="#">{secondli}</a></li>
                    <li><a href="#">{thirdli}</a></li>
                    <li><a href="#">{fourthli}</a></li>
                  </ul>

                </nav>
            </div>
            <div>
              <SearchInput name="prueba" placeholder="Busca nuestra magia" />
            </div>
        </div>
    </header>
  )
}

export default Header