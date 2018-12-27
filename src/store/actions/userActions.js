// Action Creators
const getUser = (user) => ({type: 'LOGIN_USER', payload: user })
const updateUser = (user) => ({type: 'UPDATE_USER', payload: user })
// const logOut = () => ({type: 'LOGOUT_USER' })

// Thunk creators 

export const newUser = (userInfo) => {
    // console.log(userInfo)
    return(dispatch) => {
        // console.log(dispatch)
        return fetch (`http://localhost:3000/users`, {
            method: 'POST', 
            headers: {
                'Content-type': 'application/json', 
                Accept: 'application/json'
            }, 
            body: JSON.stringify({user: userInfo})
        }).then(res => res.json())
        .then(res => {
            localStorage.setItem('token', res.jwt)
            dispatch(getUser(res.user))
        })
        .catch(console.error)
    }
}

export const logInUser = (userInfo) => {
    return(dispatch) => {
        return fetch('http://localhost:3000/login', {
            method: 'POST', 
            headers: {
                "Content-type": 'application/json', 
                Accepts: 'application/json'
            }, 
            body: JSON.stringify({
                user: userInfo
                })
            })
            .then(res => res.json())
            .then(res => {
                localStorage.setItem('token', res.jwt)
                dispatch(getUser(res.user))
            })
            .catch(console.error)
        }
    }

export const findUser = (token) => {
    return dispatch => {
        return fetch('http://localhost:3000/current_user', {    
        headers: {
              'Content-type': 'application/json', 
              Accepts: 'application/json', 
              Authorization: token
            }
          }).then(res => res.json())
          .then(res => dispatch(getUser(res.user)))
          .catch(console.error)
    }
}

export const editProfile = (userInfo, id) => {
    // console.log(userInfo)
    // console.log(id)
    return dispatch => {
        return fetch(`http://localhost:3000/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json', 
                Accepts: 'application/json'
            }, 
            body: JSON.stringify({user: userInfo})
        }).then(res => res.json())
        .then(res => dispatch(updateUser(res)))
        .catch(console.error)
    }
}

// export const logOutUser = () => {
//     return dispatch => {
//         localStorage.removeItem('token')
//         dispatch(logOut())
//     }
// }