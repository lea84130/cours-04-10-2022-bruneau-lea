const vacationSpots = ['Mozambique', 'Thailand', 'Bolivia'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
} 

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}


let bobsFollowers = ['Lea', 'Julia', 'Jules', 'Enzo'];
let tinasFollowers = ['Jules', 'Lea', 'Yoann'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};
