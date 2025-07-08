"use client"

type props={
    increment:()=>void
}


export default function Child({increment}:props)
{
    return(
    <main>
        <div>
            
            <button onClick={increment}> Click </button>
        </div>
    </main>
    )
    
}