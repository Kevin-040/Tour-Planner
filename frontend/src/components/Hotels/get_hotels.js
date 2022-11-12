import React from "react"
import { useState,useEffect } from "react";
import axios from "axios";
import Item from '../Display/items';
import {useLocation} from 'react-router-dom';
// import DATA from '../data.json'

export default function Hotels(){

    const lctn_id = useLocation().state.locationID;
    const checkin = useLocation().state.checkin;

    const [hotelData, setHotelData] = useState([])

    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
        params: {
          location_id: Number(lctn_id),
          // location_id: '12385380',
          // checkin: checkin,
          checkin: '2022-11-25',
          adults: '2',
          lang: 'en_US',
          currency: 'USD',
          nights: '2'
        },
        headers: {
          // 'X-RapidAPI-Key': '61f625c231msh512cfebd4c917bap1bade9jsnf4c01fdce162',
          'X-RapidAPI-Key': '316a36177bmsh3a1271d37149742p17c083jsn1e53aab2fc51',
          // 'X-RapidAPI-Key': '2e17186d71msh72bddb6221e1f71p1414a7jsn7540b28246ce',
          // 'X-RapidAPI-Key': '1a00ba1da5msh07ad2caac557c38p15f2d6jsn0fadb5583bbe',
          // 'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
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
      //   <>
      //  
      //   </>

      <><h6>Hotel Data</h6>
      <h1>Location : {Number(lctn_id)}</h1>
        {/* 

        <ul>
          {
            hotelData.map((element) => {
              { console.log(element.result_object) }
              return (
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
        </ul> */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ml-20 pt-5"> 
          {hotelData && hotelData.map((element)=>{
                let temp = element.description;
                // console.log(element.photo.images.medium.url)
                
                return <>
                  <div key={element.name}>
                      <Item 
                      title={element.name}
                      description={temp === null? "Please Click Read More": temp}
                      imageURL = {(element.hasOwnProperty('photo') && element.photo.images.medium.url)? element.photo.images.medium.url:"http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"}

                      // imageURL = "http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"
                      
                      hotelURL={element.web_url}/>
                  </div>
                
                </>
          })}
        </div>
        <div className="py-10 flex justify-between mx-16">
            <button className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900 text-2xl" >Previous</button>
            <button className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900 text-2xl" >Next</button>
        </div>
    </>
    );
}