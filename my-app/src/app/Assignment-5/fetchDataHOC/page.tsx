"use client"

import FetchData from "../Component/fetchDataHOC"
import WithFetch from "../Component/withfetch"

const Res=WithFetch(FetchData)

export default function App()
{
    return <Res/>

}  
