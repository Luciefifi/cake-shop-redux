
const redux = require('redux')

const createStore = redux.createStore




//creating action
// an action is an abject with a type element
const CAKE_OREDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

//action creator : a function which returs the object / action

function orederCake () {
    return{
            type: CAKE_OREDERED,
            payload: 1,
        }
    
}
const restockCake = (qty = 1) =>{
    return{
        type: CAKE_RESTOCKED,
        payload: qty,
    }
}

//reducer
//(previous_state , action)

const initialState = {
    numOfCakes : 10,
}

const reducer = (state = initialState , action) =>{
    switch(action.type)
   {
    case CAKE_OREDERED:
        return{
            ...state,
            numOfCakes: state.numOfCakes -1

        }
        case CAKE_RESTOCKED:
            return{
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
   }
}

const store = createStore(reducer)
console.log('the initial state:' ,store.getState())
 const unscubscribe = store.subscribe(()=>console.log('update State', store.getState()))

store.dispatch(orederCake())
store.dispatch(orederCake())
store.dispatch(orederCake())
store.dispatch(orederCake())
store.dispatch(restockCake(3))


unscubscribe()

