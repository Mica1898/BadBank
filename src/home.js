import React from 'react'
import UserContext from './context'

export default function Home(){
    const ctx = React.useContext(UserContext);
    return (
       <h1>Home<br/>
           {JSON.stringify(ctx)}
       </h1> 
    )
}