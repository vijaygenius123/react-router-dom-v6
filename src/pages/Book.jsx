import {useParams} from "react-router-dom";
import {useBook} from "../utils";

export const Book = () => {
    const {id} = useParams();
    const {book, isLoading, isError} = useBook(id)

    if (isLoading) return <h1>Loading...</h1>
    if (isError) return <h1>Error Loading Book...</h1>

    return (
        <>
            <>
                <h1 className={"text-2xl"}>{book.name}</h1>
                <img className="max-h-96" src={book.image} alt=""/>
            </>

        </>
    )
}
