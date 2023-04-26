import React from "react";
import { useSelector } from "react-redux";
export const CakeView = ()=>{
     const numOfCakes = useSelector((state)=> state.cake.numOfCake
    )
    return(
        <div>
            <h1>Number of Cakes {numOfCakes}</h1>
            <button>Order Cake</button>
            <button>Restock Cakes</button>
        </div>
    )
}