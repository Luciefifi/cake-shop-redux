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
