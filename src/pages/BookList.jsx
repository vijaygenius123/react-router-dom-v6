import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {createServer} from "miragejs"
import axios from "axios";

createServer({
    routes() {
        this.get("/books", () => {
            return [
                {
                    id: 1,
                    name: "Harry Potter And The Philosophers Stone",
                    year: 2010,
                    image: 'https://m.media-amazon.com/images/I/91ocU8970hL.jpg'
                },
                {
                    id: 2,
                    name: "Harry Potter And The Chamber of Secrets",
                    year: 2014,
                    image: 'https://m.media-amazon.com/images/I/81nA2C3E-wL.jpg'
                },
                {
                    id: 3,
                    name: "Harry Potter And Prisoner Of Azkaban",
                    year: 2017,
                    image: 'https://m.media-amazon.com/images/I/81lAPl9Fl0L.jpg'
                },
                {
                    id: 4,
                    name: "Harry Potter And Goblet Of Fire",
                    year: 2017,
                    image: 'https://m.media-amazon.com/images/I/810jKiNChxL.jpg'
                },
                {
                    id: 5,
                    name: "Harry Potter And The Order Of The Phoenix",
                    year: 2017,
                    image: 'https://m.media-amazon.com/images/I/91TpLHDnuFL.jpg'
                },
                {
                    id: 6,
                    name: "Harry Potter And Half Blood Prince",
                    year: 2017,
                    image: 'https://m.media-amazon.com/images/I/5136QORtwkL._SX332_BO1,204,203,200_.jpg'
                },
            ]
        })
    },
})


export const BookList = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get('/books')
            .then(resp => {
                setLoading(false)
                setBooks(resp.data)
            })
            .catch(() => {
                setLoading(false)
                setBooks([])
            })
    }, [])

    return (
        <>
            {
                loading ?
                    <p className={"text-2xl animate-pulse"}>Loading...</p> :
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
            }
        </>
    )
}
