import React from "react"
import { useState,useEffect } from "react";
import axios from "axios";
import Location from "../getLocation/get_location";
import hoteldata from "../hoteldata.json"
export default function Hotels(){

    const [myData, setMyData] = useState([])
    const [location, setLocation] = useState("Enter Place")
    const [check, setCheck] = useState(false)

    const handleOnChange = (event)=>{
      setLocation(event.target.value);    
    }
    const handleOnClick = ()=>{
      setCheck(true);    
    }
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

    
      // NOTE:  calling the function
      useEffect(() => {

        async function getMyHotelsData () {
        
          const res = await axios.request(options);
          console.log(res)
          if(res.data)
            setMyData(res.data);
          
        };

        getMyHotelsData()

      },[]);

    let hotelName = ""
    let latitude = 0
    let longitude = 0
    let location_id = 0
    let location_string = 0

    try {
        hotelName = myData.data[0].name;
        latitude = myData.data[0].latitude;
        longitude = myData.data[0].longitude;
        location_id = myData.data[0].location_id;
        location_string = myData.data[0].location_string;

    } catch (error) {
       // console.log("my Error: ", error)
    }

    return(
        <>
        {/* <form>
          <input type="text" name="location" onChange={handleOnChange} value={location}/>
          <input type="submit" name="getHotel"onClick={handleOnClick}/>
        </form> */}
            <div >
            <h1>Hotel Data</h1>
              <p>name: {hotelName}</p>
              <p>latitude: {latitude}</p>
              <p>longitude: {longitude}</p>
              <p>location_id: {location_id}</p>
              <p>location_string: {location_string}</p>
            </div>

            {/* <p>{JSON.stringify(myData.data)}</p> */}


            <h1>Hotel Data</h1>
        <ul>
          {
            hoteldata.map (content =>(
              <li>
                <span><strong>otel name:</strong> {content.name}</span>
                <span><strong>latitude:</strong> {content.latitude}</span>
                <span><strong>longitude:</strong> {content.longitude}</span>
                <span><strong>location_id:</strong> {content.location_id}</span>
              </li>
            ))
          }
        </ul>
        </>
    );
}