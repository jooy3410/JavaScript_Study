//1.async
// function fetchUser() {

//     return new Promise((resolve,reject) => {

//         resolve('jooy');

//     });

// }

//promis를 쓰지 않고도 비동기를 할 수 있게 해주는 async

async function fetchUser() {

     return resolve('jooy');

}



const user = fetchUser();
user.then(console.log)
console.log(user)