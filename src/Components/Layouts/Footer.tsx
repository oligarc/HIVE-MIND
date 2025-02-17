import Networks from "../Networks"

function Footer() {
    return (
      <footer className="mt-2 p-10 rounded-b-md sticky">
          <div className="flex justify-between items-center">
  
              <div>
                  <nav>
                      <ul className="inline-flex space-x-4 text-negro-abeja text-lg">
                          <li><a href="#"><span>&copy;</span> 2025 Hive Mind</a></li>
                          <li><a href="#">Aviso legal</a></li>
                          <li><a href="#">Política de Privacidad</a></li>
                          <li><a href="#">Política de Cookies</a></li>
                      </ul>
                  </nav>
              </div>
  
              <div className="div">
                  <Networks />
              </div>
  
          </div>
      </footer>
    )
  }
  
  export default Footer