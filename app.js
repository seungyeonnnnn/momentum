const a = 5;
const b = 2;
let myName = "seungyeon";

console.log(a, b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Bongnam"
console.log("hello " + myName);

const amIFat = true;
console.log(amIFat);

const amITall = null;
console.log(amITall);

let something;
console.log(something);

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun];
// const nonsense = [1, 2, "hello", false, null, true, undefined, "seungyeon"];
// console.log(daysOfWeek, nonsense);
console.log(daysOfWeek);

// Get Itemfrom Array
console.log(daysOfWeek[5]);
console.log(daysOfWeek.pop());

// Add one more day to the arry
daysOfWeek.push(sun);
console.log(daysOfWeek);

// object
const player = {
    name: "seungyeon",
    points: 10,
    fat: true
};
console.log(player);
console.log(player.name);
console.log(player["name"]);
player.fat = false;
player.lastName = "potato";
console.log(player);


//function
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " " + age)
}
sayHello("Seungyeon", 10);
sayHello("Sam", 15);

function plus(a, b){
    console.log(a + b);
}
plus(3, 5);

const player ={
    name:"nico",
    sayHello: function(otherPersonsName){
        console.log("hello " + otherPersonsName + " nice to meet you!")
    }
};

console.log(player.name);
player.sayHello("lynn");

//returns
const age = 96;
function calculateKrAge(ageOfForeigner){
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    }
}

// Condition
const age = prompt("How old are you?")
console.log(age);
console.log(typeof age);
console.log(typeof parseInt(age));

const age2 = parseInt(prompt("How old are you?"))
console.log(typeof age2); // number
console.log(age2); // NaN

console.log(isNaN(age));
console.log(isNaN(age2));

const age3 = parseInt(prompt("How old are you?"));
if(isNaN(age3 || age3 < 0)){
    console.log("Please write a real positive number.");
} else if(age3 < 18){
    console.log("You are too young.");
} else if(age3 >= 18 && age <= 50){
    console.log("You can drink.");
} else if(age3 === 100){
    console.log("Wow you are 100 years old.");
}
else{
    console.log("You can not drink.");
}