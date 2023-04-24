
const redux = require('redux')

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators




//creating action
// an action is an abject with a type element
const CAKE_OREDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'
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

function orderIceCream(qty=1){
    return{
        type:ICECREAM_ORDERED,
        payload:qty
    }
}

function restockIceCream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty
    }
}

//reducer
//(previous_state , action)

const initialCakeState = {
    numOfCakes : 10,
}
const initialIceCreamState = {
    numOfIceCream: 20,
}

const cakeReducer = (state = initialCakeState , action) =>{
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

const iceCreamReducer = (state = initialIceCreamState , action) =>{
    switch(action.type)
    {
        
        case ICECREAM_ORDERED:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload
            }
            case ICECREAM_RESTOCKED:
                return{
                    ...state,
                    numOfIceCream : state.numOfIceCream + action.payload
                }
                default:
                    return state
    }
}

const store = createStore(reducer)
console.log('the initial state:' ,store.getState())
 const unscubscribe = store.subscribe(()=>console.log('update State', store.getState()))
 const actions = bindActionCreators({orederCake , restockCake , orderIceCream , restockIceCream} , store.dispatch)

 actions .orederCake()
 actions .orederCake()
 actions .orederCake()
 actions .restockCake(3)
 actions.orderIceCream(1)
 actions.orderIceCream(1)
 actions.restockIceCream(3)

// store.dispatch(orederCake())
// store.dispatch(orederCake())
// store.dispatch(orederCake())
// store.dispatch(orederCake())
// store.dispatch(restockCake(3))


unscubscribe()

