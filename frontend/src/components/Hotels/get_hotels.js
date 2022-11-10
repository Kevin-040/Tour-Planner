import React from "react"
import { useState,useEffect } from "react";
import axios from "axios";
import Item from '../Display/items'
// import DATA from '../data.json'

export default function Hotels(){

    const [hotelData, setHotelData] = useState([])

    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
        params: {
          location_id: '304552',
          checkin: '2022-10-12',
          adults: '1',
          lang: 'en_US',
          currency: 'USD',
          nights: '2'
        },
        headers: {
          'X-RapidAPI-Key': '316a36177bmsh3a1271d37149742p17c083jsn1e53aab2fc51',
          // 'X-RapidAPI-Key': '2e17186d71msh72bddb6221e1f71p1414a7jsn7540b28246ce',
          // 'X-RapidAPI-Key': '1a00ba1da5msh07ad2caac557c38p15f2d6jsn0fadb5583bbe',
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

      <>
        {/* <h6>Hotel Data</h6>

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
          {hotelData.map((element)=>{
                let temp = element.description;
                console.log(element.photo.images.medium.url)

                return <>
                <div key={element.location_id}>
                    <Item 
                    title={element.name}
                    description={temp === null? "Please Click Read More": temp.slice(0,170)}
                    imageURL = {element.photo.images.medium.url? element.photo.images.medium.url:"http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"}

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