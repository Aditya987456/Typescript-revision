//this - refers to new obj.
//access modifier--> recomended to use this if you are creating class in TS
//protected key --> 
//private keyword - using # like-


//default oop code--
//  this keyword - same as JS.




class Car {
    ModelName:string
    price:number

    constructor(ModelName: string , price: number){
        this.ModelName = ModelName
        this.price = price
        //console.log(`here it is the this from constructore -- ${this.price}`)
    }
}

const Mycar = new Car("scorpio", 123456);
console.log(`The price of my car is ${Mycar.price}`)





//-----------------Access Modifiers -------------------------

class InfoStudent{

    public name:string = "aadii_tw"

    //when we use private then we also used a method so we can access this private val
    private DOB:number = 140245
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

//ans also we can get directly rollno from collge class as like this..
new college().getStudentRollNo







//----using # also we can use private...
class Wallet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}

const w = new Wallet()
console.log(w.getBalance())





//--------readonly properties
class Cup{
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}

class Books {
    readonly price:number

    constructor (price:number){
        this.price = price
    }
}
const myBook = new Books(1299)
//myBook.price = 456   //now it is not assignable because readonly only first time assign.
console.log(`Price of my book is ${myBook.price}`)






//## contolled gates means getter setter -- also we have to use prefix get,set

class TataMotor {
    public modelName:string = "Safari"

    private price:number = 456


    get TataCarPrice(){
        return this.price
    }

    set TataCarPrice(price:number){
        this.price = price
        if(this.price > 456){
            //this.price = 0
            this.price = price * 0
        }
    }
}

//***now we have set like anyone if they set the car price higher than the 456 then price gets 0
const TataFonder1 = new TataMotor()
TataFonder1.TataCarPrice = 1000
const TataFonder2 = new TataMotor()
TataFonder2.TataCarPrice = 100

console.log(`Price of car by Founder1 - ${TataFonder1.TataCarPrice}`)
console.log(`Price of car by Founder2 - ${TataFonder2.TataCarPrice}`)




//one more example -
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

//initially balance is 100 
const myWallet = new Wallets()
console.log(`Initial balance is - ${myWallet.getBalance()}`) 
//after setting if less than 100
//console.log(myWallet.setBalance(99))    //it will gives error.






//static member...

class EkChai {
    static shopName = "Chaicode caffee"

    constructor(public flavour: string){
        this.flavour = flavour
    }

}
console.log(EkChai.shopName)  //here directly access on class not object



//Abstract class - when we not want that object is created from this class therefore use abstract class

abstract class Drinking {
    abstract make():void
}

//now we use this class like in another as ---
class ItsMyChai extends Drinking {
    make(): void {
        console.log('making chai...')
    }
}






//composition..
class Heater{
    heat(){
        console.log(`doing heat`)
    }
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}




//lets revise inheritence ans polymorphism as well

class Class {
    private className:string = "12th"

    ClassName(){
        console.log(`The name of the Class is - ${this.className}`)
    }
}

class student extends Class{
    public StudentsNumber:number = 69

    Totalstudent(){
        console.log(`Total no of student in class is - ${this.StudentsNumber}`)
    }
}

const School = new student()
School.ClassName()
School.Totalstudent()




//polymorphism

class Animal {
  speak(): void {
    console.log("Some generic sound");
  }
}

class Dog extends Animal {
  speak(): void {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  speaking(): void {
    console.log("Meow!");
  }
  speak(): void {
    console.log("Meow-2nd!");
  }
}

//now same method but different behaviour.
const janwar1 = new Dog()
const janwar2 = new Cat()
janwar1.speak()   
janwar2.speaking()
janwar2.speak()  



