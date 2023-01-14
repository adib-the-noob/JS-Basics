let person_name = {
    1 : "Adib",
    2 : "Sadib",
}

let person = {
    name : person_name[1],
    age : 12
}

console.log(person.name);
console.log(person.age);
    
person_name[1] = "The noob"
console.log(person_name[1]);