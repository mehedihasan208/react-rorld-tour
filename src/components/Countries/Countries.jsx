import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const  [countries,setCountries]=useState([])
  const [visitedCountries,setVisitdCountries] =useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

        const visttedHandelar = country =>{
                console.log('infiniti war at this moment')
              const  newVisitedCountries =[...visitedCountries,country]
                setVisitdCountries(newVisitedCountries)
        }


    return (
        <div>
            <h3>Countries : {countries.length} </h3>

                <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country=><li key={country.cca3}> {country.name.common}</li>)
                    }
                </ul>
                </div>
            <div className="country-containar">
            {
                countries.map(country => <Country key={country.cca3} 
                    visttedHandelar={visttedHandelar}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;