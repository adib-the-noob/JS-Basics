// js methods
const person = {
    firstName : "Mohammed",
    lastName : "Adib",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());

// using new object

const myObj = {
    name : "John",
    age : 12,
    cars : [
        {
            name : "Tesla",
            models : ['Model X']
        },
        {
            name : "Honda",
            models : ['City']
        }
    ]
}

x = myObj.cars[0]['name']
x_models = myObj.cars[0]['models']

y = myObj.cars[0]['name']
y_models = myObj.cars[1]['models']

console.log(x, x_models);
console.log(y, y_models);