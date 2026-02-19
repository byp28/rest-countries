
export interface ICountry{
    name : string,
    nativeName : string,
    capital : string,
    subregion : string,
    region : string,
    alpha3Code : string,
    population :number,
    flags : {
        svg : string
    },
    currencies : [
        {
            name : string
        }
    ],
    languages : [
        {
            name : string
        }
    ]
    borders : Array<string>,
    topLevelDomain : Array<string>
}

export const fetchData = async ()=>{
    const data = await fetch("/data/data.json")
    const countries = await data.json()
    return countries as Array<ICountry>

}
