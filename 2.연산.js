//1. String concatenation
console.log('my' +' cat')/
//my cat
console.log('1'+2);
console.log('string literals: 1 +2 = ${1 + 2}');

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); // substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log( 2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// counter에 1을 더해서 다시 counter에 값을 할당한 다음에
// preIncrement = counter;
// preIncrement에 counter값을 할당 해 준다.

const postIncrement = counter++;
// postIncrement = counter;
// counter에 값이 할당된다음에 ++(1)증가
// counter = counter + 1;

// 4. Assignment operators(할당하는 연산)
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y;
x /= y;

//5. Comparison operators (비교하는 연산)
console.log(10 < 6);
console.log(10 <= 6) 
console.log(10 > 6);
console.log(10 >= 6);

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the firest truthy value
//or 연산자는 ture가 나오면 끝나버린다.
console.log('or: ${value1 || value2 || check()}');



function check() {
    for (let i = 0; i < 10; i++) {
        console.log('~~~');
    }
    return true;
}

//7. Equality
const stringFive = '5'
const numberFive = 5;

// == loose equality, with type conversion (타입이 달라도 내용이 같으면 같다.)
console.log(stringFive == numberFive); 
console.log(stringFive != numberFive);

//=== strict equality, no type conversion (타입이 다르면 틀린다.)
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference (object는 메모리에 탑제될때 레퍼런스형식으로 탑제된다.)
const jooy1 = {name: 'jooy' };
const jooy2 = {name: 'jooy' };
const jooy3 = jooy1;
console.log(jooy1 == jooy2); // f
console.log(jooy1 === jooy2); // f
console.log(jooy1 === jooy3); // t

// equality - puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' == false); //t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

//8. Conditional operators: if
//if, else if, else
const my_name = 'jooy';
if (my_name === 'jooy') {
    console.log('hi');
} else if (my_name === 'coder') {
    console.log('amazing');
} else {
    console.log('nukwnon');
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(my_name === 'jooy' ? 'yes' : 'no'); // my_name이 jooy면 yes를 출력하고 아니면no를 출력한다.
// 간단할 때만 이렇게 쓴다.

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE':
        console.log('IE');
        break;
    case 'Chrome':
    case 'FireFox':
        console.log('FireFox');
        break;
    default:
        console.log('browser');
        break;
}

//1. Loops
//while loop, while the condition is truty,
//body code is executed.
let i = 3;
while (i > 0) {
    console.log('while : ${i}');
    i--;
}

//do while loop, body code is executed first,
//then check the condition
//do while 문은 블록을 먼저 실행시키고 싶을때 사용하는 문법이다.
do {
    console.log('do while: ${i}');
    i--;
} while (i > 0);


// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log('for');
}

for (let i = 3; i >0; i = i -2){
    console.log('inline variable for : ')
}

//let 지역변수

//nested loops
for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++){
        console.log('이중 for문')
    }
}