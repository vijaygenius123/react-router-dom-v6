import {Outlet} from "react-router-dom";

export const Books = () => {
    return (
        <>
            <h1 className={"text-6xl"}>Books</h1>
            <Outlet/>
        </>
    )
}
