console.log("hi mark")

const makeRandomThing = () => {
  // Math.random() gives you a value between 0 and 1
  const rand = Math.random();
  return {
    // this is a short hand for (if thing) ? do this : otherwise do this
    bool: rand > 0.5 ? true : false,
    // and then take the random number and make a bigger random number from it
    number: Math.floor(rand * 100)
  }
}

// This is crazy, but it is a quick way to make an array with 10 things in it. 
//https://stackoverflow.com/questions/3746725/how-to-create-an-array-containing-1-n
const ourArray = [...Array(10).keys()]
console.log("ourArray", ourArray)

// Now, let's fill it with the things using map
const filledWithRandomThings = ourArray.map(makeRandomThing)
console.log("filledWithRandomThings", filledWithRandomThings)

// heres a weird function that takes a thing and returns another thing that has the original thing in it plus a new
// field called boolNumber
const booleanToNumber = (thing) => {
  return {
    // spread syntax
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
    ...thing,
    // if thing.bool is true, 1, else 0
    boolNumber: thing.bool ? 1 : 0,
  }
}

// Let's map that function the current state of the array
const withBoolNumbers = filledWithRandomThings.map(booleanToNumber)
console.log("withBoolNumbers", withBoolNumbers)


// Another weird function, but it takes a thing and returns a object with the original object in it plus a new
// field: doubledNumber
const doubleNumbers = (thing) => {
  return {

    ...thing,
    doubledNumber: thing.number * 2
  }
}

// Let's map that function the current state of the array
const withDoubledNumbers = withBoolNumbers.map(doubleNumbers)

console.log("withDoubledNumbers (lessAmazingResult)", withDoubledNumbers)

// OK! Now lets do this all in one step and it's super easy to read and way cool. 
const ourNewArray = [...Array(10).keys()]
const amazingResult = ourNewArray
  .map(makeRandomThing)
  .map(booleanToNumber)
  .map(doubleNumbers)

console.log("Wait something cool happened here!")
console.log("amazingResult", amazingResult)

