// 1.  함수 선언
// function name(param1, param2) {
//     body ... return;
// }
// 하나의 함수는 하나의 일을 해야한다.
// 함수이름은 동사형태로 작성해야한다.
// 함수는 오브젝트이다.body

function printHello() {
    console.log('Hello');
}

printHello();

// 파라미터를 넣은 경우
function log(message) {
    console.log(message);
}
log('hello@')

function changeName(obj) {
    obj.name = 'coder';
}

const jooy = { name: 'jooy'};

changeName(jooy);
// jooy가 가르키는 name을 coder로 바꿈
console.log(jooy);
// {name: 'coder'}
// 오브젝트는 레퍼런스로 전달되기 때문에 함수안에서 오브젝트의 값을 변경하게 되면
// 그대로 메모리에 적용된다.

// 3.Default parameters(added in ES6)
function showMessage(message, from = 'hi') {
    //파라미터 값이 오지 않으면 from 값이 출력된다.
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4.Rest parameters (added in ES6)
function printAll(...args) {
    //...을 3개 작석하면 rest파라미터라고 하는데 배열형태로 전달합니다.
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for(const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));

}
printAll('hi', 'jooy', 'bye','3');

//5. scope
//밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello'; //지역변수 안에서만 전달 가능
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);
    //Uncaught ReferenceError: childMessage is not defined
}

printMessage();

// 6. Return a value 
// 함수에서 리턴이 정의 되지 않으면 return undefind 이거나 return을 해줄 수 있다.
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

//7. Early return, early exit
// bad
//블록 안에서 로직을 써서 가독성이 떨어진다.
function upgradeUser(user) {
    if(user.point > 10) {
           //long upgrade logic...

        }
    }

//good

//조건이 틀릴경우, undifind일 경우, -1인경우 빨리 리턴을해 가독성을 높인다.
function upgradeUser(user){
    if (user.point <= 10) {
        return;
    }
    //longupgrade logic...
}


//function expression
const print = function () {
    //anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer == 'love you') {
        printYes();
    }else {
        printNo();
    }
}
//anonymous function
const printYes = function () {
    console.log('yes!');
};

//named function
//better debugging in debugger's stact traces
//recursions
const printNo = function print() {
    console.log('no');
    // print();
};

randomQuiz('wrong', printYes,printNo);
randomQuiz('love you', printYes,printNo);

//Arrow Function
// Arrow functionalways anonymous
// const simplePint = function () {
//     console.log('simplePrint');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const SimpleMultiply = (a, b) => {
    //do somthing more
    return a * b;
}

// IIFE: Immediately Invoked Function Expreesion
// 선언함과 동시에 바로 호출하려면
//최근에는 잘 쓰이지 않음
(function hello() {
    console.log('IIFE');
})();
