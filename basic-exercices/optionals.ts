interface Customer {
    firstName: string;
    lastName?: string;
}

const Mario: Customer = {
    firstName: "Mario",
    lastName: "Rossi"
}
const Cesar: Customer={
    firstName: "Cesar"
}

// In functions
function greet(name:string, age?: number): string {
    if(age){
        return `Hello ${name}, you are ${age} years old.`;
    }
    return `Hello ${name}`;
}

interface Config {
    timeOut?: number;
}
const defaultConfig: Config = {}
const customConfig: Config = { timeOut: 5000 }
console.log(defaultConfig.timeOut,customConfig.timeOut);
