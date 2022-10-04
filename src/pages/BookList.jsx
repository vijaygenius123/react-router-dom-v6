import {Link} from "react-router-dom";

export const BookList = () => {
    return (
        <>
            <ul className={"books__list"}>
                <li><Link to={"/books/1"}>Book 1</Link></li>
                <li><Link to={"/books/2"}>Book 2</Link></li>
                <li><Link to={"/books/2"}>Book 3</Link></li>
            </ul>
        </>
    )
}
