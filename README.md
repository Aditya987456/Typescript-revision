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













