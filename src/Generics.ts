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

interface ApiPromise<T>{
   
}
