function getCoordinatesFromZipCode(zipcode) {
    return fetch(generateApiCall(zipcode))
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Get latitude and longitude found in the center property.
            // The API call returns multiple features. Usually, the US will be the first
            // result (in index 0)
            var lon = data.features[0].center[0];
            var lat = data.features[0].center[1];
            // Assign the latitude and longitude to an object. I am using a shortcut
            // that lets you declare both the key and value in one statement if the key
            // will have the same name as the variable that contains the value.
            var coords = { lat, lon };
            return coords;
        });
}

// Since a promise is returned, chain with a `then` call.
getCoordinatesFromZipCode("48823")
    .then((coords) => {
        console.log(coords);
    });
