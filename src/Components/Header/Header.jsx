import HeaderMenu from "./HeaderMenu/HeaderMenu"
import logo from "./img/logo.svg"
import "../Header/Header.scss"

export default function Header({setPage, page}) {
    return (
        <header>
            <div className="header__container container">
                <a href="/"><img src={logo} alt="itau" /></a>
                <nav><HeaderMenu setPage={setPage} page={page}/></nav>
                
                <button className="header__signin">Sign In</button>
            </div>
            
        </header>
        
    )
};
