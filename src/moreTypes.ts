//---------------type Assertion (as) ----------
//like forcefully - “Trust me bro”

type Book = {
    name:string
}

let bookString = '{"name":"atomic habits"}'
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject.name)    //now suggestion is there



//sometime in input element also -----
const inputElement = document.getElementById("emailId") as HTMLInputElement;







//----------------- ANY -------------------------------
let value:any
value="adiii"
value=8.5
value=false
//even this gives error on run time but TS not complain in any type-
value.toUpperCase()



//-----------------UNKNOWN------------------------

let data:unknown;
data = "hello saaar"
data = 2.96
data = [4,5,6]

//now before using we have to define or take responsibility of type --
if(typeof data === "number"){
    data.toString();
}






//-------------------- TRY-CATCH block ------------------------

try {
    



//here how to deal with error type???? like what is the type of the error type?
} catch (error) {
    if(error instanceof Error){
        console.log("Error", error)
    }
}








//-------------------- NEVER ----------------------------------

type Role = "admin" | "user" | "superAdmin"

//#void return means i am not returning or i don't care about what i am returning
function redirectBasedOnRole(role:Role):void{
    if(role === "admin"){
        console.log(`redirecting to admin dashboard`);
        return
    }

    if(role === "user"){
        console.log(`redirecting to user dashboard`);
        return;

    }

    role

}




//one more eg-
//webservers like things --- use cases
function NeverReturn():never {
    while (true) {
        
    }
}


