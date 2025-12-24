//like 70-80% thing we use in interface we can convert on the type but we just use the interface..
//interface - mostly use how to define methods 


interface AuthServices {

    //login method
    login (email:string, password:number) :boolean;

    //logout method.
    logout():void
}

class auth implements AuthServices{

     login(email: string, password: number) {
        return email === "adityarajxdev@gmail.com"
     }

     logout() {
         console.log(`You are logged out saaaaar.`)
     }
}













//index signature
interface DeliverReview{
    [bahaviour:string]: number
}








interface User{
    name:string
}

interface User{
    age: number
}



//its like interface gets merged....

const u:User = {
    name: "aadii_tw",
    age : 22
}

interface A { a: string}
interface B { b: string}

interface C extends A,B {}

const 



