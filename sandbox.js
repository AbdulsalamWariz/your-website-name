"use strict";
// Chapter 3: Type Basics
{ /*
let character = "mario";
let age = 30;
let isBlackBelt = true

character = 'luigi';
age = 40;
isBlackBelt = true

const circ = (diameter: number) => {
    return diameter * Math.PI
}
console.log(circ(16))
*/
}
// CHAPTER 4: Objects & Arrays
{ /*
    // ARRAYS
    let  names = ['luigi', 'mario', 'yoshi'];

    names.push('toad');
    // names.push(3); Not Possible
    // names[0]= 33; Not Possible

    let numbers = [10, 20, 30, 40];

    numbers.push(50);
    // numbers.push("sixty");
    // numbers[0] ="ten";

    let mixed = ['ken', 2]
    mixed.push('ryu');
    mixed.push(10);
    // mixed.push(false)

    // OBJECTS
    let ninja = {
        name: 'mario',
        belt: 'black',
        age: 30,
    }
    ninja.age = 40;
    ninja.name = 'ryu';
    // ninja.belt = false;
    // ninja.skill = "stealth";
    // ninja.skill = ["stealth", "jump;"];
    // ninja = {
    //     name: 'yoshi',
    //     belt: null,
    //     age: 40,
    //     skills: [],
    // }

    ninja = {
        name: 'yoshi',
        belt: 'red',
        age: 30,
    }

*/
}
// CHAPTER 5: Explicit Types
{ /*
// explicit types
    let character: string;
    let age: number;
    let isLoggedIn: boolean;

    age = 30;
    isLoggedIn = true;
    character = 'luigi';
// arrays
    let ninja: string[] = [];
    ninja = ['yoshi', 'mario'];
    ninja.push('ryu');

// union types
    let mixed: (string|number|boolean)[] = [] //can only allow string, boolean and number inputs into the array
    mixed.push("hello");
    mixed.push(20);
    mixed.push(false)
    console.log(mixed)

    let uid: string|number;
    uid = 123
    uid = '123'
// objects
    let ninjaOne: object;
    ninjaOne = {
        name: 'yoshi',
        age: 30
    }
    let ninjaTwo: {    //We are explicitly stating that when the variable is initialized it should follow the pattern stated below
        name: string,
        age: number,
        beltColour: string
    }
    ninjaTwo = {
        name: 'mario',
        age: 35,
        beltColour: 'black'
    }
*/
}
// CHAPTER 6: Dynamic (any) Types
{ /*
    let age: any = 25;
    age =  25;
    console.log(age);
    age = 'hello';

    let mixed: any[] = [];
    mixed.push(5);
    mixed.push('mario');
    mixed.push(false);
    console.log(mixed);

    let ninja: { name: any, age: any };
    ninja = {name: 25, age: 'yoshi'};
    console.log(ninja)
*/
}
// CHAPTER 7: Function Basics
{ /*
    let greet: Function;
    greet = () => {
        console.log('Hello')
    }

    const add = (a: number, b: number, c: number | string = 10, d?: number) => { //This means that C can either be a string or number but already has a default parameter of 10
        console.log(a + b);
    }
    add(5, 6);

    const print = (a: number, b?: number) => { //This means that b is optional
    console.log(a, b);
    }
    print(5);

    const minus = (a: number, b: number) => {
        return a - b
    }

    let result = minus(10, 7)
    // result = "something else";  When we set result to minus(), Typescript infers the datatype of the return keyword as number and assigns that to result as such we cant set result to something else

    let concat = (a: string, b: string): string => { // We are explicitly setting what concat is supposed to return as a number as a way to know what a function is supposed to return in the future
        return a + b;
    }

    let nothing = (): void => { // When a function doesn't return anything at returns "void" when compiled to javascript it returns undefined but in Typescript undefined and void are two seperate things
        console.log("Bonjour")
    }

*/
}
// CHAPTER 9: Type Aliases
{ /*
    type StringOrNum = string | number; // Type aliases are used to create a shorter way of writing explicit types especially long and specific types
    type ObjWithName = {name: string, uid: StringOrNum}
    const logDetails =(uid: StringOrNum, item: string) => {
        console.log(`${item} has a uid of ${uid}`)
    }
    const greet = (user: ObjWithName) => {
        console.log(`${user.name} says hello`)
    }

    const greetAgain = (user: ObjWithName) => {
        console.log(`${user.name} says hello`)
    }
*/
}
// CHAPTER 10: Function Signatures
{ /*
    // let greet: Function;

// example 1
    let greet: (a: string, b: string) => void;

    greet = (name: string, greeting: string) => {
        console.log(`${name} says ${greeting}`);
    }
// example 2
    let calc: (a: number, b: number, c: string) => number;

     calc = (numOne: number, numTwo: number, action: string) => {
        if (action === 'add'){
            return numOne + numTwo;
        } else if (action === 'minus') {
            return numOne - numTwo;
        } else {
            return 0;
        }
    }



// example 3
    let logDetails: (obj: {name: string, age: number}) => void;
    type person = {name: string, age: number};

    logDetails = (ninja: person) => {
        console.log(`${ninja.name} is ${ninja.age} years old`)
    }

*/
}
// CHAPTER 15: Interfaces
{ /*
    interface IsPerson {
        name: string;
        age: number;
        speak(a: string): void;
        spend(a: number): number;
    }

    const me: IsPerson = {
        name: "wariz",
        age: 18,
        speak(text: string) {
            console.log(text);
        },
        spend(amount: number): number {
            console.log('I spent ', amount);
            return amount;
        }
    }

    console.log(me)

    const greetPerson = (person: IsPerson) => {
        console.log('hello', person.name)
    }
    greetPerson(me)
*/
}
// Chapter 18: Generics
{ /*
    const addUID = <T extends { name: string }>(obj: T) => {
        let uid = Math.floor(Math.random() * 100);
        return {...obj, uid};
    }

    let docOne = addUID({name: 'yoshi', age: 40});

    console.log(docOne)

// with interfaces
    interface Resource<T> {
        uid: number;
        resourceName: string;
        data: T;
    }

    const docThree: Resource<object> = {
        uid: 1,
        resourceName: 'person',
        data: {name: "wariz"}
    }

    const docFour: Resource<string[]> = {
        uid: 2,
        resourceName: "shopping list",
        data: ["bread", "milk", "toilet roll"]
    }
*/
}
// CHAPTER 19: Enums
{ /*
    enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

    interface Resource<T> {
        uid: number;
        resourceType: ResourceType;
        data: T;
    }

    const docOne: Resource<object> = {
        uid: 1,
        resourceType: ResourceType.BOOK,
        data: {title: "name of the wind"}
    }

    const docTwo: Resource<object> = {
        uid: 2,
        resourceType: ResourceType.PERSON,
        data: {name: "yoshi"}
    }


    console.log(docOne, docTwo)
*/
}
// CHAPTER 20: Tuples
{ /*
    // The type of data in each position of a tuple is fixed once defined

    let arr = ["ryu", 25,true];
    arr[0] = false;
    arr[1] = "yoshi"

    let tup: [string, number, boolean] = ['ryu', 25, true];
    tup[0] ="ken";

    let student: [string, number];
    student = ["chun-li", 235678]
*/
}
