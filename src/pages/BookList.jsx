import {Link} from "react-router-dom";
import {useBooks} from '../utils'

export const BookList = () => {
    const {books, isLoading, isError} = useBooks()

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error Loading Book...</h1>

    return (
        <ul className={"books__list"}>
            {
                books.map((book) => (
                    <li key={book.id}>
                        <div className={"book__container"}>
                            <img src={book.image} alt=""/>
                            <Link to={`/books/${book.id}`}>
                                {book.name}
                            </Link>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
