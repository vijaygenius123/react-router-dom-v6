import {useParams} from "react-router-dom";

export const Book = () => {
    const {id} = useParams();
    return (
        <>
            <h1 className={"text-2xl"}>Book - {id}</h1>
        </>
    )
}
