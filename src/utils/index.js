import axios from "axios";
import useSWR from 'swr'

const fetcher = url => axios.get(url).then(res => res.data)

export const useBooks = () => {
    const { data, error } = useSWR(`/books`, fetcher)
    return {
        books: data,
        isLoading: !error && !data,
        isError: error
    }
}

export const useBook = (id) => {
    const { data, error } = useSWR(`/books/${id}`, fetcher)
    console.log(error)
    return {
        book: data,
        isLoading: !error && !data,
        isError: error
    }
}
