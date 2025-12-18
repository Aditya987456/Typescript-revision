 
 //type --

 type status = "pending" | "retrying" | "success" | "failed"    //these are called literals type (becz we are defining not primitive data type)


 type carDetails = {
    company:string;
    model:string;
 }

 function orderCar(carDetails:carDetails){
    console.log(carDetails.company)
 }

 function TestDrive(info:carDetails){
    console.log(`model of car is ${info.model}`)
 }



 //intersection in type--
 type frontend = {
    developerName:string
    time:number
 }


 type backend = {
    developerName:string
    time:number
    url:string
 }

//here it has both types (frontend + backend)
 type fullApplication = frontend  & backend

 const webApplication : fullApplication = {
    developerName:"aadii_tw",
    time:21,
    url:"https://reachaiapp.online"
 }




 
 //interface ------------> in class mostly...

 interface SmartPhone {
    company:string;
    model:string;
    priceSlab: "lass than 10k"  |  "between 10-30k"  |  "more than 30k"
 }


 class OrderPhone implements SmartPhone{
    company: string="apple"
    model: string = "iphone17pro"
    priceSlab: "lass than 10k" | "between 10-30k" | "more than 30k" = "more than 30k"
 }


//one more example for interface---
 interface Car {
   type: "sedan" | "xuv" | "nahi pata"
   company:string
   model:string
   price:number
}

//interface can also extend from interface---
interface IndianCar extends Car {
   allowedLocation: "city" | "villages"
}


class OrderCar implements Car {
   type: "sedan" | "xuv" | "nahi pata" = "nahi pata"
   company: string = "Toyota"
   model: string = "fortuner"
   price: number = 150
}





 //optional type...

 type Employee = {
    name:string
    id:number
    salary?:string
 }



 //readonly---one time we have to set...

 type user = {
    name:string
    readonly rollNo:number
 }

 const Student:user = {
    name:"adi",
    rollNo:7
 }

 //now we can't do --
//Student.rollNo = 10



