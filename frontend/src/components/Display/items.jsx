import React, { Component } from 'react'

export class Item extends Component {


  render() {
    let {title, description, imageURL, hotelURL} = this.props;
    
    let d = String(description).slice(0,100);

    return (
      <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-64 h-52" src={imageURL} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {String(description).length>100? String(d)+"...":d}
                    </p>
                </div>
                <div className="px-6 pt-2 pb-2">
                    <a className="px-2 pb-1 bg-gray-900 text-white rounded-xl border-2 border-slate-900 hover:bg-white hover:text-gray-900" href={hotelURL} target="_blank">Book</a>
                </div>
            </div>
      </div>
    )
  }
}

export default Item