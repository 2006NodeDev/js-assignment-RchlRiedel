/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for (element in someObj) {
        console.log(`${element}: ${someObj[element]}`);
    }
    console.log();
}

function Pet (name, age, species, breed, coloring, cutenessLevel, characteristics) {
    this.name = name
    this.age = age
    this.species = species
    this.breed = breed
    this.coloring = coloring
    this.cutenessLevel = cutenessLevel
    this.characteristics = characteristics
}

let Skittles = new Pet("Skittles", 8, "Cat","American Shorthair", "Grey splotches on white", 999, ["soft", "likes cheese", "part loaf"])
let Sherman = new Pet("Sherman", 5, "Dog", "Great Dane", "Brown and white", -10, ["slow", "poops in neighbor's yard"])
let Bobby = new Pet("Bobby", 7, "Rabbit", "American Fuzzy Lop", "Speckled brown on white", 300, ["fuzzy", "sassy", "easily intimidated"])

objectProperties(Skittles)
objectProperties(Sherman)
objectProperties(Bobby)