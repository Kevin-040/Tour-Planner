import React from "react"
import { useState,useEffect } from "react";
import axios from "axios";
import Item from './restCard'
import { useLocation } from "react-router-dom";
import restData from "../../assets/RestaurantData.json";

export default function Restaurant(props){

    const location_id = useLocation().state.locationID;
    const [restaurantData, setRestaurantData] = useState([])

    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/restaurants/list',
        params: {
            location_id: location_id,
            lunit: 'km',
            limit: '30',
            lang: 'en_US'
        },
        headers: {
          // 'X-RapidAPI-Key': '61f625c231msh512cfebd4c917bap1bade9jsnf4c01fdce162',
          'X-RapidAPI-Key': '83573823ccmsh6f495c7827b0cd4p180bf0jsnb2b625cf365f',
          // 'X-RapidAPI-Key': '316a36177bmsh3a1271d37149742p17c083jsn1e53aab2fc51',
          // 'X-RapidAPI-Key': '2e17186d71msh72bddb6221e1f71p1414a7jsn7540b28246ce',
          // 'X-RapidAPI-Key': '1a00ba1da5msh07ad2caac557c38p15f2d6jsn0fadb5583bbe',
          // 'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      };

    //   useEffect(() => {
    
    //     async function getRestaurantsData () {
        
    //       const res = await axios.request(options); 
    //       setRestaurantData(res.data.data); 
    //       console.log(res.data.data)
    //       console.log("Restaurant Function Called")
              
    //     }
    
    //     getRestaurantsData() ; 
        
    
    //   }, []);

    return(
      <>
        <div className="w-full container">
        <div className="grid grid-cols-1  sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 pt-5"> 
          {restData.data && restData.data.map((element)=>{
                let temp = element.address;
                // console.log(element.photo.images.medium.url)
                
                return <>
                  <div key={element.location_id}>
                      <Item 
                      title={element.name}
                      description={temp === null? "Please Click Read More": temp}
                      reviews = {element.num_reviews}
                      rating = {element.rating}
                      longitude = {element.longitude}
                      latitude={element.latitude}
                      imageURL = {(element.hasOwnProperty('photo') && element.photo.images.medium.url)? element.photo.images.medium.url:"http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"}

                      // imageURL = "http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"
                      
                      hotelURL={(element.hasOwnProperty('web_url') && element.web_url)? element.web_url:"http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"}
                      reviewURL={(element.hasOwnProperty('write_review') && element.write_review)? element.write_review:"http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"}


                      />
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
