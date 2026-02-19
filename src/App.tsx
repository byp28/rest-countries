import { useEffect, useState } from "react"
import Container from "./layouts/Container"
import Filter from "./layouts/Filter"
import Header from "./layouts/Header"
import { fetchData, type ICountry } from "./features/api"
import Country from "./layouts/Country"

export interface ITheme{
  bg : string,
  secound_bg : string,
  text : string
}

function App() {

  const [countries , setCountries] = useState<ICountry[]>([])
  const [country, setCountry] = useState<ICountry | null>(null)
  const [filterCountries , setFilterCountries] = useState<ICountry[]>([])
  const [theme, setTheme] = useState<ITheme>({
    bg : "bg-white",
    secound_bg : "bg-white",
    text : "text-black"
  })

  const changeTheme = (dark : boolean)=>{
    if(dark){
      setTheme({
        bg : "bg-white",
        secound_bg : "bg-white",
        text : "text-black"
      })
    }else{
      setTheme({
        bg : "bg-[#202D36]",
        secound_bg : "bg-[#2B3743]",
        text : "text-white"
      })
    }
  }

  const fetchCountries = async ()=>{
    const data = await fetchData()
    setCountries(data)
    setFilterCountries(data)
  }

  const regionFilter = (region:string)=>{
    setFilterCountries(countries.filter((country)=> country.region===region))
  }

  const findBorder = (border:string) : string =>{
    const name = countries.find((country)=> country.alpha3Code===border)?.name
    if(name){
      return name
    }
    return "none"
  }

  const searchCountry = (name:string)=>{
    if(name===""){
      setFilterCountries(countries)
    }
    setFilterCountries(countries.filter((country)=> country.name===name))
  }

  const selectCountry = (newCountry: ICountry)=>{
    setCountry(newCountry)
  }

  const back = ()=>{
    setCountry(null)
  }

  useEffect(()=>{
    if(countries.length <= 0){
      fetchCountries()
    }
  }, [countries])

  return (
    <main className={`${theme.bg} ${theme.text} nunito min-h-screen overflow-x-hidden overflow-y-auto`}>
      <Header theme={theme} changeTheme={changeTheme}/>
      {
        country != null 
        ? <Country theme={theme} country={country} back={back} findBorder={findBorder}/> 
        : <Filter theme={theme} searchCountry={searchCountry} regionFilter={regionFilter}/>
        
      }
      {
        country === null 
        ?  <Container theme={theme} selectCountry={selectCountry} countries={filterCountries} />
        :   <span className="hidden"></span>
      }
      
    </main>
  )
}

export default App
