function search(zipCode) {
    if (isValidUSZip(zipCode)) {
        getCoordinatesFromZipCode(zipCode)
        .then((coords) => {
            console.log(coords.lat + "," + coords.lon);
        });


    zipInputEl.value = '';            
    } else {
        zipInputEl.value = '';
        $("#test").addClass("is-active");
    }

    movies = getMovies(zipCode);
    return movies;
}

function isValidUSZip(zipCode){
    var postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
    return postalCodeRegex.test(zipCode);
}
