/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
let bachelorContestant1 = {
    name: "Karen",
    age: 23,
    occuptation: "Flight Attendant",
    fakeTan: true
}
console.log(bachelorContestant1);

//constructing function
function bachelorContestant2(name, age, occupation, fakeTan){
    this.name = name
    this.age = age
    this.occupation = occupation
    this.fakeTan = fakeTan
}
let Amy = new bachelorContestant2("Amy", 25, "Waitress", false)
console.log(Amy)

//class
class BachelorContestant3 {
    constructor (name, age, occuptation, fakeTan){
        this.name = name
        this.age = age
        this.occuptation = occuptation
        this.fakeTan = fakeTan
    }  
}
let Sydney = new BachelorContestant3("Sydney", 24, "Dancer", true)
console.log(Sydney);

