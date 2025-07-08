"use client"

import WithLogger from "../Component/withLogger";
import LoggerComponent from "../Component/loggerComponent";


const LoggerApp=WithLogger(LoggerComponent);

export default function App()
{
    return <LoggerApp/>
}