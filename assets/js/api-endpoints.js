/* MAPBOX API */
// Mapbox API Key
const MAPBOX_API_KEY = "pk.eyJ1IjoibWVsbHVzYnJhbmRvbiIsImEiOiJja3FzcXQ0bG4ycWFrMm9tdmN3bmNxZHd3In0.zp0RMIIVSgMBMW_E-JycrQ";
// The endpoint used for fetching data from geocoding
const MAPBOX_ENPOINT = "https://api.mapbox.com/geocoding/v5/mapbox.places";
// Sets the API call to use postcodes for retrieving data from geocoding
const MAPBOX_PARAMS = `types=postcode&access_token=${MAPBOX_API_KEY}`;

/* FANDANGO API */
const FANDANGO_API_KEY = "zkdcp444m83kn38rw355zrdw";
const FANDANGO_SECRET = "7UmN5cmasY";
const FANDANGO_ENDPOINT = "https://api.fandango.com/v1"
const FANDANGO_PARAMS = `?&apikey=${FANDANGO_API_KEY}`

// Generates the full URL for the API call
function generateMapBoxApiCall(zipcode) {
    return `${MAPBOX_ENPOINT}/${zipcode}.json?${MAPBOX_PARAMS}`;
}

function generateFandangoSig() {
    // Used this line of code
    // https://developer.fandango.com/API__Sample_Code_nodejs
    const seconds = Math.floor(new Date() / 1000);
    const hash = CryptoJS.SHA256(`${FANDANGO_API_KEY}${FANDANGO_SECRET}${seconds}`);
    return hash.toString(CryptoJS.enc.Hex);
}

console.log(generateFandangoSig());
