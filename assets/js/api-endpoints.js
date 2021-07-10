MAPBOX_API_KEY = "pk.eyJ1IjoibWVsbHVzYnJhbmRvbiIsImEiOiJja3FzcXQ0bG4ycWFrMm9tdmN3bmNxZHd3In0.zp0RMIIVSgMBMW_E-JycrQ";
MAPBOX_ENPOINT = "https://api.mapbox.com/geocoding/v5/mapbox.places";
MAPBOX_PARAMS = `types=postcode&access_token=${MAPBOX_API_KEY}`;

TMS_API_KEY = "szypphu7z3nfwr9f5bu824pw";
TMS_ENDPOINT = 'http://data.tmsapi.com/v1.1/movies/showings?';
TMS_PARAMS = 'startDate=${fromDate}';


function generateApiCall(zipcode) {
    return `${MAPBOX_ENPOINT}/${zipcode}.json?${MAPBOX_PARAMS}`;
}

function movieApiCall(zipcode) {
    return 'http://data.tmsapi.com/v1.1/movies/showings?startDate=$' + fromDate + '&zip=' + zipcode + '&api_key=szypphu7z3nfwr9f5bu824pw';
}