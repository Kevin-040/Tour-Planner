import React, { Component } from 'react'
import { Link
 } from 'react-router-dom';
export class Item extends Component {


  render() {
    let {DayNum, HotelTitle, HotelDescription, HotelURL, HotelImageURL, HotelReviews, HotelReviewURL, HotelLatitude, HotelLongitude, HotelAddress, AttractionAddress, Attraction_ranking_subcategory, AttractionLatitude, AttractionLongitude, AttractionRating, AttractionReviews, AttractionTitle,AttractionImageUrl, RestaurantReviewURL, RestaurantURL, RestaurantImageURL, RestaurantAddress, RestaurantLatitude, RestaurantLongitude, RestaurantRating, RestaurantReviews, RestaurantDescription, RestaurantTitle, dayDate } = this.props;
    
    let d = String(HotelDescription).slice(0,130);
    let a = String(AttractionAddress).slice(0,100);
    let rd = String(RestaurantDescription).slice(0,130);
    let hd = String(HotelDescription).slice(0,130);

    return (<>
        <br/>
        <div className='flex items-center justify-center'>

            <div className=" max-w-fit max-h-fit rounded-lg shadow-md lg:flex  shadow-slate-500 bg-slate-100">
                <div className='flex justify-center items-center'>
                    <div className='text-center text-black font-bold text-xl pl-5'>Day {DayNum}</div>
                    {/* <div className='text-center text-black font-bold text-xl pl-5'>{dayDate}</div> */}
                </div>
                
                {/* Hotel Display */}
                <div className="p-10 grid grid-cols-3 gap-10" >
                    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
                        <img className="w-full" src={HotelImageURL} alt="Mountain" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{HotelTitle}</div>
                            <p className="text-gray-700 text-base">
                                {String(HotelDescription).length > 130 ? String(hd) + "..." : hd}
                            </p>
                            
                            <p className="text-gray-700 text-base">
                                <strong>Reviews: </strong>{HotelReviews}
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>Rating: </strong>5.000
                            </p>
                            <p className="text-gray-700 text-base">
                                <strong>#40</strong>
                            </p>
                            <br />
                            <p className="text-gray-700 text-base">
                                <strong>Address: </strong>{HotelAddress}
                            </p>
                        </div>
                        <div className="px-6 pt-2 pb-2 mb-3 flex justify-between">
                            <a className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-zinc-900 " href={HotelURL} target="_blank">Book</a>
                            <a className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900" href={HotelReviewURL} target="_blank">Review</a>
                            <Link
                                to="/map"
                                state={{ lat: HotelLatitude, lng: HotelLongitude }} className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900">ViewOnMap</Link>

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
                            <br/>
                            <p className="text-gray-700 text-base">
                                <strong>Address: </strong>{RestaurantAddress}
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