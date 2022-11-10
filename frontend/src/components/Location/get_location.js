import React, { useState, useEffect} from 'react'
import axios from 'axios';
import ViewMap from '../Map/viewMap';
import { Link } from 'react-router-dom';

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
    

  });
 
 

  return (
    <><div className='flex'><div className='flex-1'>
      <h6>Location Data</h6>
        <ul>
          {
            locationData.map((element) => {
              // {console.log(element.result_object)}
              return(<>
              <li>
                <span><strong>name:</strong> {element.result_object.name}</span>
                <span><strong>latitude:</strong> {element.result_object.latitude}</span>
                <span><strong>longitude:</strong> {element.result_object.longitude}</span>
                <span><strong>location_id:</strong> {element.result_object.location_id}</span>
                <Link to="/dest" state={{ lat: element.result_object.latitude, lng: element.result_object.longitude }}>
                  ViewOnMap
                </Link>
                {/* <Link to={{pathname:"/dest", lat: element.result_object.latitude, lng: element.result_object.longitude }}>View</Link> */}
              </li>
              </>)
            })
          }
        </ul>
        </div>
        {/* <ViewMap/> */}
        </div>
    </>
  );
}
