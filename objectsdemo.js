// console.log(`test`);

// let person = {
//   firstName: "Satchel",
//   lastName: "Williams",
//   age: 29,
// };

// console.log(person.firstName); // dot notation
// console.log(person["firstName"]); // bracket notation (important for for in loops)

// let meal = {
//   appetizer: "Mozzarella Sticks",
//   dessert: "Creme Brulee",
//   entree: "Steak",
//   drink: "Soda",
// };

// // let { dessert: favSweet, appetizer } = meal; // aliasing, renames variable

// // console.log(favSweet);
// // console.log(appetizer);

// // let bestSodaEver = meal.drink;     //
// // let {drink: bestSodaEver} = meal; // accomplishes same thing

// // console.log(bestSodaEver);

// for (let key in meal) {       // for in loop -- loops all values in object
//   console.log(meal[key]);
// }

// meal.chef = "Anthony Bourdain"; // adds chef key with a value into object meal

// delete meal.dessert; // gets rid of dessert property

// console.log(meal);

class Dog {
  // functions go inside of curly braces
  constructor(nameParam, breedParam, ageParam) {
    this.name = nameParam; // will get name when we invoke
    this.breed = breedParam; // no commas after, this is a function, not an object
    this.age = ageParam;
  }
  greeting(otherDogName) {
    console.log(
      `woof! Hello ${otherDogName}! I am a dog too, and my name is ${this.name}!`
    );
  }
}

let lassie = new Dog("Lassie", "Collie", 18); // creates new object called lassie based off Dog blueprint. instantiation creating new instance of dog using these parameters
let buster = new Dog("Buster", "Border collie", 12);

console.log(lassie);
lassie.greeting("Rex");
buster.greeting("Fido");

// creating an extended class - blueprint based off another blueprint

class Puppy extends Dog {
  constructor(name, breed, age, trainingLevelParam) {
    super(name, breed, age); // passes in from parent element

    this.trainingLevel = trainingLevelParam;
  }
  beAPuppy() {
    console.log(`${this.name} just relived itself on the carpet`);
  }
}

let lilBlue = new Puppy("Blue", "golden", 1, 0);

console.log(lilBlue.trainingLevel);

lilBlue.beAPuppy();
