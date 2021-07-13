pictureAPIKey = "0770e5a54ad84dcdbe7ac0a038a24e16";

function goGetTheMovieID(movieName) {
    // console.log(moviePicture);
    var movieIDURL = "https://api.themoviedb.org/3/search/movie?api_key=" + pictureAPIKey + "&query=" + movieName;
    
    fetch(movieIDURL)
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
            console.log(data);
            if (data.total_pages == "0"){
            
            getRidOfPicture();
            } else {
            movieID = data.results[0].id;
            goGetThePicture(movieID);
            }
           


})
}

function getRidOfPicture() {
    $("p").empty();
}

function goGetThePicture(movieID) {
    var moviePictureURL =  "https://api.themoviedb.org/3/movie/" + movieID + "/images?api_key=" + pictureAPIKey;

    fetch(moviePictureURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        if (data.backdrops.length == "0"){
            picturePath = data.posters[0].file_path;
            renderPicture(picturePath);
        } else {
        picturePath = data.backdrops[0].file_path;
        console.log(picturePath);
        renderPicture(picturePath);
        }
    })


}

function renderPicture(picturePath) {
    var picture = "https://image.tmdb.org/t/p/w500" + picturePath;
    console.log(picture);

    $("p").html("<img src=" + picture + ">");
}
