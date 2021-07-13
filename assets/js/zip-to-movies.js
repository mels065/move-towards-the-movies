var movieInputEl = document.querySelector('#info');
var result;

function getMovies(zipcode) {
    var fromDate = moment().format('YYYY-MM-DD');
    movieApiUrl = 'http://data.tmsapi.com/v1.1/movies/showings?startDate=' + fromDate + '&zip=' + zipcode + '&api_key=' + mykey;
    return fetch(movieApiUrl)
    .then(function (response) {
        data = response.json();
        return data;
    })
    .then(function (data) {
        var movies = data;
        result = data;
        console.log(movies);

        showMovies(movies);
    });
}

var showMovies = function (input){
    var movies = input;
//    console.log(movies);
    for (var i=0; i < movies.length; i++) {
        console.log(movies[i].title);

        $("#"+i).html('<span class="tag is-info is-large">' + result[i].title + '</span>' + '<span class="tag is-white normal">' + result[i].genres);
    }
};

var getMovieInfo = function (input){
    var i = parseInt(input,10);
    console.log(i);

//    $("#movie-info").html(result[i].title + result[i].genres);
    $("#movie-info").html('<span class="tag is-white is-large">' + result[i].title + '</span><br>' + 
        '<span class="tag is-white is-normal">' + "Genres: " + result[i].genres + '</span></br>' +
        '<span class="tag is-white is-normal">' + "Director(s): " + result[i].directors + '</span></br>' +
        '<span class="tag is-white is-normal">' + "Cast: " + result[i].topCast + '</span></br>' +
        '<span class="tag is-white is-normal">' + '<a href=' + result[i].officialUrl + ' target="_blank">visit official movie page</a></span></br>' +
        '<span class="content is-normal">' + "Description: " + result[i].longDescription + '</span>');
    $("#movie-modal").addClass("is-active");
};


$(".box").on('click', function(){
//    cityInputEl.value = $('#M1').text();
    var movie = $(this).attr('id');
    console.log(movie, result);
    getMovieInfo(movie);
})

