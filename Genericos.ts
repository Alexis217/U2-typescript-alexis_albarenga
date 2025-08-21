function identity<T>(value: T): T {
    return value;
}

let numberValue = identity<number>(42);
let stringValue2 = identity<string>("Hola mundo");
let booleanValue = identity<boolean>(true);

console.log(numberValue); 
console.log(stringValue2); 
console.log(booleanValue); 
