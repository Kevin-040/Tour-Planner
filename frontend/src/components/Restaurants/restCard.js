import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Item extends Component {


  render() {
    let {title, description, imageURL, hotelURL, reviews, rating, reviewURL, latitude, longitude} = this.props;
    
    let d = String(description).slice(0,100);

    return (
      <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className=" h-52 w-full" src={imageURL} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {String(description).length>100? String(d)+"...":d}
                    </p>
                    <p className="text-gray-700 text-base">
                        <strong>Reviews: </strong>{reviews}
                    </p>
                    <p className="text-gray-700 text-base">
                        <strong>Rating: </strong>{rating}
                    </p>
                </div>
                <div className="px-6 pt-2 pb-2 mb-3 flex justify-between">
                    <a className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-zinc-900 " href={hotelURL} target="_blank">Book</a>
                    <a className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900" href={reviewURL} target="_blank">Review</a>
                    <Link
                            to="/map"
                            state={{ lat: latitude, lng: longitude }} className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900">ViewOnMap</Link>

                </div>
            </div>
      </div>
    )
  }
}

export default Item