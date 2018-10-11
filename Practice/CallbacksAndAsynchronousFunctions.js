// From w5d5 homework & Intro to Callbacks Exercises - Callbacks and Function Calls 

window.setTimeout(() => {
  alert("Hammer");
}, 2000);

function hammerTime(time) {
  window.setTimeout(() => {
    alert(`${time} is hammertime!`)
  }, 1000);
};

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
