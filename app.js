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
