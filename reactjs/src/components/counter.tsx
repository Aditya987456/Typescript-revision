
import { useState } from "react"

export funtion Counter(){

    //here this are the need of typescript here like we defined the generic of TS here in useState that it will take only number only.
    const [count , setCount ] = useState<number>(0)


    return (
        <div>
        
        <p>Order chai : {count}</p>
        <button
            onClick = { ()=> setCount( (c:number) => c+1 )}
            >
                One more chai order.
        </button>
        </div>
    )
}