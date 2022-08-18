//class: template
//class에 데이터를 넣어 만든것이 오브젝트이다.
//object: instance of a class
//JavaScript classes
//ES6에 클래스가 추가 됐다.


//1.클래스 선언
class Person{
    //constructor(생성자) 를 통해 오브젝트를 만들때 필요한 데이터를 전달한다.
    //
    constructor(name, age) {
        //fields
        //그래서 constructor를 통해 전달받은 데이터를 class에 존재하는 fields 
        //name과 age에 할당해 줍니다.
        this.name = name;
        this.age = age;
    }

    //methods
    speak() {
        //class에 있는 this.name을 출력하면서 hello!도 같이 출력해 줍니다.
        //this는 생성된 오브젝트의 . name이다.
        console.log(`${this.name}: hello!`);
    }
}

//오브젝트 생성

const jooy = new Person('jooy', 27);
console.log(jooy.name);
console.log(jooy.age);
jooy.speak();

//2.Getter and setters
//만든어 놓은 클래스를 방어적으로 사용할 수 있게 해주는 getter와 setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }


    //만약 user의 나이가 -1이면 말이 되지 않으므로 get을 이용하여 값을 리턴하고
    //set을 이용하여 값을 설정할 수 있습니다.(set은 값을 설정할 수 있기때문에 value를 받아 와야 한다.)

    //this.age = age;
    //age라는 getter를 정의하는 순간 this.age는 메모리에 올라가있는 데이터를 읽어오는 것이 아니라 바로 getter를 호출하게 됩니다.
    //그리고 setter를 정의하는 순간 = 을 호출 할때(값을 할당할때) setter를 호출하게 됩니다.
    //전달된 value를 this.age에 할당할때 메모리의 값을 업데이트 하는것이아니라 setter를 호출하게 됩니다. 이러면서 무한정 호출하게 되니까
    //그러면 Uncaught RangeError: Maximum call stack size exceeded이런 에러를 마주하게 됩니다.


    // get age() {
    //     return this.age;
    // }

    // set age(value) {
    //     this.age = value;
    // }

    //이것을 방지하기 위해서 getter와 setter안에 있는 변수이름을 조금 다르게 만들어 줘야 됩니다.
    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }

        //value 값이 < 0 으면 0을 쓰고 아니면 value를 쓰겠다.
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);

//필드는 _age라고 되어 있지만 .age로 호출 하고 값을 할당 할 수 있는 이유는 내부적으로 getter와 setter를 사용하고 있기 때문이다.
console.log(user1.age);


//3.public & private
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static
class Article {
    static publisher = 'Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();


//5.상속과 다양성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color`);
    }

    getArea() {
        return this.width * this.height;
    }

}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw();//부모의 메서드호출후
        //내가 만든것 출력
        console.log('^');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


//6.instanceOf
//왼쪽에 있는 rectangle 오브젝트가 오른쪽에있는  Rectangle 클래스로 만들어진것인지아닌지 확인하는 것이다. 그리고 참 거짓을 리턴한다.
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);

