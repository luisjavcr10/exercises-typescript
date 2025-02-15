interface User {
    readonly id: number; //immutable property
    name: string;
    email: string;
    password: string;
    phone?: string; //optional property
    isActive: boolean;
}

let user1: User = {
    id: 1,
    name: "John Doe",
    email: "jhon@email.com",
    password: "password123",
    //phone: "123-456-7890",
    isActive: true,
};

user1.name = "John Garcia";

console.log(user1);

interface Greet {
    (user: User): void;
}

let sayHello: Greet = function (user: User) {
    console.log(`Hello, I'm ${user.name}, I'm ${user.isActive ? "active" : "inactive"} and my email is ${user.email}`);
};
sayHello(user1);

interface UserWithAge extends User {
    age: number;
}

let user2: UserWithAge = {
    id: 2,
    name: "Jane Doe",
    email: "EMAIL",
    password: "password123",
    isActive: true,
    age: 30,
};
console.log(user2);