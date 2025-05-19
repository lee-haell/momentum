//const, let, var > 계산기 
let a = 5;
const b = 2;
let myName = "Rin";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Nico";


//booleans
const amIFat = true; //참이라는 값
const amIThin = false; //거짓이라는 값
const amIFat2 = null; //null이라는 값이 있는 것(아무것도 없는 상태로 채워짐), 변수 안에 어떤 것이 없다는 것을 확실히 하기 위해 쓰는 것
let something; //something이라는 메모리 공간은 있지만, 값이 없음. undefined


//arrays
const dayOfWeeks = ["mon", "tue", "wed", "thu", "fri", "sat"];
console.log(dayOfWeeks[5]); //sat

dayOfWeeks.push("sun");
console.log(dayOfWeeks); //"mon", "tue", "wed", "thu", "fri", "sat", "sun"


//objects
const player = {
    name: "Rin",
    points: 10,
    fat: false
};
console.log(player);
console.log(player.name); // = console.log(palyer["name"]);
player.points = player.points + 15;


//function
function sayHello(){
    console.log("Hello, My name is A!");
}
sayHello("Kim"); //Hello, My name is A! 출력
sayHello("Lee"); //Hello, My name is A! 출력
sayHello("Park"); //Hello, My name is A! 출력


//function - argument
function sayHello2(nameArgument, age) {
    console.log("Hello, My name is " + nameArgument + " and I'm " + age);
}
sayHello2("Kim", 10);
sayHello2("Lee", 20);
sayHello2("Park", 30);


//caculator
function plus(a, b){
    console.log(a + b);
}
plus(1, 2);


//fuction in objects
const player2 = {
    name : "Lee",
    sayHello3 : function(otherName){
        console.log("Hello, " + otherName + "! nice to meet you~");
    }
}
console.log(player2.sayHello3("Park"));


//homework
const calculator = {
    plus: function(a, b){
        console.log(a+b);
    },
    minus: function(a, b){
        console.log(a-b);
    },
    divide: function(a, b){
        console.log(a/b);
    },
    multiple: function(a, b){
        console.log(a*b);
    }
}
calculator.plus(1,2);
calculator.minus(3,4);
calculator.divide(5,6);
calculator.multiple(7,8);


//return
const calculator2 = {
    plus: function(a,b){
        console.log( a+b); //안녕 출력력
    }
}
console.log(calculator2.plus("안","녕")); //undefined 출력

const calculator3 = {
    plus: function(a,b){return a+b; //return을 써야 function을 활용할 수 있다.
        console.log("bye~"); //return 이전의 작업은 실행된다.
        return a+b;
        console.log("bye bye~~"); //return 이후의 작업은 실행되지 않고, return을 쓰면 함수가 종료된다.
    }
}
console.log(calculator3.plus("안", "녕?")); //안녕? 출력
const plusResult = calculator3.plus(1,2); //새로운 변수, plusResult에 calculator3 객체의 값에 1, 2 인수를 대입한다.
console.log(plusResult); //3 출력


//conditional
const checkAge = parseInt(prompt("How old are you?")); //pareInt라는 함수(값을 문자열로 분석, 정수로 반환)
console.log(checkAge); //문자열일 경우, NaN 출력. 

if(isNaN(checkAge)){ //isNaN() > NaN 값인지 확인하는 함수
    console.log("Please write a number."); //값이 string일 경우, NaN값으로 인식하고 출력된다.
} else {
    console.log("Thank you for writing your age.");
} 