//ISS API
updateCoordinates()
function updateCoordinates() {
    fetch("https://api.wheretheiss.at/v1/satellites/25544")
        .then((response) => response.json())
        .then((json) => {
            let long = json.longitude;
            let lat = json.latitude;
            $(".coordinates").text("The coordinates are: latitude "  + lat + " and longitude " + long);
            console.log(json)

            mapbox(long, lat);

        })
        .catch((error) => {
            $("#map").addClass(".error-image");
            console.log(error)
        });
}

setInterval(updateCoordinates,  60000 );

//ISS API


//MAPBOX API
function mapbox(long, latitude) {
    mapboxgl.accessToken = mapBoxKey;

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [long, latitude], // starting position [lng, lat]
        zoom: 1, // starting zoom (0 - 20)
    });

    const marker = new mapboxgl.Marker({})
        .setLngLat([long, latitude])
        .addTo(map);
}