//basic functions-

function Add(a:number, b:number): number
{
    return a+b;
}

const result1 = Add(2,4)
console.log(result1)

function CombineString(name1:string, name2:string):string
{
    return (name1+name2);
}

const result2 = CombineString("hello", "saaar")
console.log(result2)



//optinal params should be after required params...
function Car(model:string, price?:number){
    if(price){
        console.log(`We have the model of the car is ${model} and its price is ${price}`)
    }

    console.log(`the model of the car is ${model}`)
}





//nothing return then void is good to use 
function message(msg:string) : void {
    console.log(`MY message is - ${msg}`)
}

//optional parameter, default parameter- but all params should be after the required params,




// ------------------ function type --------------------
type IsEven = (value:number)=> boolean;

//this is a function that check even.
const CheckEven : IsEven = (num)=> {
    if(num%2 === 0) return true;
    return false;
}






//--never-- 
function loop(): never {
  while (true) {}
}





//function overloading 
function print( name:string): string
function print (id: number): string

function print(value: any) {
  return value.toString();
}

print("aadii_tw")
print(3)


//Rest params...

//#### values.reduce((accumulator, current) => accumulator + current);

function Sum (...values: number[]): number{
    return values.reduce((val1, val2)=> val1 + val2, 0)
}
const values:number[] = [1,2,3,4,5,6,7,8,9,10]
const ans = Sum(...values);
console.log(`sum of the array - ${ans}`)








// param with definition...
function createChai( order:{
    type:string;
    cost:number;
    sugar:string;
    size:"large" | "medium" | "small";
}) : number {

    return order.cost;
}