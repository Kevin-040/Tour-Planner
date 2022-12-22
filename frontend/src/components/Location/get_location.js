import React, { useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation} from 'react-router-dom'

export default function Location() {
  const place = useLocation().state.place;
  const startdate = useLocation().state.startdate;
  const enddate = useLocation().state.enddate;

  const [locationData, setlocationData] = useState([]); 

  // console.log("Place: ",place)
  // console.log("start:",startdate, " end:",enddate)
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    params: {query: place , lang: 'en_US', units: 'km'},
    headers: {
      // 'X-RapidAPI-Key': '83573823ccmsh6f495c7827b0cd4p180bf0jsnb2b625cf365f',
      // 'X-RapidAPI-Key': '35900f3b3amsh4f4c17f7fcaebf5p12196bjsn2e01d7415684',
      'X-RapidAPI-Key': '1a00ba1da5msh07ad2caac557c38p15f2d6jsn0fadb5583bbe',
      // 'X-RapidAPI-Key': '316a36177bmsh3a1271d37149742p17c083jsn1e53aab2fc51',
      // 'X-RapidAPI-Key': '61f625c231msh512cfebd4c917bap1bade9jsnf4c01fdce162',
      // 'X-RapidAPI-Key': '2e17186d71msh72bddb6221e1f71p1414a7jsn7540b28246ce',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

  useEffect(() => {
    
    async function getMyLocationData () {
    
      const res = await axios.request(options)
      setlocationData(res.data.data.Typeahead_autocomplete.results);    
      console.log("Location Function called")
      // console.log(res.data.data.Typeahead_autocomplete.results)

    
    }

    getMyLocationData() ; 

    // axios.request(options).then(function (response) {
    //     console.log(response.data);
    //   }).catch(function (error) {
    //     console.error(error);
    //   })

    // let url = "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete"

    // fetch(url, options).then(res => res.json()).then(res => console.log(res)).catch(err => console.log("err", err))
    

  });
 
 

  return (
    
    <>
          <h6>Location Data</h6>
            
          <ul>
              {
                locationData.slice(0, 5).map((element) => {
                  if(element.detailsV2.isGeo){
                  return(<>
                  {/* <div className='card text-center'> */}
                   


               <div className='flex items-center justify-center'>
                  <div className=" max-w-fit rounded-lg shadow-md lg:flex  shadow-sky-600 bg-slate-100">

                      <div class="px-6 py-4">
                          <h4 class="mb-3 text-base font-semibold tracking-tight text-sky-600  text-center">
                            <span><strong>name:</strong> {element.detailsV2.names.name} </span>
                            <span><strong>location_id:</strong> {element.detailsV2.locationId}</span><hr/>
                            <span><strong>latitude:</strong> {element.detailsV2.geocode.latitude}</span>
                            <span><strong>  longitude:</strong> {element.detailsV2.geocode.longitude} </span><hr/>
                          </h4>
                          <div class="px-6 py-4 flex space-x-7 justify-center">
                            <Link
                            to="/map"
                            state={{ lat: element.detailsV2.geocode.latitude, lng: element.detailsV2.geocode.longitude }}
                              class="
                                inline-grid
                                px-4
                                py-2
                                text-sm
                                shadow
                                bg-sky-100
                                shadow-sky-600
                                text-sky-700
                                hover:bg-sky-600 hover:text-sky-100">
                              ViewOnMap
                            </Link>
                            <Link
                            to="/dest"
                            state={{ locationID: element.detailsV2.locationId}}
                              class="
                                inline-grid
                                pl-4
                                px-4
                                py-2
                                text-sm
                                shadow
                                bg-sky-100
                                shadow-sky-600
                                text-sky-700
                                hover:bg-sky-600 hover:text-sky-100">
                              Attractions
                            </Link>
                            <Link
                            to="/hotel"
                            state={{ locationID: element.detailsV2.locationId, locationName: element.detailsV2.names.name}}
                              class="
                                inline-grid
                                pl-4
                                px-4
                                py-2
                                text-sm
                                shadow
                                bg-sky-100
                                shadow-sky-600
                                text-sky-700
                                hover:bg-sky-600 hover:text-sky-100">
                              Hotels
                            </Link>
                            <Link
                            to="/rest"
                            state={{ locationID: element.detailsV2.locationId}}
                              class="
                                inline-grid
                                pl-4
                                px-4
                                py-2
                                text-sm
                                shadow
                                bg-sky-100
                                shadow-sky-600
                                text-sky-700
                                hover:bg-sky-600 hover:text-sky-100">
                              Restaurants
                            </Link>
                            <Link
                            to="/plan"
                            state={{ startdate: startdate, enddate: enddate}}
                              class="
                                inline-grid
                                pl-4
                                px-4
                                py-2
                                text-sm
                                shadow
                                bg-sky-100
                                shadow-sky-600
                                text-sky-700
                                hover:bg-sky-600 hover:text-sky-100">
                              Plan Tour
                            </Link>
                          </div>
                    </div>
            </div>
    </div>
    </>)}
    })
              }
            </ul>
            
        </>
    
      );
}



// Old Code
{/* <div className="card-body">
                   <h5 className="card-title"> <span><strong>name:</strong> {element.detailsV2.names.name} </span>
                    <span><strong>location_id:</strong> {element.detailsV2.locationId}</span><hr/>
                    <span><strong>latitude:</strong> {element.detailsV2.geocode.latitude}</span>
                    <span><strong>  longitude:</strong> {element.detailsV2.geocode.longitude} </span><hr/></h5>
       
        
                    <Link to="/map" state={{ lat: element.detailsV2.geocode.latitude, lng: element.detailsV2.geocode.longitude }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded mt-2">
                    ViewOnMap
                    </Link>
           
                    <Link to="/dest" state={{ locationID: element.detailsV2.locationId}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded mt-2">
                    Attractions
                    </Link>
    
                    <Link to="/hotel" state={{ locationID: element.detailsV2.locationId}} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-700 rounded mt-2">
                    Hotels
                    </Link>
      
               </div> */}