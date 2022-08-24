//json
//JavaScript Object Notation

//1. Object to JSON
//stringfy(obj)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
//배열을 json으로 바꿀수 있다.
console.log(json);


//object를 json으로 변환하기
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    symbole: Symbole('id'),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

//자바스크립트에만있는(Symbole 데이터)와 함수는 json에 포함되지 않습니다.

json = JSON.stringify(rabbit);
console.log(json);

//원하는 요소만 json으로 변환이된다.
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json)

//callback함수를 활용하여 더 세밀하게 통제할 수 있다.
//key와 value에 따라서 좀더 다양하게 할 수 있다.
json = JSON.stringify(rabbit, (key, value) => {
    //어떤것이 들어오는지 콘솔을 찍어보고
    console.log(`key: ${key}, value: ${value}`);
    //key가 name이 들어오면 jooy라고 설정을 하고 name이 아니라면 원래의 값을 출력해라
    return key ==='name' ? 'jooy' : value;
});
console.log(json)

//2.JSON to Object
//parse(json)
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key ==='birthDate' ? new Date(value) : value;
});

console.log(obj);
rabbit.jump();
//토끼라는 obj를 json으로 변활 할때는 함수는 포함 하지 않고 변환이 됐다 그래서 그걸가지고
//만든 obj는 jump라는 함수를 가지고 있지 않다.
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());