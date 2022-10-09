import React from "react"
import { useState,useEffect } from "react";
import axios from "axios";

export default function Hotels(){

    const [hotelData, setHotelData] = useState([])

    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/list',
        params: {
          location_id: '15363305',
          adults: '1',
          rooms: '1',
          nights: '2',
          offset: '0',
          currency: 'USD',
          order: 'asc',
          limit: '30',
          sort: 'recommended',
          lang: 'en_US'
        },
        headers: {
          'X-RapidAPI-Key': '2e17186d71msh72bddb6221e1f71p1414a7jsn7540b28246ce',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };

      useEffect(() => {
    
        async function getMyHotelsData () {
        
          const res = await axios.request(options); 
          setHotelData(res.data.data); 
          // console.log(res.data.data)
              
        }
    
        getMyHotelsData() ; 
        
    
      }, []);

    return(
        <>
       <h6>Hotel Data</h6>

        <ul>
          {
            hotelData.map((element) => {
              {console.log(element.result_object)}
              return(
              <>
              <li>
                <span><strong>name:</strong> {element.name}</span>
                <span><strong>latitude:</strong> {element.latitude}</span>
                <span><strong>longitude:</strong> {element.longitude}</span>
                <span><strong>location_id:</strong> {element.location_id}</span>
              </li>
              </>)
            })
          }
        </ul>
        </>
    );
}