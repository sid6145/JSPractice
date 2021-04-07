function Name(firstname, lastname){
    this.first = firstname;
    this.last = lastname;
}

Name.prototype.fullName = function(){
    return this.first + " " + this.last;
}
let person1 = new Name("Siddhant", "Deshmukh");



console.log(person1.fullName());