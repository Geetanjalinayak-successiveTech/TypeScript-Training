// Create a theme switcher application using the useContext hook.
// Create a context to manage the current theme (e.g., light or dark).
// Provide a button to toggle between the two themes.
// Use the useContext hook to access the theme value and update it.
// Apply different styles and colors to components based on the selected theme.

"use client"
import { useContext } from "react";
import { ThemeContext } from "../question-11/page";




export default function Theme()
{
    const them= useContext(ThemeContext);
    if(!them)return null ;
    const {theme, setTheme}=them;
    function handleTheme()
    {
         if(theme==="dark")
         {
            setTheme("light")
         }
         else{
            setTheme("dark")
         }
    }
    
    return(
    <div>
        <button onClick={handleTheme} >Change Theme</button>
    </div>
    )

}