function getShowtimeListElement(movie) {
    const showtimeListEl = $('<ul id="showTimeList">');
    const showtimesData = {};
    movie.showtimes.forEach((showtime) => {
        const { theatre: { id } } = showtime;
        if (!showtimesData.hasOwnProperty(id)) {
            showtimesData[id] = {
                theatre: showtime.theatre.name,
                times: []
            }
        }
        showtimesData[id].times.push(moment(showtime.dateTime).format("HH:MM"));
    });

    for (let showtimes of Object.values(showtimesData)) {
        const showtimeItemEl = $(
            `<li class="showtimes-item">
                ${showtimes.theatre} ${getTimesHtmlString(showtimes.times)}
            </li>`
        );
        showtimeListEl.append(showtimeItemEl)
    }

    return showtimeListEl;
}

function getTimesHtmlString(times) {
    let html = "";
    for (let i = 0; i < times.length; i++) {
        html += `<span class="showtime-time">${times[i]}</span> `;
    }
    return html;
}
