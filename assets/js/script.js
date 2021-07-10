var zipInputEl = document.querySelector('.input');

var zipCode = "";
var movies;
var mykey = 'szypphu7z3nfwr9f5bu824pw';
var fromDate = moment().format('YYYY-MM-DD');




$(document).ready(function(){


    function isValidUSZip(zipCode){
        var postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
        return postalCodeRegex.test(zipCode);
    }

    var formSubmitHandler = function (event) {
        event.preventDefault();
//        var movies;
        zipCode = String(zipInputEl.value.trim());
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
    //      console.log("returned",movies);
    //  showMovies(movies);
      };

    $(".modal-close").click(function() {
        console.log("close");
        $(".modal").removeClass("is-active");
    });

    // cancel button doesn't clear modal is-active
    $("#cancel-button").click(function() {
            console.log("cancel");
            zipInputEl.value ="48098";
//            $("#test").removeClass("is-active");
            $(this).parents(".modal").removeClass("is-active");
        });

    $('#SearchBttn').on('click', formSubmitHandler);
//    console.log(moment());
})

