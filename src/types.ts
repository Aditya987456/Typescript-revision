
let deink = "chai"

let cups = Math.random() >0.5? 10 : "hello"

//on hover now cups have two types.
//let cups: string | number







//---------- type annotation- we assign types of variables, argument, funtions return type.. -----------------

const name:string = 'Hitman'
function AssignJerseyNo(PlayerName: string):string {
    const jerseyNo:number=Math.random()*100
    return ` ${PlayerName}-${jerseyNo}`
}
console.log(AssignJerseyNo(name))








//-----------------inferencing-TS automatically inferred types

let age = 21;
let myName = "KingKohli"

//let age='virat'   //error...









//---------Unions-------

let subsCount: number | string ='1M';

let airlineSeat: 'aisle' | 'middle' | 'window' = 'aisle'
airlineSeat = 'window'



const orders = ['12', '28', '89', '90']

let currentorder;   //here it has any order because after passing from loop or may if not go from string then has value undefined...

for( let order of orders){
    if(order === '28'){
        currentorder = order
        break;
    }
}

//since type is any then ..
currentorder=45
console.log(currentorder)

//here we should use string...
















//syntax error , types error.
//