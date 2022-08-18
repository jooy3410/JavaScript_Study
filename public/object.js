//Object란

// const name = 'jooy';
// const age = 4;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age);
// }
//변수를 만들때 하나씩 밖에 저장을 못하는데 이렇게 되면 문제가 주소나 이름등 변수가 많아지면 관리하기 힘들고 로지컬하게 묶어서 보기 힘들다
//그래서 그것을 타파하기 위해 오브젝트로 관리하면 된다.


function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jooy = {name:'jooy', age: 4}
print(jooy);

const obj1 = {};// 'object literal' syntax
const obj2 = new Object(); //'object constructor' syntax (이렇게 하면 object에서 지원하는 constructor를 제공한다.)


//object 는 키와 벨류의 집합체이다.
//object = {key : value}

//2.Computed properties(계산된 속성 )
//오브젝트의 값에 접근할 때 .문법을 통해 접근할 수 있고 또는
//배열에서 받아온 것처럼['name']이렇게 접근할 수있습니다.(키는 스트링 타입으로 지정해서 받아 와야한다.)

//코딩할 때는 .을 사용
console.log(jooy.name);
//실시간으로 원하는 키를 받아오고 싶을때 computed properties를 사용한다.(동적으로 사용할 때)
console.log(jooy['name']);

function printValue(obj, key) {
    console.log(obj[key]);
}

printValue(jooy, 'name')
printValue(jooy, 'age')

//3.property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
const person4 = new Person('elile', 30);
console.log(person4);

//4.Constuctor Function
function Person(name, age) {
    //this = {};
    this.name = name;
    this.age = age;
    //return this;
}

//5.in operator(해당하는 오브젝트 안에 키가 있는지 없는지 확인하는것)
console.log('name' in jooy);
//안에 없을경우
console.log('random' in jooy);

//6. for..in vs for ..of
//for (key in obj)
console.clear();


for (key in jooy) {
    console.log(key);
}

//for(value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

for (value of array) {
    console.log(value);
}


//7.Fun cloning
const user = {name: 'jooy', age: '20'}
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way
const user3 = {};
for (key in user) {
    user[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);

const user4 = Object.assign({}, user);

console.log(user4);


//another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);