import {
    useJsApiLoader,
    GoogleMap,
    MarkerF,
    Autocomplete,
    DirectionsRenderer,
  } from '@react-google-maps/api'
import { useRef, useState } from 'react'
import { useLocation, useParams} from 'react-router-dom'


export default function ViewMap(props){

    const {type} = useParams();
    const latVal = useLocation().state.lat;
    const lngVal = useLocation().state.lng;

    // const center = { lat: 48.8584, lng: 2.2945 }
    const center = { lat: Number(latVal), lng: Number(lngVal) }

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries: ['places'],
      })
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))

    if (!isLoaded) {
    return <div>Loading</div>
    }


    return(
        <><div>{latVal} and {lngVal}</div>
         <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
        //   options={{
        //     zoomControl: false,
        //     streetViewControl: false,
        //     mapTypeControl: false,
        //     fullscreenControl: false,
        //   }}
          onLoad={map => setMap(map)}
        >
          <MarkerF key="marker_1"
            position={{
              lat: Number(latVal),
              lng: Number(lngVal)
          }}
          />
          {/* <Marker key="marker_1"

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