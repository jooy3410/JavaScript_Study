//JavaScript is synchronous.
//Execute the code block by orger after goisting.
//hoisting: var, function 선언이 맨위로 가는것

//동기: 순서대로 실행되는것
//하나끝나면 하나 실행되고 그다음것이 끝나면 그다음것이 실행된다.
console.log('1');
console.log('2');
console.log('3');

//비동기

console.log('1');
setTimeout(function () {
    console.log('2');
}, 1000);
console.log('3');

//Synchronous callback
function printImmediately(print) {
    print();
}

printImmediately(()=> console.log('hello'));

//Asynchronous callback
