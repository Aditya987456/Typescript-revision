# Typescript-revision
Revising Typescript from chaiaurcode yt channel playlist.

---

<br>

<br>


## #1: Why need to use TS??

Problems with JS ?

- JavaScript is dynamically typed.
- Errors appear at runtime, not while writing code and more...

Therefore, TypeScript adds a type system on top of JavaScript
```

//type of name is string, and the output of the greet function will be string as well.

function greet (name : string):string{
    return `Hello ${name}`
}


console.log(greet('sarkar'));
console.log(greet(44))      //gives error at compile time.

```

> TypeScript does not run in the browser. 
It gets compiled to JavaScript




<br>
<br>
<br>
<br>
<br>

## #2: TypeScript under the hood 


```
TypeScript Code (.ts)
   ↓
Lexer
   ↓
Parser
   ↓
Binder
   ↓
Checker
   ↓
Emitter
   ↓
JavaScript Output (.js / .d.ts)


```


Lexer → breaks code into tokens

Parser → builds AST (Tree)

Binder → connects names to scopes, Symbol tables

Checker → validates types, Syntax check, short circuit

Emitter → outputs JavaScript ( .js, .d.ts, .map )

> 

> Browser/Node never sees TypeScript. Only JavaScript is executed



<br>
<br>
<br>
<br>
<br>

## #3: TypeScript installation...
> installation globally (-g)  or project wise as well - our choice...



<br>
<br>
<br>
<br>
<br>



## #4: type annotation and inferencing in TS.

> Annotation in TS

Telling TypeScript what type a variable, parameter, or return value should be...


```
let age:number = 21;
let username:string = "sarkar";

function greet(name:string): string{
   return `Hello ${name}`;
}
```

<br>
<br>

> Inferencing in TS

TypeScript automatically infers types based on assigned values.

```
let age = 10  //automatically inferred as number.
let name = 'hola'   //automatically inferred as string.

let age='21'   // ERROR...

```



<br>
<br>
<br>
<br>
<br>


## #5: Unions and any

> Unions - Variables to have multiple types.

```
let userId : string | number;

userId = 45;
userId = 'abc67';
```

> any - disable the type checks for variable.
 ```
 let respose : any;

 response = 'abc';
 response = 123;
 response = false;
 ```


<br>
<br>
<br>
<br>
<br>


## #6: Type Narrowing and Type Guards.
> broader type --> more specific type.

<br>
<br>

Type narrowing is the process of refining a broader type into a more specific type within a conditional block. 
Type guards are the mechanisms that enable this narrowing.

for example - 

```
function getChai(kind:string | number){
   //here TS confuse which type is the kind. is ... how to give suggestions?
   return `making chai order ${kind}...`
}
```

Therefore need to use type narrowing using type guards...



<br>
<br>
<br>




> 1." typeof "  Type Guard
```
function getChai(kind:string | number) {
    if(typeof kind === "string"){
        return `Making ${kind} chai...`
    }

    return `Chai order: ${kind} `
}
```

<br>
<br>
<br>



> 2." instanceof "  type guard

```
class User {
    name = "Adii"
}

class Admin {
    name = "Aditya"
}

function getName( username: User  | Admin){
    if(username instanceof User){
        return username.name;
    }
}

// by checking instanceof username we are now 100% sure that name in username is from which class.

```

<br>
<br>
<br>



> 3. in

> 4. as

> 5. custom type

> 6. unknown , any

<br>
<br>
<br>

> examples of some of the type narrowing--

```
class Cat{
   meow(){
      console.log(`mewo mewo!`)
   }
}

class Dog{
   bark(){
      console.log(`barking!`)
   }
}

function AnimalSound(animal: Cat | Dog){
   if(animal instanceof Dog){
      animal.bark()
   }else{
      animal.meow()
   }
}
```



<br>
<br>
<br>
<br>
<br>
<br>


## #7: Type assertion , type unknown , type never.

> type Assertion ---   "as"

- in TS conversion like things not like -- Number("12")
- assertion not means safety...



<br>
<br>

```
let value: unknown = "adiii";

let str = value as string;
console.log(str.toUpperCase());    //here works becz we doing on str.

```

<br>
<br>
<br>



eg- many type guards ...
```
type User = { name: string };

function parseUser(data: unknown): User {
  if (
   //before using unknown type 'data' we have to mention type
    typeof data === "object" &&
    data !== null &&
    "name" in data
  ) {
    return data as User;
  }
  throw new Error("Invalid user");
}

```





> unknown - before using we have to define the type or take responsibility of type then do things--

```
let data:unknown;
data = "hello saaar"
data = 2.96
data = [4,5,6]

//now before using we have to define or take responsibility of type --
if(typeof data === "number"){
    data.toString();
}
```


<br>
<br>
<br>
<br>

### Never in TS - something that can never happen
- void means "returns nothing useful" (the function completes normally)
- never means "never returns at all" (execution stops)

<br>
<br>


```
type A = string & number; // never type
```


```
//eg- never means let say a function that always crash
function crash(): never {
  throw new Error("Boom");
}

```



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



## #8:Types and Interface in TS

> type - use type for unions, primitives, function signatures, and advanced type compositions.

```
type carModel = "maruti" | "volkswagon" | "toyota"


type User = {
   name:string;
   id:number;
}

//func type-
type Addition = (a:number , b:number)=>number


```


<br>
<br>
<br>


> interface - mainly Use interface for object shapes and when working with classes.

```
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

```


<br>
<br>
<br>

> optional type -  may or may not exist...

```
 type Employee = {
    name:string
    id:number
    salary?:string
 }
```

<br>
<br>


> readonly - only one type allow to assign value.

```
type User = {
  readonly id: number;
  name: string;
};

const user: User = { id: 1, name: "Aditya" };
user.name = "Raj";   
user.id = 2;      // now its not allowed --> error.

```



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## #9: Object in TS.

> structural typing - different type name same structure.

```
type User = {
  name: string;
  age: number;
};

type Person = {
  name: string;
  age: number;
};

const p: Person = {
  name: "Aditya",
  age: 21,
};

const u: User = p; 

```

<br>
<br>

> Duck typing - object has the required shape, TypeScript accepts it. (even different structure)

```
type car = { model:string}

let myCar:car = { model: "alto800"}

let yourCar = {
    model:"wagnar",
    company:"maruti",
    price:199
}
myCar = yourCar   //works no issue here.
```

<br>
<br>

> Partial<T> — Make Everything Optional.

```
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
car1( {} ) //works becz it made all data types optional
```


<br>
<br>

> Required<T> — Make Everything Mandatory

```
type Vehicle = {
    name?:string;
    price?:number
}

const Vehicle1 = (info: Required<Vehicle>) =>{
    console.log(`info of vehicle -- ${info}`)
}

Vehicle1({name:"xuv700", price:456}) // we have to give all here even though we have made data type as optional
```



<br>
<br>

> Pick<T, K> — Select Few Properties 

> Omit<T, K> — Remove Some Properties (Very Common)


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## #10: Functions in TS.

<br>
<br>

> Basic funtion with types..

```
function SayName(name:string){
   console.log(`My name is ${name}`)
}

SayName("aadi")




//one more example -
function CombineString(name1:string, name2:string):string
{
    return (name1+name2);
}

const result2 = CombineString("hello", "saaar")
console.log(result2)
```

<br>
<br>


> Optional parameter - should be written after the required params

```
function Car(model:string, price?:number){
    if(price){
        console.log(`We have the model of the car is ${model} and its price is ${price}`)
    }

    console.log(`the model of the car is ${model}`)
}
```

<br>
<br>

> Default params

```
function Car(model:string, company:string = "Toyota"){
   console.log(`Company of the car is ${company} and its model is ${model}`)
}
```

<br>
<br>

> Union type function params - 

```
function printId(id: string | number) {
  return `#ID: ${id}`;
}

```


<br>
<br>

> Void return type -
```
function SayMyName(name:string):void {
   console.log(`Hiii ${name}`)
}
```

<br>
<br>

> function type -function never finishes , function never returns a value

```
function fail(): never {
  throw new Error("Failed");
}

```


<br>
<br>


> Function Overloading - multiple type signatures, single implementation...

```
function print( name:string): string
function print (id: number): string

function print(value: any) {
  return value.toString();
}

print("aadii_tw")
print(3)

```

<br>
<br>

> Rest params- 
> when number of arguments is unknown , rest parameter should be in last...also arguments are grouped into an array

```

```







<br>
<br>





> Async Function - 
> async function always returns a Promise, 
return value is wrapped in Promise<T>

```
async function getUser(): Promise<string> {
  return "Aditya";
}




const fetchData = async (): Promise<number> => {
  return 10;
};

```



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## #11: Arrays, tuples, enums in TS.

<br>
<br>

> <b>Arrays - </b>

```
const array: string[] = ["hello", "saaar"]
let Price: Array<number> = [199, 299, 399];

let mixed : (string | boolean)[] = ["true", true, "hello"]
```

<br>

> <b> 2D - Arrays - </b>

```
let matrix: number[][] = [
  [1, 2],
  [3, 4],
];

```
<br>
<br>
<br>
<br>
<br>

> <b>Tuples - </b>Tuples are fixed-length arrays with fixed types at specific positions.

<br>

```
let CarTuple: [ string, number]
CarTuple = [ "fortuner", 123] 
```
- changing position of datatype is not allowed like -
 ```CarTuple = [64644 , "dhfh"] ```

 - Since tuples is still an array so it allows things like - ```CarTuple.push(123)```

<br>

 > Readdonly tuples - best practice to use 
 ```
 const location : readonly [number, number] = [20.45, 45.78]
 ```

<br>
<br>

> Named Tuples -  most preference to use like this...
```
const CarItems : [name: string, price:number] = [ "Swift", 1234]
```


<br>
<br>
<br>
<br>

> <b>Enums - Enums are used to define a set of named constants. </b>

*  standard practice to use in CAPS not madatory.

<br>

```
enum CupSize {
  SMALL,
  MEDIUM,
  LARGE,
}

const size = CupSize.LARGE; //here the value will be 2 becz val auto increment from 0.



//also if we define one value then all value auto increment- like 
 enum Status {
  PENDING = 100,
  SERVED,     // 101
  CANCELLED,  // 102
}

// also using const --> may becz performance optimized by removing at compile time.
const enum SugarLevel {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

let sugar = SugarLevel.LOW;


```



<br>
<br>

> Api examples -

```
enum OrderStatus {
  PENDING = "pending",
  COMPLETED = "completed",
}

type Order = readonly [id: number, status: OrderStatus];

const order1: Order = [101, OrderStatus.PENDING];

```





<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## #12: OOPs in TS.

<br>
<br>

> <b>this keyword</b>  - same as JS it refers to the same object instance 

```
class Wallet {
  balance = 100;

  getBalance() {
    return this.balance;    //this.balace means balance of the object that call the method.
  }
}
```

<br>
<br>

> <b>Access Modifiers</b> - like public, private, protected...

```
class InfoStudent{

    public name:string = "aadii_tw"

    //when we use private then we also used a method so we can access this private val
    private DOB:number = 140245
    #myPassword:string = "patanahi"

    getPassword(){
      console.log(`Hii my Password is - ${this.#myPassword}`)
    }

    reveal(){
        console.log(`My birth date is ${this.DOB}`)
    }


    //protected -- access within class or to those class who inherit from it.
    protected RollNo : number = 2201100100009

}

const Student = new InfoStudent()
Student.reveal()   //to access private....


class college extends InfoStudent{
    getStudentRollNo(){
        console.log(`Roll no of the student : ${this.RollNo}`)
    }
}

```

<br>
<br>

> <b>Readonly properties - </b> 

```
class Cup{
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}
const c = new Cup(250);  //this will give error...
```

<br>
<br>

> <b>Controlled Gates- </b> getter , setter and here ---  <b>get,set</b> is prefix  


```
NOTE --
If you set values directly in the constructor (like this._name = name), the setter is skipped.

If you set values using the property (like this.name = name), the setter runs and does its checks.
```



```
class Wallets {
  private balance = 100;

  getBalance() {
    return this.balance;
  }

  setBalance(amount: number) {
    if (amount < 100) throw new Error("Invalid amount");
    this.balance = amount;
  }
}

const myWallet = new Wallets()

//initially balance is 100 
console.log(`Initial balance is - ${myWallet.getBalance()}`) 

//after setting if less than 100
console.log(myWallet.setBalance(99))    //it will gives error.

```


<br>
<br>

> <b>Static member - </b> Static members are like “class-level” variables or functions. They live on the class itself, not on each object we create.

```
class MathUtils {
  // static property
  static PI: number = 3.14159;

  // static method
  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

// --- access without creating an object
console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.circleArea(10)); // 314.159

```


<br>
<br>

> <b>Abstract class - </b>  
when we not want that object is created from this class <br>
Cannot create object of abstract class <br>
****Child must implement abstract methods

```
abstract class Drinking {
    abstract make():void
}

//now we use this class like in another as ---
class ItsMyChai extends Drinking {
    make(): void {
        console.log('making chai...')
    }
}
```



<br>
<br>

> <b>Inheritence - </b> same as JS

```
class Animal {
  move() { console.log("Animal moves"); }
}

class Dog extends Animal {
  bark() { console.log("Dog barks"); }
}

const d = new Dog();
d.move(); // inherited
d.bark(); // own method

```

<br>
<br>

> <b>Composition - </b> better than inheritence ???...

```
class Engine {
  start() { console.log("Engine started"); }
}

class Car {
 // private engine: Engine;

  constructor(private engine: Engine) {
    this.engine = new Engine(); 
  }

  drive() {
    this.engine.start();  //it has all the method that the Engine has
    console.log("Car is driving");
  }
}

const car = new Car();
car.drive();


```








<br>
<br>

> <b>Polymorphism - </b> Same interface, different behavior.

```

class Bird {
  speak(): void {
    console.log("Generic bird sound");
  }
}

class Parrot extends Bird {
  speak(): void {
    console.log("Hello! I can talk!");
  }
}

class Crow extends Bird {
  speak(): void {
    console.log("Caw! Caw!");
  }
}

const chidiya1 = new Parrot()
chidiya1.speak()

const chidiya2 = new Crow()
chidiya2.speak()

```
















