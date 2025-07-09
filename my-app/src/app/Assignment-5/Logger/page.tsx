"use client"

import WithLogger from "../Component/withLogger";
import LoggerComponent from "../Component/loggerComponent";
import { FC } from "react";


const LoggerApp:FC=WithLogger(LoggerComponent);

export default function App()
{
    return <LoggerApp/>
}