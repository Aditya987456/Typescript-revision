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


## #6: 








