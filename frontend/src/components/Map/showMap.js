import {
    useJsApiLoader,
    GoogleMap,
    MarkerF,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
import { useRef, useState } from 'react'
import { useLocation} from 'react-router-dom'


export default function showMap(){

    const latVal = useLocation().state.lat;
    const lngVal = useLocation().state.lng;

    const center = { lat: Number(latVal), lng: Number(lngVal) }

    // var icon = {
    //     url: "https://assets.hongkiat.com/uploads/nature-photography/nature-photography-mountain-sky.jpg", // url
    //     scaledSize: new google.maps.Size(15, 15), // size
    //     origin: new google.maps.Point(latVal,lngVal), // origin
    //     anchor: new google.maps.Point(anchor_left, anchor_top) // anchor 
    // };

    let iconMarker = new window.google.maps.MarkerImage(
        "https://assets.hongkiat.com/uploads/nature-photography/nature-photography-mountain-sky.jpg",
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new window.google.maps.Size(32, 32)
    );

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
      })
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))

    if (!isLoaded) {
    return <div>Loading</div>
    }


    return(
        <><GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
                zoomControl: true,
                streetViewControl: true,
                mapTypeControl: true,
                fullscreenControl: true,
            }}
            onLoad={map => setMap(map)}
        >
            <MarkerF 
                key="marker_1"
                position={{
                lat: Number(latVal),
                lng: Number(lngVal)
                }}
                icon={{
                    url: 'https://assets.hongkiat.com/uploads/nature-photography/nature-photography-mountain-sky.jpg',
                    scaledSize: { width: 32, height: 32 }
                }}
        //   icon={iconMarker}
        //   onClick={onClick}
            />
            
            {/* <MarkerF key="marker_1"

                icon={{
                url: 'https://cdn.mindbowser.com/custom_marker_pin.svg',
                anchor: new google.maps.Point(17, 46),
                scaledSize: new google.maps.Size(37, 37)
                }}

                position={{
                lat: Number(latVal),
                lng: Number(lngVal)
                }}

            /> */}

            {/* {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
            )} */}
        </GoogleMap>
        </>
    )
}