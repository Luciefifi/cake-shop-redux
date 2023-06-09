const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

initialState = {
    loading: true,
    users: [],
    error: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS-REQUESTED'
const FETCH_USERS_SUCCEDDED = 'FETCH_USERS_SUCCEDDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = ()=>{
    return {
type: FETCH_USERS_REQUESTED
}
}

const  fetchUsersSuccess = (users) =>{
    return{
        type: FETCH_USERS_SUCCEDDED,
        payload: users
    }

}

const fetchUusersFailed = (error)=>{
    return{
        type:FETCH_USERS_FAILED,
        payload:error

    }

}

const reducer = (state= initialState , action)=>{
    switch(action.type){
        case FETCH_USERS_REQUESTED:
            return{
                ...state,
                loading:true
            }
            case FETCH_USERS_SUCCEDDED:
                return{
                    loading:false,
                    users: action.payload,
                    error:''
                }
                case FETCH_USERS_FAILED:
                    return{
                        loading:false,
                        users: [],
                        error: action.payload
                    }
    }
}
const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users').then(response=>{
            //response.data is the users
            const users = response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        }).catch(error=>{
            
            //error.message is the error message
            dispatch(fetchUusersFailed(error.message))
        })

    }
}

const store = createStore(reducer , applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())