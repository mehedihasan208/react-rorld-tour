import { useState } from 'react';
import './Country.css'
const Country = ({country ,visttedHandelar}) => {
    // console.log(country)
   const {name, flags,population,region
   }=country;

const [visited,setVisited] = useState(false)

const clickHandelar = () =>{
        setVisited(true)
}
// console.log(visttedHandelar)

    return (
        <div className={`country ${visited? 'visited' : ' ' }`}>
            <h4>Name : {name?.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <button onClick={clickHandelar}>{visited? 'visited' : 'Going'}</button>
            {visited? 'i am already visited' : "i am not visited at this moment"}
            <button onClick={()=>visttedHandelar(country)}>Make Visited</button>
        </div>
    );
};

export default Country;