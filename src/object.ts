//structure vs duck type
//partial update.--make everydata type optional...
//required
//pick..very less use.
//omit.



const Car = {
    company:"Toyota",
    model:"fortuner",
    indian:true,
    price:99
}



//declaring type of obj.

let tea: {
    name:string;
    price:number;
    isHot: boolean
}

tea = {
    name:"Ginger Tea",
    price:25,
    isHot:true
}


//alias object of types--

// type Car = {
//     company:string;
//     model:string;
//     indian:boolean;
//     features:string[]
// }

// const meraCar:Car = {
//     company:"Toyota",
//     model:"fortuner",
//     indian:true,
//     features: ["suv", "6 air bags"]
// }


//duck typing---
type car = { model:string}
let myCar:car = { model: "alto800"}

let yourCar = {
    model:"wagnar",
    company:"maruti",
    price:199
}
myCar = yourCar //this is ok here because if even extra val comes... required shape is there








//split out data types...-- very useful in TS for clean code and we should use like this.
type Item = {
    name:string,
    quantity:string
}
type Address = {
    street:string,
    pin:number
}

type Order = {
    id:string;
    items: Item[];
    address:Address;
}



//-------- partial type ----------> Make all properties in T optional
type Car = {
    company:string;
    model:string;
    price:number;
}

const car1 = (items: Partial<Car>) =>{
    console.log('hello feom car1 with ', items)
}

car1( {company:"toyota"} )
car1( {model:"fortuner"} )
car1( {} ) //works






//--------- Required ---> it doesn't matter during declaration you made optional but you have to give value when we use required
type Vehicle = {
    name?:string;
    price?:number
}

const Vehicle1 = (info: Required<Vehicle>) =>{
    console.log(`info of vehicle -- ${info}`)
}

Vehicle1({name:"xuv700", price:456})   // we have to give all here...







//----------Pick -- select few properties

type Chai = {
    name:string
    price:number
    isHot:boolean
    ingredients:string
}

type basicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: basicChaiInfo = {
    name:"tea10rs",
    price:52
}








//------omit ---> Exclude fields 
type Chai1 = {
    name:string
    price:number
    isHot:boolean
    SecretIngredients:string
}

type PublicChai = Omit<Chai1, "SecretIngredients">  //here we exclude field like secret things...

