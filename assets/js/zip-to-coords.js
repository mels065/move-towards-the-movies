

function getCoordinatesFromZipCode(zipcode) {
    return fetch(generateApiCall(zipcode))
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var [lon, lat] = data.features[0].center;
            var coords = { lat, lon };
            return coords;
        });
}

// getCoordinatesFromZipCode(zip)
//     .then((coords) => {
//         console.log(coords);
//     });

