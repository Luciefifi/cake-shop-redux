
const redux = require('redux')

const createStore = redux.createStore




//creating action
// an action is an abject with a type element
const CAKE_OREDERED = 'CAKE_ORDERED'

//action creator : a function which returs the object / action

function orederCake () {
    return{
            type: CAKE_OREDERED,
            quantity: 1,
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


unscubscribe()

