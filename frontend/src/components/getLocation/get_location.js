import React, { useState, useEffect} from 'react'
import axios from 'axios';
import jdata from "../data.json"

export default function Location(props) {

  const [myData, setMyData] = useState([])
  const place = props.place

  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/auto-complete',
    params: {query: place, lang: 'en_US', units: 'km'},
    headers: {
      'X-RapidAPI-Key': '2e17186d71msh72bddb6221e1f71p1414a7jsn7540b28246ce',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  // using Async Await
  useEffect(() => {
    
    async function getMyLocationData () {
    
        const res = await axios.request(options);
        if(res.data){setMyData(res.data);}
          
    }

    getMyLocationData();

  }, [place]);

  let name = ""
  let latitude = 0
  let longitude = 0
  let location_id = 0

  const [DATA, setDATA] = useState([])
  try{
    setDATA(myData.data)
    name = myData.data[0].result_object.name;
    latitude = myData.data[0].result_object.latitude;
    longitude = myData.data[0].result_object.longitude;
    location_id = myData.data[0].result_object.location_id;

  }
  catch(e){
    console.log("My Error: "+ e)
  }
  // jdata = DATA


  return (
    <>
            <div >
              <p>name: {name}</p>
              <p>latitude: {latitude}</p>
              <p>longitude: {longitude}</p>
              <p>location_id: {location_id}</p>
            </div>
            <div>
        <h1>Location Data</h1>
        {/* {DATA != null} */}
        <ul>
          {
            jdata.map (content =>(
              <li key={name}>
                <span><strong>name:</strong> {content.result_object.name}</span>
                <span><strong>latitude:</strong> {content.result_object.latitude}</span>
                <span><strong>longitude:</strong> {content.result_object.longitude}</span>
                <span><strong>location_id:</strong> {content.result_object.location_id}</span>
              </li>
            ))
          }
        </ul>

        {/* <p>{JSON.stringify(myData.data)}</p> */}
    </div>
    </>
  );
}
