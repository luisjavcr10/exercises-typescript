//STRING
const firstName: string = "John";
const greeting: string = `Hello, ${firstName}!`;

console.log(greeting);
// use typeof for get type

//NUMBER
const integerPart: number = 42;
const decimalPart: number = 0.14;
const sum: number = integerPart + decimalPart;
console.log(sum);

//BOOLEAN
const isActive: boolean = true;
console.log(isActive);
console.log(!isActive);

//ARRAY
const numbers: number[] = [1, 2, 3, 4, 5];
const fruits: string[] = ["apple", "banana", "orange"];
const customers: object[] = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 40 },
];
console.log(customers);

//TUPLE
const person: [string, number] = ["John", 30];
console.log(person);

//ENUM
enum Color {
  Red,
  Green,
  Blue,
}

const color: Color = Color.Green;
console.log(`My color is ${color}`);

//ANY
let anyValue: any = 42;
anyValue = "Hello";
console.log(anyValue);

//UNKNOWN
let unknownValue: unknown = 42;
if(typeof unknownValue === "number") {
    unknownValue += 1;
    console.log(unknownValue);
}

//VOID
function logMessage(message: string): void {
    console.log(message);
}
logMessage(greeting);

const logMessage2 = (message: string): void =>{
    console.log(message);
}
logMessage2(greeting);

//Type inference 
const message = "Hello";
const age = 22;
console.log(typeof age)

const sumFunction = (a:number ,b:number): number=>{
    return a+b;
}
console.log(sumFunction(2,3));
