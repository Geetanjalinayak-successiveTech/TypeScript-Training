// .Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.




"use client"

import { useState,useEffect } from "react"


export default function useTimer(initial:number)
{
    const [time,setTime]= useState<number>(initial);
    const [isRunning,setRunning]=useState<boolean>(false);

    useEffect(()=>{
        let timer:ReturnType<typeof setInterval>;
        if(isRunning && time>0)
        {
            timer= setInterval(()=>{setTime((prev)=>prev-1)},1000);
        }


        return ()=>clearInterval(timer);
    },[time,isRunning])


    function start(): void
    {
        setRunning(true);
    }

    function pause():void
    {
        setRunning(false);
    }


    function reset():void
    {
        setRunning(false);
        setTime(initial);
    }

    return {time, start, pause, reset}
}