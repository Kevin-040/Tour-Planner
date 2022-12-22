import React, { Component } from 'react'
import { Link
 } from 'react-router-dom';
export class Item extends Component {


  render() {
    let {DayNum, HotelTitle ,Daydate, HotelDescription, HotelURL, HotelImageURL, HotelReviews, HotelReviewURL, HotelLatitude, HotelLongitude, HotelAddress, AttractionAddress, Attraction_ranking_subcategory, AttractionLatitude, AttractionLongitude, AttractionRating, AttractionReviews, AttractionTitle,AttractionImageUrl, RestaurantReviewURL, RestaurantURL, RestaurantImageURL, RestaurantAddress, RestaurantLatitude, RestaurantLongitude, RestaurantRating, RestaurantReviews, RestaurantDescription, RestaurantTitle,  } = this.props;
    
    let d = String(HotelDescription).slice(0,130);
    let a = String(AttractionAddress).slice(0,100);
    let rd = String(RestaurantDescription).slice(0,130);

    return (<>
        <br/>
        <div className='flex items-center justify-center'>

            <div className=" max-w-fit max-h-fit rounded-lg shadow-md lg:flex  shadow-slate-500 bg-slate-100">
                <div className='flex justify-center items-center'>
                    <div className='text-center text-black font-bold text-xl pl-5'>Day {DayNum}</div>
                    <div className='text-center text-black font-bold text-xl pl-5'>Day {Daydate}</div>
                </div>
                
                <div className="p-10 grid grid-cols-3 gap-10" >
                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                        <img className="w-full" src={HotelImageURL} alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className='flex item-center justify-center'>
                                <div className="font-bold text-xl mb-2 items-center">{HotelTitle}</div>
                            </div>
                            <p className="text-gray-700 text-base">
                            {String(HotelDescription).length>130? String(d)+"...":d}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                        <a className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900" href={HotelURL} target="_blank">Book</a>
                            <div className='inline-block pl-7'>
                                <svg className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                <p className="ml-2 text-sm font-bold inline-block text-gray-900 dark:text-black">4.95</p>
                                <span className="w-1 h-1 mx-1.5 inline-block bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                <p className="text-gray-700 text-base">
                        <strong>Reviews: </strong>{HotelReviews}
                    </p>
                            </div>
                        </div>
                    </div>


                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                        <img className="w-full" src={AttractionImageUrl} />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{AttractionTitle}</div>
                            
                            <p className="text-gray-700 text-base">
                                <strong>Reviews: </strong>{AttractionReviews}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Rating: </strong>{AttractionRating}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>{Attraction_ranking_subcategory}</strong>
                            </p>
                            <br />
                            <p className="text-gray-700 text-base">
                                <strong>Address: </strong>{String(AttractionAddress).length > 100 ? String(a) + "..." : a}
                            </p>
                        </div>
                        <div className="px-6 pt-2 pb-2 mb-3 flex justify-between">
                            
                            <Link
                                to="/map"
                                state={{ lat: AttractionLatitude, lng: AttractionLongitude }} className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900">ViewOnMap</Link>

                        </div>
                    </div>
                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                        <img className="w-full" src={RestaurantImageURL} alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{RestaurantTitle}</div>
                            <p className="text-gray-700 text-base">
                                {String(RestaurantDescription).length > 100 ? String(rd) + "..." : rd}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Reviews: </strong>{RestaurantReviews}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Rating: </strong>{RestaurantRating}
                            </p>
                        </div>
                        <div className="px-6 pt-2 pb-2 mb-3 flex justify-between">
                            <a className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-zinc-900 " href={RestaurantURL} target="_blank">Book</a>
                            <a className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900" href={RestaurantReviewURL} target="_blank">Review</a>
                            <Link
                                to="/map"
                                state={{ lat: RestaurantLatitude, lng: RestaurantLongitude }} className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900">ViewOnMap</Link>

                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
  }
}

export default Item