let theatres = [];

function getTheatres(movies) {
    theatres = [];
    movies.forEach((movie) => {
        movie.showtimes.forEach(({ theatre }) => {
            if (!theatreIdExists(theatre.id)) theatres.push(theatre)
        })
    })
}

// Helper function to check if a theater already exists in the `theatres` array
function theatreIdExists(id) {
    return theatres.some((theatre) => theatre.id === id)
}
