const person = {
    name : "Adib",
    class : 10,
    age : function() {return 30}
}

let myString = JSON.stringify(person)
console.log(myString);
// won't stringify funtions

const today = {
    date : Date()
}
let x = JSON.stringify(today)
console.log(x);