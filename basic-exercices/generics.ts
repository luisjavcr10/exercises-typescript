//GENERICS <T>

function identity <T> ( arg : T) : T {
    return arg;
}

const identity2= <T> ( arg : T) : T => {
    return arg;
}

const output = identity2<string>("myString");
console.log(output);

//with classes

class GenericClass <T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }
    setValue(value: T): void{
        this.value= value;
    }
    getValue(): T {
        return this.value;
    }
}

const genericClass = new GenericClass('LUIS');
genericClass.setValue('MARIO');
const genericName: string = genericClass.getValue();
console.log(genericName);

