var zipInputEl = document.querySelector('.input');

//var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
var zipCode = "";
var movies;
var mykey = API_key;
var fromDate = moment().format('YYYY-MM-DD');
//var apiUrl = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + fromDate + '&zip=' + zipCode + '&api_key=' + mykey;

// an array to store zip codes previously checked
var zipArray = [];
zipArray.length = 10;


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
                saveZip(zipCode);
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


    var removeZipDuplicates = function(input){
        if (zipArray.length > 0){
          const index = zipArray.indexOf(input);
          if (index > -1) {
            zipArray.splice(index, 1);
          }
        }
        // push new entery to begining of array
        zipArray.unshift(input);
        return;
    };

    var displayMemory = function () {
        for (var i = 0; i < zipArray.length; i++){
            if(zipArray[i]){
                console.log("id=",i.toString());
                $("#memory").after("<div>").attr('id', 'M'+i.toString());
                $('#M'+i.toString()).html('<span class="tag is-blue is-medium">' + zipArray[i] + '</span>');
            }
        }
        // $('#memory').html('<span class="tag is-blue is-medium">' + zipArray[0] + '</span><br>' +
        //                 '<span class="tag is-blue is-medium">' + zipArray[1] + '</span><br>' +
        //                 '<span class="tag is-blue is-medium">' + zipArray[2] + '</span><br>' +
        //                 '<span class="tag is-blue is-medium">' + zipArray[3] + '</span><br>' +
        //                 '<span class="tag is-blue is-medium">' + zipArray[4] + '</span><br>' +
        //                 '<span class="tag is-blue is-medium">' + zipArray[5] + '</span><br>' +
        //                 '<span class="tag is-blue is-medium">' + zipArray[6] + '</span><br>' +
        //                 '<span class="tag is-blue is-medium">' + zipArray[7] + '</span><br>' +
        //                 '<span class="tag is-blue is-medium">' + zipArray[8] + '</span><br>' +
        //                 '<span class="tag is-blue is-medium">' + zipArray[9] + '</span>');

        return;
    };

    var saveZip = function (input) {
        removeZipDuplicates(input);
        for (var i = 0; i < 8; i ++){
            localStorage.setItem(i, zipArray[i]);
        }
        displayMemory();
        console.log(zipArray);
        return;
    };

    // $("#memory").on("click", function(){
    //     var zipcode = $(this).text();
    //     getMovies(zipcode);
    //   })
})

