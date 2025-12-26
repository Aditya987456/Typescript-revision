//web request-axios...

import axios from "axios"
import type { AxiosResponse } from "axios"   //explicitly told importing  the type...



//this is the todo that will going to fetch
// userId	1
// id	1
// title	"delectus aut autem"
// completed	false

interface Todos {
    userId:number,
    id:number, 
    title:string,
    completed:boolean
}


//this function will return todos as promise here....wkt
async function fetchTodo(todoNum: number): Promise<Todos> {
  try {
    const res : AxiosResponse<Todos> = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${todoNum}`
    )
    return res.data

  } catch (error:any) {
        if(axios.isAxiosError(error)){
            throw error.message
        }

        throw error;
  }
}


const todoData = await fetchTodo(5)
console.log(`hey there! Your todo data is -- `,todoData)




//--------------using fetch----------------

const fetchTodo2 = async (todoNum:number) : Promise<Todos> => {

    try{
        const todoNumber = todoNum
        const response = await fetch( `https://jsonplaceholder.typicode.com/todos/${todoNumber}`, {
            method: "GET",
        })

        if(!response.ok){
            throw new Error(`HTTP error ${response.status}`)
        }

        //if everything fetched correctly then ...
        const data:Todos = await response.json()
        return data;

    }catch(error:any){
        throw error;

    }
}

const todoResult = await fetchTodo2(6)
console.log(`Your todo using fetch method is --- `, todoResult)









