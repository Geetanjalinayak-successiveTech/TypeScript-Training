"use client"
import { ComponentType, useEffect } from "react"

const WithLogger=<P extends object>(Components:ComponentType<P>)=>{
    return (props)=>{
        useEffect(() => { console.log("Mount")
        return ()=>{console.log("unmount")
        }},[])
        
        useEffect(()=>{console.log("Update");
        },[])
         return <Components {...props}/>
    }
}

export default WithLogger