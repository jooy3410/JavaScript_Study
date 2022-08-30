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