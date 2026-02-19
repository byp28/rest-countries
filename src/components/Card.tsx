import type { ITheme } from "../App";
import type { ICountry } from "../features/api";


export default function Card({country, selectCountry, theme} : {theme: ITheme ,country : ICountry, selectCountry : (country : ICountry) => void}) {
  return (
    <div className={`w-2xs flex flex-col shadow-lg ${theme.secound_bg}`}>
        <img className="cursor-pointer" onClick={()=> selectCountry(country)} src={country.flags.svg} alt={country.name} />
        <div className="w-full px-6 py-8 flex flex-col gap-1">
            <span className="text-lg pb-2 font-semibold cursor-pointer" onClick={()=> selectCountry(country)}>{country.name}</span>
            <span className="font-semibold">Population : <span className="font-medium">{country.population.toLocaleString("en-US")}</span></span>
            <span className="font-semibold">Region : <span className="font-medium">{country.region}</span></span>
            <span className="font-semibold">Capital : <span className="font-medium">{country.capital}</span></span>
        </div>
    </div>
  )
}
