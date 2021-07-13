var zipInputEl = document.querySelector('.input');

var zipCode = "";
var movies;
// Note: The API only gets 50 calls a day, so we plan to use each other's keys once
// the limit has been reached
// var mykey = 'szypphu7z3nfwr9f5bu824pw'; // Amir's key
var mykey = 'ze6zqv5jzg3xnsfpdw3fsgeg'; // Brandon's key
var fromDate = moment().format('YYYY-MM-DD');




$(document).ready(function(){
    getSearchHistory(search);

    var formSubmitHandler = function (event) {
        event.preventDefault();
        zipCode = String(zipInputEl.value.trim());
        search(zipCode)
            .then((movies) => {
                // If movies data exists, add zipcode to search history
                if (movies) {
                    addSearchHistory(zipCode, search);
                }
            })
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

