//Variable 변수
//let (added in ES6) Mutable data type

//globla scope
//블록밖에다 선언할 경우
//글로벌로 선언할 경우 애플리케이션이 시작할때부터 끝까지 메모리에 올라가있어서
//많이 쓰지 않는 것이 좋다. 가능하면 class랑 함수 에서만 정의 해서 쓰면 좋다.
let globalName = 'global name';


//block scope
{
let name = 'test';
console.log(name);
name = 'hello';
console.log(name);
}

//var를 쓰면 안되는 이유
//1.
//var hoisting : 어디에 선언했냐 상관없이 항상제일 위로 선언을 끌어올려주는것을 말한다.
//때문에 쓰면 안된다.
//2.
//var는 block scope가 먹히지 않는다.
//그래서 let을 쓰는것이 좋다.

//constants (immutable data type)
//가리키고 있는 포인터가 잠겨있어서 값을 변경할을 없다.
//1.보안상의 이유 
//2.쓰레드 안정성
//3.나중에 코드 변경시 실수를 방지할 수 있다.

//Variable types
//primitive(더이상 작은 단위로 나눠질 수 없는 한가지 아이템)
//==single item: number, string, boolean, null, undefied, symbol
//object(single item들을 한단위로 한박스로 관리할수 있게 해주는 것)
//function, first-class function== 이것이 있으면 다른변수에 할당이 가능하고
//리턴타입으로도 function을 전달할 수 있다.

let x = null; // --> 비어있는 값이다

let y = undefined; //--> 할당은 되어있지만 텅텅비어있는지 모른다.

//map이나 자료구조에서 식별자가 필요하거나 우선순위를 주고싶을때 쓰는 것이다.

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(wymbol1 === symbol2) //false
//이렇게 구분할 수도있고

const gSybol1 = Sybol.for('id');
const gSybol2 = Sybol.for('id');
console.log(gSybol1 === gSybol2) //true


//Dynamic typing: dynamically typed language
//자바스크립트는 런타입으로 데이터 타입이 정해지기 때문에 에러가 많이생길수있다.

let text ='hello';
console.log(text.charAt(0));
console.log('value: ${text}, type: ${typeof text}');
//value:hello, type: string
text = 1; //value:1 , tyep: number
console.log('value: ${text}, type: ${typeof text}');
text = '7' + 5 ; // value:75, type: string
console.log('value: ${text}, type: ${typeof text}');
text = '8' / '2' // value:4, type: number
console.log('value: ${text}, type: ${typeof text}');
