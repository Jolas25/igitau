export default function HeaderMenu({setPage, page}) {
    return(
        <ul className="header__menu-list menu__list">
            <li className={page === "main" ? "menu__list-item active" : "menu__list-item"}><button className="menu__list-button" onClick={() => setPage("main")}>Main</button></li>
            <li className={page === "about" ? "menu__list-item active" : "menu__list-item"}><button className="menu__list-button" onClick={() => setPage("about")}>About</button></li>
            <li className={page === "contacts" ? "menu__list-item active" : "menu__list-item"}><button className="menu__list-button" onClick={() => setPage("contacts")}>Contacts</button></li>
            <li className={page === "info" ? "menu__list-item active" : "menu__list-item"}><button className="menu__list-button" onClick={() => setPage("info")}>Info</button></li>
        </ul>
    )
}
