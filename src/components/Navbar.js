import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className={"navbar"}>
            <ul className={"navbar__container"}>
                <li className={"navbar__container__item"}>
                    <Link to={"/"}>Home</Link>
                </li>
                <li className={"navbar__container__item"}>
                    <Link to={"/books"}>Books</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
