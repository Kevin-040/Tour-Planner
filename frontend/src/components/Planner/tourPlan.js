import React from 'react'
import Item from './planCard'
import hotelDATA from '../../assets/HotelData.json';
import RestauranTDATA from '../../assets/RestaurantData.json'
import AttractionDATA from '../../assets/AttractionData.json'

import { useLocation } from 'react-router-dom';

export default function TourPlan() {
    const startdate = useLocation().state.startdate;
    const enddate = useLocation().state.enddate;

    // Getting Days array
    function getDaysArray(start, end) {
        for(var arr=[],dt=new Date(start); dt<=new Date(end); dt.setDate(dt.getDate()+1)){
            arr.push(new Date(dt));
        }
        return arr;
    };
    let DateArr = getDaysArray(new Date(String(startdate)),new Date(String(enddate)))

    // Filtering Attraction Data
    var attr = AttractionDATA.data.sort((a, b) => {
        if (Number(a.ranking_position) < Number(b.ranking_position)) {
          return -1;
        }
      });

    console.log(attr)

   
    // console.log("Hotel",topHotel);
    // console.log("Restaurant",topRestaurant);

    function logic(attrLT, attrLG, DATA) {

        function calculateDistance(lattitude1, longittude1, lattitude2, longittude2)
        {
    
            const toRadian = n => (n * Math.PI) / 180
    
            let lat2 = lattitude2
            let lon2 = longittude2
            let lat1 = lattitude1
            let lon1 = longittude1
    
            // console.log(lat1, lon1 + "===" + lat2, lon2)
            let R = 6371  // km
            let x1 = lat2 - lat1
            let dLat = toRadian(x1)
            let x2 = lon2 - lon1
            let dLon = toRadian(x2)
            let a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(toRadian(lat1)) * Math.cos(toRadian(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
            let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            let d = R * c
            // console.log("distance==?", d)
            return d
        }
        var hotelDistance = {}
        DATA.data.map((element)=>{
            let d = calculateDistance(Number(attrLT), Number(attrLG), Number(element.latitude), Number(element.longitude))
            if(!isNaN(d)){
                hotelDistance[element.location_id] = d;
            }
        });
    
        // Step - 1
        // Create the array of key-value pairs
        var items = Object.keys(hotelDistance).map(
        (key) => { return [key, hotelDistance[key]] });
    
        // Step - 2
        // Sort the array based on the second element (i.e. the value)
        items.sort(
        (first, second) => { return first[1] - second[1] }
        );
      
        // Step - 3
        // Obtain the list of keys in sorted order of the values.
        var keys = items.map(
        (e) => { return e[0] });
    
        var obj = []
        keys.slice(0,5).map((element)=>{
            DATA.data.map((ele)=>{if(ele.location_id === element){obj.push(ele)}})
        })
    
        let min = 500
        obj.map((element)=>{
            if(element.ranking_position < min){
                min = element.ranking_position
            }
        })
    
        var topHotel = obj.filter(ranking => {return ranking.ranking_position === min})
    
      return topHotel;
    }
    
    let i = 0;
    let day = 1;
  return (
      <>
      <ul>
          {
              DateArr.map((element)=>{
                let lt = attr[i].latitude
                let lg = attr[i].longitude
                let A_title = attr[i].title
                let A_reviews = attr[i].num_reviews
                let A_rating = attr[i].rating
                let A_ranking_subcategory = attr[i].ranking_subcategory
                let A_address = attr[i].address
                let A_subcategory = (attr[i].hasOwnProperty('subcategory') && attr[i].subcategory[0].name)? attr[i].subcategory[0].name:"Undefined"
                let A_imagurl = (attr[i].hasOwnProperty('photo') && attr[i].photo.images.medium.url)? attr[i].photo.images.medium.url:"http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"


                var topHotel = logic(lt,lg,hotelDATA)
                var topRestaurant = logic(lt,lg,RestauranTDATA)

                // console.log(topHotel)
                i++;
                  return(
                     <><Item
                     DayNum = {day++}
                     HotelTitle= {topHotel[0].name}
                     HotelDescription={topHotel[0].description}
                     HotelReviews = {topHotel[0].num_reviews}
                     HotelRating = {topHotel[0].rating}
                     HotelLongitude = {topHotel[0].longitude}
                     HotelLatitude={topHotel[0].latitude}
                     HotelAddress = {topHotel[0].address}
                     HotelImageURL = {(topHotel[0].photo.images.medium.url)? topHotel[0].photo.images.medium.url:"http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"}                   
                     HotelURL={topHotel[0].web_url}
                     HotelReviewURL={topHotel[0].write_review}
                     
                    AttractionTitle={A_title}
                    AttractionReviews = {A_reviews}
                    AttractionRating = {A_rating}
                    AttractionLongitude = {lg}
                    AttractionLatitude={lt}
                    Attraction_ranking_subcategory={A_ranking_subcategory}
                    AttractionAddress = {A_address}
                    AttractionImageUrl = {A_imagurl}

                    RestaurantTitle= {topRestaurant[0].name}
                    RestaurantDescription={topRestaurant[0].description}
                    RestaurantReviews = {topRestaurant[0].num_reviews}
                    RestaurantRating = {topRestaurant[0].rating}
                    RestaurantLongitude = {topRestaurant[0].longitude}
                    RestaurantLatitude={topRestaurant[0].latitude}
                    RestaurantAddress = {topRestaurant[0].address}
                    RestaurantImageURL = {(topRestaurant[0].photo.images.medium.url)? topRestaurant[0].photo.images.medium.url:"http://fremontgurdwara.org/wp-content/uploads/2020/06/no-image-icon-2-450x281.png"}                   
                    RestaurantURL={topRestaurant[0].web_url}
                    RestaurantReviewURL={topRestaurant[0].write_review}
                     >
                        

                    
                     </Item>
                     </> 
                  )
                    
              })

          }
      </ul>
      
      </> )
}

