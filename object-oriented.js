const person = {
    firstName : "Mohammed",
    lastName : "Adib",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.fullName());