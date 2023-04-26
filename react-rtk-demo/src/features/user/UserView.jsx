import React, {useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
export const UserView = ()=>{
    const user = useSelector((state)=>state.user)
    const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  }, [])
    return(
        <div>
            <h1>list of all users</h1>
            {user.loading && <div>loading...</div>}
            {!user.loading && user.error ? <div>Error: {user.error} </div> : null}
            {!user.loading && user.users.length? (
            <ul>
                {user.users.map(user=>
                    <li key={user.id} >{user.name}</li>
                )
                 } </ul>) :null}

            </div>
    )
}