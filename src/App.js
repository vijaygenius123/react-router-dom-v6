import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import {Book} from "./pages/Book";
import {BookList} from "./pages/BookList";
import Navbar from "./components/Navbar";
import {NotFound} from "./pages/NotFound";
import {Books} from "./layouts/Books";
import {NewBook} from "./pages/NewBook";

function App() {
    return (
        <div className={"p-2"}>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/books"} element={<Books />}>
                    <Route index element={<BookList/>}/>
                    <Route path={"/books/:id"} element={<Book/>}/>
                    <Route path={"/books/new"} element={<NewBook/>}/>
                </Route>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </div>
    );
}

export default App;
