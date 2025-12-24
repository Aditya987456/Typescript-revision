//generics-- makes code reusable.

function wrapInArray<T>(item:T):T[]{
    return [item]
}

//generics mostly use when we create framework and libraries.
//generics interface is also there.

interface Box<T> {
    content:T
}

const numberBox:Box<number> = {
    content:10
}

//generics -- partial pick and omit also works
//most real case of generics is api request and form react, form...





//why need generics let see a example..
//---------duplication case.

function identityNumber(x: number): number {
  return x;
}

function identityString(x: string): string {
  return x;
}

function identityBoolean(x: boolean): boolean {
  return x;
}

const identifyValue = identityNumber(45)



//instead of this we can do like - 
//we can write whatever we want to name like T,S,v,ElementType
function identity<ElementType>(item:ElementType) : ElementType {
    return item;
}

//now we can do like - 
console.log(`${identity(56)}`)
console.log(`${identity("abcd")}`)
console.log(`${identity(true)}`)
console.log(`${identity([4,5,6])}`)




//---------API response ------
type ApiResponse<T> = {
  status: number;
  message:string;
  data: T;
};

type User = { id: number; name: string; };
type Product = { id: number; price: number };

const userResponse: ApiResponse<User> = {
  status: 200,
  message:"success",
  data: { id: 1, name: "Aditya" }
};

const productResponse: ApiResponse<Product> = {
  status: 200,
  message:"success",
  data: { id: 99, price: 499 }
};







