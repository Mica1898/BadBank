import React from 'react'
import UserContext from './context'

export default function CreateAccount(){
    const ctx = React.useContext(UserContext);
    return (
       <h1>Create Account<br/>
           {JSON.stringify(ctx)}
       </h1> 
    )
}
