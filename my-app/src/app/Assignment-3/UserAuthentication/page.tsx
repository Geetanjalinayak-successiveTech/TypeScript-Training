"use client"

import { createContext, useState } from "react"
import Child from "../Components/userAuthentication";

interface contextProviderType{
  isLoggedIn:boolean,
  username:string,
  login:()=>void,
}


const contextProvider= createContext<contextProviderType|null>(null);

export default function Parent()
{
    const [isLoggedIn,setLoggedIn]=useState<boolean>(false);
    const [username,setUsername]= useState<string>("Geetanjali")


    function login(): void
    {
        setLoggedIn(true);
    }

    return(
      <contextProvider.Provider value={{isLoggedIn,username,login}}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Authentication</h2>
        <Child/>
      </contextProvider.Provider>
    )
}

export {contextProvider}
