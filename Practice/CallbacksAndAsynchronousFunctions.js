// From w5d5 homework & Intro to Callbacks Exercises - Callbacks and Function Calls
// ex 1
window.setTimeout(() => {
  alert("Hammer");
}, 2000);

function hammerTime(time) {
  window.setTimeout(() => {
    alert(`${time} is hammertime!`)
  }, 1000);
};

// ex 2
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {
  reader.question("Would you like some tea?", (ans1) => {
    console.log(ans1);
    reader.question("Would you like some biscuits?", (ans2) => {
      console.log(ans2);
      let first = (ans1 == "yes") ? "do" : "don't";
      let second = (ans2 == "yes") ? "do" : "don't";
      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      // reader.close();
    });
  });
}

teaAndBiscuits();

// ex 3
function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();

// Noodles.chase(Markov); --> My name is Noodles and I'm chasing Markov! Woof!
// Noodles.chase.call(Markov, Noodles); --> My name is Markov and I'm chasing Noodles! Woof!
// Noodles.chase.apply(Markov, [Noodles]); --> My name is Markov and I'm chasing Noodles! Woof!

// ex 4
class Clock {
  constructor() {
    this.date = new Date; // 1. Create a Date object.
    this.hours = this.date.getHours(); // 2. Store the hours, minutes, and seconds.
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    this.printTime(); // 3. Call printTime.
    setInterval(this._tick.bind(this), 1000); // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    this.printTime();
  }
}

const clock = new Clock();

// ex 5
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Whats ur number?", (ans) => {
      let input = parseInt(ans);
      sum += ans;
      console.log(sum);
      numsLeft--;
      addNumbers(sum, numsLeft, completionCallback)
    });
  } else {
    completionCallback(sum)
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});
