"use client"
import { useRouter } from "next/navigation"


export default function Dashboard()
{

    const router= useRouter();

    return(
        <div>
            <button onClick={()=>router.push("/Assignment-3/Profile")}>Profile</button>
            <button onClick={()=>router.push("/Assignment-3/Setting")}>Settings</button>
        </div>
    )

}