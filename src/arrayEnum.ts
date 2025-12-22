
// array in ts
const array: number[] = [1,2,3,4,5]
const array2: Array<number> = [ 1,2,3,4]   //this is also the way to define array type.
const students:string[] = ["adi", "aman", "dii"]



//array of objects ***
type Car = {
    Model:string,
    price: number
}


const Carlist : Car[] = [
    {
        Model :"fortuner",
        price:45
    },
    {
        Model: "swift",
        price:0
    }
]


//readonly--array
const cities : readonly string[] = [ "delhi", "bombay"]

//now it can't be manupulated like -
//cities.push("pune")



//-- multidimensional array--
const table : number [][] = [
    [1,2,3],
    [4,5,6]
]



//---------------------------tuples-----------------------------

let CarTuple: [ string, number]

CarTuple = [ "fortuner", 123]   // we have to put the value as defined in the tuple like firstly string and number
//CarTuple = [64644 , "dhfh"]   //this is not allowed.

//readonly tuples-
const location : readonly [number, number] = [20.45, 45.78]



//## Named tuple ----> most preference+++
const CarItems : [name: string, price:number] = [ "Swift", 1234]










//------------------------------- Enums :restrict the choice-------------------------------------
//#### standard practice to use in CAPS not madatory.

enum CupSize{
    SMALL, MEDIUM, LARGE
}
const size = CupSize.LARGE


//auto increment val in enum.
enum status {
    PENDING = 100,
    SERVED,  //101   --automatic val
    CANCELLED  //102  --automatic val
}
enum Chaitype {
    MASALA = "masala",
    GINGER = "ginger"
}

function MakeChai (type: Chaitype){
    console.log(`Making ${type}`)
}

MakeChai(Chaitype.MASALA)




//hitrogenous val  --> not good practice prefer one data type not mandatory but best practice...
enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const s = Sugars.LOW


//##### this can be happen take care of that because in the end tuples is also array...
let t : [string, number] = ["chai", 10]
t.push("extra")   