import {createServer, Response} from "miragejs"


export function makeServer({environment = "test"} = {}) {

    const books = [
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

    return createServer({
        environment,

        routes() {
            this.get("/books/:id", (_, request) => {
                let id = parseInt(request.params.id, 10)
                const book = books.find(book => book.id === id)
                if (book)
                    return book
                else return new Response(404)
            })
            this.get("/books", () => {
                return books
            })
        },
    })
}
