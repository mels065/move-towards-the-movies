var movieInputEl = document.querySelector('#info');
var result;
var movieName;

function getMovies(zipcode) {
    $("#info").show();
    var fromDate = moment().format('YYYY-MM-DD');
    movieApiUrl = 'https://data.tmsapi.com/v1.1/movies/showings?startDate=' + fromDate + '&zip=' + zipcode + '&api_key=' + mykey;
    return fetch(movieApiUrl)
    .then(function (response) {
        data = response.json();
        return data;
    })
    .then(function (data) {
        var movies = data;
        result = data;
        console.log(result);
        console.log(movies);
        showMovies(movies);
        return movies;
    });
}

var showMovies = function (input){
    var movies = input;
    for (var i=0; i < movies.length; i++) {
        console.log(movies[i].title);
        $("#"+i).html('<span class="movie-title tag is-info is-large">' + result[i].title + '</span>' + '<span class="movie-genres tag is-white normal">' + result[i].genres);
    }
};

var getMovieInfo = function (input){
    var i = parseInt(input,10);
    movieName = result[i].title;

    $("#movie-info").html('<span class="tag is-white is-large">' + result[i].title + '</span><br>' + 
        '<span class="tag is-white is-normal">' + "Genres: " + result[i].genres + '</span></br>' +
        '<span class="tag is-white is-normal">' + "Director(s): " + result[i].directors + '</span></br>' +
        '<span class="tag is-white is-normal">' + "Cast: " + result[i].topCast + '</span></br>' +
        '<span class="tag is-white is-normal">' + '<a href=' + result[i].officialUrl + ' target="_blank">visit official movie page</a></span></br>' +
        '<span class="content is-normal">' + "Description: " + result[i].longDescription + '</span>');
    $("#movie-info").append('<h3 class="showtimes-header">Showtimes</h3>');
    $("#movie-info").append(getShowtimeListElement(result[i]));
    $("#movie-modal").addClass("is-active");
    
};


$(".movie").on('click', function(){
    var movie = $(this).attr('id');
    console.log(movie, result);
    getMovieInfo(movie);
    goGetTheMovieID(movieName);
})