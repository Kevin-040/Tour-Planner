import React, { useState, useEffect} from 'react'
import axios from 'axios';
// import ViewMap from '../Map/viewMap';
import { Link } from 'react-router-dom';
import { useLocation} from 'react-router-dom'

export default function Location() {
  
  const [locationData, setlocationData] = useState([]); 

  const place = useLocation().state.place;

  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/auto-complete',
    params: {query: place, lang: 'en_US', units: 'km'},
    headers: {
      'X-RapidAPI-Key': '35900f3b3amsh4f4c17f7fcaebf5p12196bjsn2e01d7415684',
      // 'X-RapidAPI-Key': '316a36177bmsh3a1271d37149742p17c083jsn1e53aab2fc51',
      // 'X-RapidAPI-Key': '61f625c231msh512cfebd4c917bap1bade9jsnf4c01fdce162',
      // 'X-RapidAPI-Key': '2e17186d71msh72bddb6221e1f71p1414a7jsn7540b28246ce',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  useEffect(() => {
    
    async function getMyLocationData () {
    
      const res = await axios.request(options); 
      setlocationData(res.data.data);    
    }

    getMyLocationData() ; 
    

  });
 
 

  return (
    <><div>
      <h6>Location Data</h6>
        <ul>
          {
            locationData.map((element) => {
              // {console.log(element.result_object)}
              return(<>
              <li>
                <span><strong>name:</strong> {element.result_object.name} </span>
                <span><strong>location_id:</strong> {element.result_object.location_id}</span><hr/>
                <span><strong>latitude:</strong> {element.result_object.latitude}</span>
                <span><strong>  longitude:</strong> {element.result_object.longitude} </span><hr/>
                <Link to="/map" state={{ lat: element.result_object.latitude, lng: element.result_object.longitude }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded mt-2">
                ViewOnMap
                </Link>
                <Link to="/dest" state={{ locationID: element.result_object.location_id}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded mt-2">
                Attractions
                </Link>
                <Link to="/hotel" state={{ locationID: element.result_object.location_id}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded mt-2">
                Hotels
                </Link>
              </li>
              </>)
            })
          }
        </ul>
        </div>
        {/* <ViewMap/> */}
        
    </>
  );
}
