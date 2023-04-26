import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { ordered , restocked } from "./icecreamSlice";
import { useState } from "react";

export const IcecreamView = ()=>{
const [value , setValue] =  useState(1)

    const numOfIcecreams = useSelector((state)=>state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return(
        <div>
            <h1>Number of Ice creams {numOfIcecreams}</h1>
            <button onClick={()=>dispatch(ordered())}>Order Ice cream</button>
            <input  type = "number" value={value} onChange={(e)=>setValue( parseInt( e.target.value))}/>
            <button onClick={()=>dispatch(restocked(value))}>Restock Ice Creams</button>
        </div>
    )
}