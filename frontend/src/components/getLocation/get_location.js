import React, { useState, useEffect} from 'react'
import axios from 'axios';
import jdata from "../data.json"

export default function Location(props) {
  
  const [locationData, setlocationData] = useState([]); 

  const place = props.place ; 

  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/auto-complete',
    params: {query: place, lang: 'en_US', units: 'km'},
    headers: {
      'X-RapidAPI-Key': '2e17186d71msh72bddb6221e1f71p1414a7jsn7540b28246ce',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  useEffect(() => {
    
    async function getMyLocationData () {
    
      const res = await axios.request(options); 
      setlocationData(res.data.data); 
          
    }

    getMyLocationData() ; 
    

  }, []);
 
 

  return (
    <>
      <h6>Location Data</h6>

        <ul>
          {
            locationData.map((element) => {
              {console.log(element.result_object)}
              return(<>
              <li>
                <span><strong>name:</strong> {element.result_object.name}</span>
                <span><strong>latitude:</strong> {element.result_object.latitude}</span>
                <span><strong>longitude:</strong> {element.result_object.longitude}</span>
                <span><strong>location_id:</strong> {element.result_object.location_id}</span>
              </li>
              </>)
            })
          }
        </ul>
    </>
  );
}
