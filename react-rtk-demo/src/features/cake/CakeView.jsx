import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { ordered , restocked } from "./cakeSlice";
export const CakeView = ()=>{
     const numOfCakes = useSelector((state)=> state.cake.numOfCake
    )
    const dispatch = useDispatch()
    return(
        <div>
            <h1>Number of Cakes {numOfCakes}</h1>
            <button onClick={() => dispatch(ordered())}>Order Cake</button>
            <button onClick={()=>dispatch(restocked(5))}>Restock Cakes</button>
        </div>
    )
}