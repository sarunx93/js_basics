//call, bind and apply are object methods that are used for tieing up a function to an object an call the function as if it belongs to that object.

// call - runs instantly, arguments - list of items
// we can do it in 2 ways.
// 1. use the function defined inside an object
const john = {
  name: "john",
  age: 24,
  greet: function () {
    console.log(this);
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
  },
};

const susan = {
  name: "susan",
  age: 21,
};
john.greet();
console.log("--Call--");
john.greet.call(susan);

console.log("--Apply--");
john.greet.apply(susan);

// 2. create a function outside an object and use call
function increaseAge(num, birthYear) {
  console.log(`${this.name} is now ${this.age + num}. Born in ${birthYear}`);
}

increaseAge.call(john, 30, 1995);

// apply - runs instantly, arguments - array
// same as call but the argument is an array instead of list of items.
increaseAge.apply(john, [30, 1995]);

// bind - needs to be assign and use later
// accepts list of items as an argument
const increaseJohnAge = increaseAge.bind(john, 20, 2022);
console.log("--Bind--");
increaseJohnAge();

//Use case of bind - using a an object function in event listener
const counter = {
  count: 0,
  increment() {
    console.log(this);
    this.count++;
    console.log(this.count);
  },
};

const btn = document.querySelector(".increment");

// this will fail cuz the callback function is pointing to btn which does not have the increment function.
// btn.addEventListener("click", counter.increment);

//edge case - it works but we will lose the reference to the function when we remove event listener.
// btn.addEventListener("click", counter.increment.bind(counter));

//do this
const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
