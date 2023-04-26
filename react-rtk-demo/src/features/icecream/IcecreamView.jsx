import React from "react";
import { useSelector } from "react-redux";
export const IcecreamView = ()=>{
    const icecreams = useSelector((state)=>state.icecream.numOfIcecream)
    return(
        <div>
            <h1>Number of Ice creams {icecreams}</h1>
            <button>Order Ice cream</button>
            <button>Restock Ice Creams</button>
        </div>
    )
}