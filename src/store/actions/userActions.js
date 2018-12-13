// Action Creators
const createUser = (user) => ({ type: 'CREATE_USER', payload: user})

// Thunk creators 

export const newUser = (userInfo) => {
    console.log(userInfo)
    return(dispatch) => {
        console.log(dispatch)
        return fetch (`http://localhost:3000/users`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                Accept: 'application/json'
            }, 
            body: JSON.stringify({user: userInfo})
        }).then(res => res.json())
        .then(res => dispatch(createUser(res)))
    }
}