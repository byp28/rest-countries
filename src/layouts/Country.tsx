import { IoIosArrowRoundBack } from "react-icons/io";
import type { ICountry } from "../features/api";
import type { ITheme } from "../App";



export default function Country({country, back, findBorder, theme} : {theme: ITheme, country : ICountry, back : ()=> void, findBorder : (code:string)=> string}) {

    const language = ()=>{
        let lang = ""
        country.languages.map((l)=>{
           lang+= l.name +" , "
        })
        return lang.substring(0, lang.length - 2)
    }

  return (
    <div className="w-full min-h-screen px-20 py-10 flex flex-col gap-10 max-lg:px-5">
        <span onClick={()=> back()} className={`px-6 py-5 flex items-center justify-between gap-4 w-30 cursor-pointer shadow-lg rounded ${theme.secound_bg}`}>
            <IoIosArrowRoundBack />
            <span>Back</span>
        </span>
        <div className="w-full flex justify-between gap-20 items-center max-lg:flex-col">
            <img className="w-1/2 max-lg:w-full" src={country.flags.svg} alt={country.name} />
            <div className="w-1/2 flex flex-col gap-10 max-lg:w-full">
                <span className="text-2xl font-semibold">{country.name}</span>
                <div className="h-40 flex flex-col flex-wrap gap-x-10 gap-y-2 max-lg:h-auto">
                    <span className="font-semibold">Native Name : <span className="font-medium">{country.nativeName}</span></span>
                    <span className="font-semibold">Population : <span className="font-medium">{country.population.toLocaleString("en-US")}</span></span>
                    <span className="font-semibold">Region : <span className="font-medium">{country.region}</span></span>
                    <span className="font-semibold">Sub Region : <span className="font-medium">{country.subregion}</span></span>
                    <span className="font-semibold">Capital : <span className="font-medium">{country.capital}</span></span>
                    <span className="font-semibold">Top Level Domain : <span className="font-medium">{country.topLevelDomain}</span></span>
                    <span className="font-semibold">Currencies : <span className="font-medium">{country.currencies.map((c)=> c.name)}</span></span>
                    <span className="font-semibold">Langages : <span className="font-medium text-wrap block w-50">{language()}</span></span>
                </div>
                <div className="w-full flex flex-wrap gap-5 items-center max-lg:flex-col max-lg:items-start">
                    <span className="font-semibold">Border Countries : </span>
                    {
                       country.borders ?
                        country.borders.map((code, key)=> <span key={key} className={`px-3 py-2 flex items-center justify-center min-w-25  shadow-md rounded ${theme.secound_bg}`}>{findBorder(code)}</span>)
                        : ""
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
