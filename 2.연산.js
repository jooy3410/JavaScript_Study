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