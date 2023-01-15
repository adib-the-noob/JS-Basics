// let hello = "hello world with JavaScript"

// result_search = hello.search('w');
// upp = hello.toUpperCase();

// console.log(result_search)
// console.log(upp);


const person = {
    firstName : "Mohammed",
    lastName : "Adib",
    fullName : function(){
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
}
console.log(person.fullName());