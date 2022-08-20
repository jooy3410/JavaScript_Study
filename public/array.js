//오브젝트와 자료구조의 차이
//오브젝트는 서로 연관된 행동과 특징등을 묶어 놓은 것을 오브젝트라고 한다.
//오브젝트들을 묶어 놓는것을 자료구조라고 합니다.
//

//한배열안에는 동일한 데이터타입을 넣는것이 좋다.
//배열의 포인트는 인덱스이다.

//Array


//1. 배열 선언
const arr1 = new Array();
//더 흔하게 쓰이는 방법
const arr2 = [1, 2];

//index를 활용해서 삽입 삭제하는것을 아는게 중요하다.

//2.index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
// 인덱스를 전달하게 되면 거기에 해당하는 값을 반환한다.

//맨 처음에 있는 값을 찾고싶을때
console.log(fruits[0]);

//맨 뒤에 있는 값을 알고 싶을때
console.log(fruits[fruits.length - 1]);

//전체 데이터를 출력하고 싪을때
//3.loop overan array

//a. for를 사용하는 방법
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

//b. for of를 사용하는 방법
for (let fruit of fruits) {
    console.log(fruit);
}

//c. forEach 
fruits.forEach(function (fruit, index, array) {
    console.log(fruit, index, array);
})

fruits.forEach((fruit, index) => console.log(fruit, index));

//4. add .delete, copy'
fruits.push('파파야', '망고');
console.log(fruits);

fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the benigging
fruits.unshift('파파야', '망고');
console.log(fruits);

//shift: remove an item from the benigging
fruits.shift();
console.log(fruits);

//shift, unshift are slawr than pop, push
//splice: remove an item by index position
fruits.push('자몽', '오렌지', '레몬');
console.log(fruits);
fruits.splice(1);
console.log(fruits);