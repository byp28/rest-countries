import type { ITheme } from "../App";
import Card from "../components/Card";
import type { ICountry } from "../features/api";



export default function Container({countries, selectCountry, theme} : {theme : ITheme ,countries : ICountry[], selectCountry : (country : ICountry) => void} ) {
  return (
    <div className="w-full px-20 flex gap-10 justify-between flex-wrap max-lg:px-5 max-lg:flex-col max-lg:items-center">
        {countries.map((country, key)=>(
            <Card key={key} theme={theme} country={country} selectCountry={selectCountry}/>
        ))}
    </div>
  )
}
