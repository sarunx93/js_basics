# JS basics review
This repo contains some JS basics that could be in an interview. Even if they aren't, it is still beneficial as a refresher.
## Call, Apply and Bind 
Call, bind and apply are object methods that are used for tieing up a function to an object an call the function as if it belongs to that object. However, there are few subtle 
differneces between the three.

Let's create sample objects to demonstrate this.
```
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
```
It is simple to call the greet method on john object since ii is where the greet method is defined.
```
john.greet(); // this will simply work.
```
### Call
What if we want to call the greet method on susan object. Susan has no method defined in it. This is when call method comes in handy.
We can do this.
```
john.greet.call(susan);
```
In plain English, please call John's greet method on Susan.

### Apply 
It does the exact same thing as Call but the differnce is the way we pass an argument in it.
Let's create a demo function.
```
function increaseAge(num, birthYear) {
  console.log(`${this.name} is now ${this.age + num}. Born in ${birthYear}`);
}
```

Passing arguments in call
```
increaseAge.call(john, 30, 1995); //accepts list of items
```
Passing arguments in apply
```
increaseAge.apply(john, [30, 1995]); //accepts an array
```

### Bind
The major difference between Bind and the other two is that using Bind allows us to assign the function into a variable and call it whenever we want
```
const increaseJohnAge = increaseAge.bind(john, 20, 2022);
increaseJohnAge();
```
source: John Smilga's JS course
