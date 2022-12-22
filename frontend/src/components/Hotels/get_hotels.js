import React from "react"
import { useState,useEffect } from "react";
import axios from "axios";
import Item from './hotelCard';
import {useLocation} from 'react-router-dom';
import DATA from '../../assets/HotelData.json'

export default function Hotels(){

    const lctn_id = useLocation().state.locationID;
    const lctn_name = useLocation().state.locationName;
    // const startdate = useLocation().state.startdate;
    // const enddate=useLocation().state.enddate;
    const [hotelData, setHotelData] = useState([])

    // console.log(String(startdate))
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/hotels/get-details',
        params: {
          location_id: Number(lctn_id),
          // location_id: '12385380',
          // checkin: String(useLocation().state.startdate),
          checkin: '2022-12-19',
          adults: '2',
          lang: 'en_US',
          currency: 'USD',
          nights: '2'
        },
        headers: {
          
          // 'X-RapidAPI-Key': '61f625c231msh512cfebd4c917bap1bade9jsnf4c01fdce162',
          // 'X-RapidAPI-Key': '35900f3b3amsh4f4c17f7fcaebf5p12196bjsn2e01d7415684',
          'X-RapidAPI-Key': '112c0a05a2mshf104b0a5fd70bd7p1178f0jsn8e70f7c68e7b',
          // 'X-RapidAPI-Key': '83573823ccmsh6f495c7827b0cd4p180bf0jsnb2b625cf365f',
          // 'X-RapidAPI-Key': '074ac1540bmsh8d5423168bc28d8p116791jsn8c44343c614c',
          // 'X-RapidAPI-Key': '316a36177bmsh3a1271d37149742p17c083jsn1e53aab2fc51',
          // 'X-RapidAPI-Key': '2e17186d71msh72bddb6221e1f71p1414a7jsn7540b28246ce',
          // 'X-RapidAPI-Key': '1a00ba1da5msh07ad2caac557c38p15f2d6jsn0fadb5583bbe',
          // 'X-RapidAPI-Key': '5ad772e295msh188afb289641bb2p1fd578jsn1fe9ae545306',
          // 'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };

      // useEffect(() => {
    
      //   async function getMyHotelsData () {
        
      //     const res = await axios.request(options); 
      //     setHotelData(res.data.data); 
      //     // console.log(res.data.data)
      //     console.log("Hotel Function called")
              
      //   }
    
      //   getMyHotelsData() ; 
        
    
      // }, []);

    return(
      <><h6>Hotel Data</h6>
      <h1>Location : {String(lctn_name)}</h1>
        
        <div className="w-full container">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ml-20 pl-5 pt-5"> 
          {DATA && DATA.map((element)=>{
                let temp = element.description;
                
                return <>
                  <div key={element.description}>
                      <Item 
                      title={element.name}
                      description={temp === null? "Please Click Read More": temp}
                      reviews = {element.num_reviews}
                      rating = {element.rating}
                      hotel_class = {element.hotel_class}
                      longitude = {element.longitude}
                      latitude={element.latitude}
                      ranking={element.ranking}
                      address = {element.address}
                      imageURL = {(element.hasOwnProperty('photo') && element.photo.images.medium.url)? element.photo.images.medium.url:"http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"}

                      // imageURL = "http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"
                      
                      hotelURL={element.web_url}
                      reviewURL={element.write_review}/>
                  </div>
                
                </>
          })}
        </div>
        </div>
        
        <div className="py-10 flex justify-between mx-16">
            <button className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900 text-2xl" >Previous</button>
            <button className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900 text-2xl" >Next</button>
        </div>
    </>
    );
}