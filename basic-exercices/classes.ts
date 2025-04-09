class Car {
    public brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    public drive(): void{
        console.log(`Driving a ${this.brand}`)
    }
}

const myCar = new Car("Toyota");
myCar.drive();

class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    public deposit(amount: number): void {
        this.balance += amount;
        this.showBalance();
    }

    private showBalance():void{
        console.log(`Your balance is ${this.balance}`);
    }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(2000);

// getters and setters
class Student{
    private _name: string;

    constructor(name: string){
        this._name = name;
    } 

    get name(): string {
        return this._name;
    }
    set name(newName: string){
        this._name = newName;
    }
}

//static properties

class MathUtils {
    static PI = 3.14;
    static calculateCircleArea(radius: number): number
    {
        return this.PI * radius * radius;
    }
}
const area = MathUtils.calculateCircleArea(5);
console.log(area);