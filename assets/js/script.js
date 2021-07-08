var zipInputEl = document.querySelector('.input');

//var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
var zipCode = "";




$(document).ready(function(){

    function isValidUSZip(zipCode){
        var postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
        return postalCodeRegex.test(zipCode);
    }

    var formSubmitHandler = function (event) {
        event.preventDefault();
        zipCode = String(zipInputEl.value.trim());
        if (isValidUSZip(zipCode)) {
                getCoordinatesFromZipCode(zipCode)
                .then((coords) => {
                    console.log(coords.lat + "," + coords.lon);
                });
            console.log(zipCode);
            zipInputEl.value = '';            
        } else {
            alert('Please input 5 digit zip code');
        }
      };

    $('.button').on('click', formSubmitHandler);
})