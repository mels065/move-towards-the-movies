MAPBOX_API_KEY = "pk.eyJ1IjoibWVsbHVzYnJhbmRvbiIsImEiOiJja3FzcXQ0bG4ycWFrMm9tdmN3bmNxZHd3In0.zp0RMIIVSgMBMW_E-JycrQ";
MAPBOX_ENPOINT = "https://api.mapbox.com/geocoding/v5/mapbox.places";
MAPBOX_PARAMS = `types=postcode&access_token=${MAPBOX_API_KEY}`;

function generateApiCall(zipcode) {
    return `${MAPBOX_ENPOINT}/${zipcode}.json?${MAPBOX_PARAMS}`;
}

console.log(generateApiCall(48823));
