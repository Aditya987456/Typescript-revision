import React, { useState } from "react"


interface SubmitFormProps {
    //here method is there that takes two arg and return void...
    onSubmit(order: {name:string, cups:number} ):void
}


export function SubmitForm( {onSubmit}:SubmitFormProps ) {

    const [ name, setName ] = useState<string>("Masala Chai")
    const [ cups, setCups ] = useState<number>(0)

    function HandleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        onSubmit( {name, cups})
    }


    return(
        <form onSubmit={HandleSubmit} >

            <div><h1>Order form-</h1></div>

            <div>
                <label>Chai Name</label>
                <input
                value={name}
                //### here we are using react not reactdom so we will use react here and then here also we use like generic becz here in changeEvent we also need html input therefore
                onChange={ (e:React.ChangeEvent<HTMLInputElement>) => 
                    setName(e.target.value)
                }
                />
            </div>



            <div>
                <label>Cups</label>
                <input
                type="number"
                value={cups}
                onChange={ (e:React.ChangeEvent<HTMLInputElement>) =>
                    // here need to typescast it in number because input returned by the user is mostly in string.
                    setCups(Number(e.target.value))
                 }
                />
            </div>



            <button
            type="submit"
            >
                Submit ORDER
            </button>




        </form>
    )
    
}