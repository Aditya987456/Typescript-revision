import axios from "axios";
import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}


export function useFetch<T>(url:string): FetchState<T> {
    //#### not afraid of this it just like generic and types understand it slowly using the separate generic example.
    const [ state, setState ] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    } );

    //useEffect to make the fetch request here......
    useEffect( ()=>{

        async function fetchTodo() {

            try {
                const res = await axios.get(url)
                setState({
                    data:res.data,
                    loading:false,
                    error:null
                })

            } catch (error:any) {
                setState({
                    data:null,
                    loading:false,
                    error:error
                })
                throw error;
            }
        }

        fetchTodo();

    }, [url] )

    return state;


}