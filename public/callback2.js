//callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=> {
            if (
                (id === 'jooy' && password === '1234') ||
                (id === 'coder' && password === 'academy' )
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);

    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jooy') {
                onSuccess({ name: 'jooy', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

//1. id와 pass을 받아옴
//2. login
//3. 받아온 아이디를 이용해서 역할을 요청
//4. 성공적으로 받아온다면 이름과 역할이 들어있는 것을 출력해보자

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(
    id,
    password,
    user => {
        UserStorage.getRoles(
            user,
             userwithRole => {
                alert(`Hello ${userwithRole.name}, you have a ${userwithRole.role} role`)
             },
             error => {
                console.log(error);
             })
    } 
)


//콜벡 체인의 문제점
//1. 가독성이 떨어져 비지니스 로직을 한번에 이해하기 힘듦
//2. 애러가 발생했거나 디버깅할때 힘듦
//3, 유지보수 하기 힘듦