export interface Person {
    firstName: string;
    lastName?: string;
}

let person: Person = {
    firstName: "Alexis",
    lastName: "Albarenga"
}

console.log(person);