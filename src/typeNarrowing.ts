//------------------------------Type Narrowing-----------------------


function getChaiAny(kind:string | number){
   //here TS confuse which type is the kind. is ... how to give suggestions?
   return `making chai order ${kind}...`
}


//type guards--


// #1: typeof
function getChai(kind:string | number) {
    if(typeof kind === "string"){
        return `Making ${kind} chai...`
    }

    return `Chai order: ${kind} `
}




//#2: Truthiness narrowing -- check for undefined, null, "", 0
function newMsg(msg?:string){
    if(msg){
        return `New message is ${msg}`
    }

    return `No any latest message.`
}




//#3: Instanceof

class User {
    name = "Adii"
}

class Admin {
    admin = "Aditya"
}

function getName( username: User  | Admin){
    if(username instanceof User){
        return username.name;
    }
}




// #4: custom type-
type ChaiOrder = {
    type:string
    sugar:number

}


//validation function checking type of isChaiOrder..
function isChaiOrder(obj:any):obj is ChaiOrder{
    return(

        typeof obj === "object"  &&
        obj !== null  &&
        typeof obj.type === "string"  &&
        typeof obj.sugar === "number"

    )
}

//now use  here--
function serveOrder(item:ChaiOrder | string){
    //here if any thing passed through isChaiOrder func means that is valid type we are using...
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }

    return `Serving default chai: ${item}`
}

//one more example of custom type how uses...

type MasalaChai = { type: "masala"; spicelevel:number}
type GringerChai = { type: "gringer"; amount:number}
type ElaichiChai = { type:"elaichi"; aroma:number}

type Chai = MasalaChai | GringerChai | ElaichiChai


//here suggestion is automatic that make easy in development...
function MakeChai(order: Chai){
    switch(order.type){
        case "elaichi":
            return `elaichi aroma is ${order.aroma}`
            break;

        case "gringer":
        return `elaichi aroma is ${order.amount}`
        break;

        case "masala":
            return `elaichi aroma is ${order.spicelevel}`
            break;
    }
}



// in ----

function brew(order: MasalaChai | GringerChai){
//if in the order if spice level is there means masala chai hi hai...
    if("spicelevel" in order){
       
    }
}


//#### unknown or any?????


//any-- don't check anything.
let value: any = "hello";

value.toUpperCase(); // anything we can do ...
value();              
value.length;         
value.xyz.abc();     



//unknown -- don’t know the type yet, prove it first.
function parseData(data: unknown) {
  if (typeof data === "string") {   //we need to inform the type before using
    return data.toUpperCase(); 
  }
}





//another example for instanceof---
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








