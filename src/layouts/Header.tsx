import { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import type { ITheme } from "../App";


export default function Header({theme, changeTheme}:{theme : ITheme,changeTheme : (th:boolean)=> void}) {
    const [dark, setDark] = useState(false)

    const reverse = ()=>{
        setDark(!dark)
        changeTheme(dark)
    }

  return (
    <header className={`w-full ${theme.secound_bg} flex justify-between items-center px-20 py-10 shadow-md shadow-black/10 max-lg:px-5`}>
        <h1 className="text-2xl font-semibold">Where in the world?</h1>
        <span onClick={reverse} className="flex items-center gap-2 cursor-pointer"><IoMoonOutline />Dark Mode</span>
    </header>
  )
}
