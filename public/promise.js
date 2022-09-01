//promise 는 javascript에 내장되어 있는 비동지적을 수행할때 콜백함수를 대신해 사용하는 오브젝트입니다.

//state: pending -> fulfilled or rejected
//Producer vs consumer

//producer
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    //doing some heavy work(network, read files)
    console.log('doing something...');
    setTimeout(() => {
        // resolve('jooy')
        reject(new Error('no network'))
    }, 2000);

});

//2. Consumers: then, catc, finally
promise.then((value) => {
    console.log(value);
}).catch(error => {
    console.log(error);
}).finally(() => {
    console.log('finally');
});

//3. promise chaining
const fetchNumber = new Promise((resole, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise(( resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));

//4. error handling
const getHen = () =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve('닭'), 1000);
});
const getEgg = hen =>
new promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 달걀`), 1000);
});
const cook = egg =>
new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 달걀프라이`), 1000);
});

getHen()
    .then(getEgg)
    .then(egg => cook(egg))
    .then(meal => console.log(meal));
