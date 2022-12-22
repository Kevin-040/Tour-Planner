// import hotelDATA from '../../assets/HotelData.json';

export default function logic({hotelDATA}) {

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
    hotelDATA.data.map((element)=>{
        let d = calculateDistance(23.00316, 72.59885, Number(element.latitude), Number(element.longitude))
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
        hotelDATA.data.map((ele)=>{if(ele.location_id === element){obj.push(ele)}})
    })

    var top = []
    let min = 500
    obj.map((element)=>{
        if(element.ranking_position < min){
            min = element.ranking_position
        }
    })

    var topHotel = obj.filter(ranking => {return ranking.ranking_position === min})

  return topHotel;
}
