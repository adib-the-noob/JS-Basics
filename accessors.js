const person = {
    firstName : "Adib",
    lastName : "Khan",
    language : "Python",
    get fullName(){
        return (this.firstName + " " + this.lastName);    
    },
    set lang(lang){
        this.language = lang;
    }
}
    
console.log(person);
person.lang = "JavaScript";
console.log(person.language);
console.log(person.fullName);

