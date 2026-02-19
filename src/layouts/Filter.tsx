import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import type { ITheme } from "../App";


export default function Filter({regionFilter,searchCountry, theme} : {theme : ITheme ,regionFilter : (region: string) => void, searchCountry : (region: string) => void}) {

    const [selectMenu, setSelectMenu] = useState(false);

    const search = (e: React.ChangeEvent<HTMLInputElement>)=>{
        searchCountry(e.target.value)
    }

    return (
        <div className="w-full flex items-center justify-between px-20 py-15 max-lg:px-5 max-lg:flex-col max-lg:gap-8 max-lg:justify-start max-lg:items-start ">
            <div className={`px-6 py-5 flex items-center gap-4 w-100 shadow-lg rounded max-lg:w-full ${theme.secound_bg}`}>
                <IoSearch />
                <input type="text" onChange={search} placeholder="Search for a country" className={`outline-none ${theme.text}`}/>
            </div>
            <div className={`px-6 py-5 flex items-center justify-between gap-4 w-55 cursor-pointer shadow-lg rounded relative ${theme.secound_bg}`}>
            <span onClick={()=> setSelectMenu(!selectMenu)}>Filter by Region</span> 
                <IoIosArrowDown />
                
                <div className={!selectMenu ? "hidden" : `absolute left-0 top-20 flex  px-6 py-5 flex-col gap-4 w-55 shadow-lg rounded ${theme.text} ${theme.secound_bg}`}>
                    <span onClick={()=>regionFilter("Africa")}>Africa</span>
                    <span onClick={()=>regionFilter("Americas")}>America</span>
                    <span onClick={()=>regionFilter("Asia")}>Asia</span>
                    <span onClick={()=>regionFilter("Europe")}>Europe</span>
                    <span onClick={()=>regionFilter("Oceania")}>Oceania</span>
                </div>
            </div>
        </div>
    )
}
