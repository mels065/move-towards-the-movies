var zipInputEl = document.querySelector('.input');

//var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
var zipCode = "";
var movies;
var mykey = API_key;
var fromDate = moment().format('YYYY-MM-DD');
//var apiUrl = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + fromDate + '&zip=' + zipCode + '&api_key=' + mykey;




$(document).ready(function(){


    function isValidUSZip(zipCode){
        var postalCodeRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
        return postalCodeRegex.test(zipCode);
    }



    // function getMovies(zipcode) {
    //     
    //     movieApiUrl = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + fromDate + '&zip=' + zipcode + '&api_key=' + mykey;
    //     fetch(movieApiUrl)
    //     .then(function (response) {
    //         data = response.json();
    // //        console.log(data);
    // //        return response.json();
    //         showMovies(data);
    // //        return data;
    //     });
    // }


    // var getMovies = function (zipcode) {
    //     var fromDate = moment().format('YYYY-MM-DD');
    //     movieApiUrl = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + fromDate + '&zip=' + zipcode + '&api_key=' + mykey;
      
    //     fetch(movieApiUrl)
    //       .then(function (response) {
    //         if (response.ok) {
    //           response.json().then(function (data) {
    //               return data;
    //            });
    //         } else {
    //           alert('Error: ' + response.statusText);
    //         }
    //       })
    //       .catch(function (error) {      
    //       alert('Unable to connect to OpenWeather');
    //       });
    //   };

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

    $('.button').on('click', formSubmitHandler);
    console.log(moment());
})

