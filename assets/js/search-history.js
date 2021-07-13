let searchHistory = new Set();

function addSearchHistory(item, buttonClickCallback) {
    searchHistory.add(item);
    localStorage.setItem("searchHistory", JSON.stringify([...searchHistory]));
    displaySearchHistory(buttonClickCallback);
}

function getSearchHistory(buttonClickCallback) {
    searchHistory = new Set(JSON.parse(localStorage.getItem("searchHistory")));
    displaySearchHistory(buttonClickCallback)
}

function displaySearchHistory(buttonClickCallback) {
    $("#searchList").html("");
    if (searchHistory.size === 0) {
        $("#searchList").append("<li>No search history at this time...</li>");
    } else {
        [...searchHistory].reverse().forEach((item) => {
            // Add the function for performing searches to the `onClick` attribute
            const li = $('<li class="search-history-item">');
            const btn = $(`<button class="button">${item}</button>`);
            
            // Replace this callback with whatever the function is for fetching data
            btn.click(() => { buttonClickCallback(item) });

            li.append(btn);
            $("#searchList").append(li);
        });
    }
}
