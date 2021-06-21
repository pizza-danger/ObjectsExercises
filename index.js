let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};
//
let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5
};

let chimpanzeeTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6
};

let beagle = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
};

let tardigrade = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
};
let astronautAnimals = [superChimpOne, salamander, chimpanzeeTwo, beagle, tardigrade];
let idIndex = 0;
// After you have created the other object literals, add the astronautID property to each one.

for (let i = 1; i < astronautAnimals.length; i++) {
  idIndex += 1;
  astronautAnimals[i].astronautID = idIndex;
}
console.log(salamander);
// superChimpOne["astronautID"] = Math.round(Math.random()*10);
// salamander["astronautID"] = Math.round(Math.random()*10);
// chimpanzeeTwo["astronautID"] = Math.round(Math.random()*10);
// beagle["astronautID"] = Math.round(Math.random()*10);
// tardigrade["astronautID"] = Math.round(Math.random()*10);
// console.log(superChimpOne.astronautID, superChimpOne.name);
// console.log(salamander.astronautID, salamander.name);
// console.log(chimpanzeeTwo.astronautID, chimpanzeeTwo.name);
// console.log(beagle.astronautID, beagle.name);
// console.log(tardigrade.astronautID, tardigrade.name);

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!