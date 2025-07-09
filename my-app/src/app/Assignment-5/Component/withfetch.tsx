import { FC } from "react"


const WithFetch=(Components:FC)=>{
    return ()=>{
        return <Components/>
    }
}

export default WithFetch