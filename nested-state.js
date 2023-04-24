const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore
const initialState = {
    name: 'Vishwas',
    address:{
        street:'12 Main St',
        city:'Boston',
        state:'MA'
    },
}

const STREET_UPDATED = 'STREET_UPDATED'
const updateStreet = (street)=>{
    return{ type:STREET_UPDATED,
        payload:street
    }
   
}

const reducer =(state=initialState , action) =>{
   switch(action.type){
    case STREET_UPDATED:
        // return{
        //     ...state,
        //     address:{
        //         ...state.address,
        //         street:action.payload
        //     }
        // }
        return produce(state, (draft) =>{
            draft.address.street = action.payload

        })
        default:
            return state
   }
}

const store = createStore(reducer)
console.log('the initial state is:', store.getState())

const unscubscribe = store.subscribe(()=> console.log('the updated state ', store.getState()))

store.dispatch(updateStreet('456 Main St'))


