// Opdracht A

const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}
]

const findSpiderMan = superheroes.find((superhero) => {
    return superhero.name === "Spiderman"
})
 
console.log(findSpiderMan) // { name: 'Spiderman', alter_ego: 'Peter Parker' }


// Opdracht B

// const doubleArrayValues = ([number1, number2, number3]) => {
//     console.log(number1 + number1, number2 + number2, number3 + number3);
// }

const doubleArrayValues = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 2);
    });
    return newArray;
  };

console.log("Verdubbelde waardes:", doubleArrayValues([1, 2, 3])); // [ 2, 4, 6 ] 


// Opdracht C

const containsNumberBiggerThan10 = function(array) {
    return array.some(number => {
      return number > 10;
    });
};
   
console.log("Is er een getal groter dan 10?", containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])); // true
console.log("Is er een getal groter dan 10?", containsNumberBiggerThan10([1,2,1,2,1,2])); // false


//Opdracht D

function isItalyInTheGreat7(array) {
    return array.includes("Italy");
  }
  console.log(
    "Is Italie aanwezig?:",
    isItalyInTheGreat7([
      "Canada",
      "France",
      "Germany",
      "Italy",
      "Japan",
      "United Kingdom",
      "United States"
    ])
  ); // true


// Opdracht E

const tenfold = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 10);
    });
    return newArray;
  };

console.log("Elk getal x 10:",tenfold([1, 4, 3, 6, 9, 7, 11])) // [10, 40, 30, 60, 90, 70, 110]

// const tenfoldMap = function(array) {
//     return array.map(number => {
//       return number * 10;
//     });
//   };
// console.log("tenfold", tenfoldMap([1, 4, 3, 6, 9, 7, 11]));


// Opdracht F

function isBelow100(array) {
    return array.every(number => {
      return number < 100;
    });
}

console.log("Zijn alle getallen onder de 100?", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98 ])) // false
console.log("Zijn alle getallen onder de 100?", isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 99, 11, 77, 84, 98 ])) // true

// Opdracht G

const numbers = [1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234];

const bigSum = function(array) {
  return array.reduce((acc, number) => {
    return acc + number;
  });
};

console.log("De waardes van de array bij elkaar opgeteld:", bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])) // 1118