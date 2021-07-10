let searchHistory = new Set();

function addSearchHistory(item) {
    if (!searchHistory.has(item)) {
        searchHistory.add(item);
        localStorage.setItem("searchHistory", JSON.stringify([...searchHistory]));
        displaySearchHistory()
    }
}

function getSearchHistory() {
    searchHistory = new Set(JSON.parse(localStorage.getItem("searchHistory")));
    displaySearchHistory()
}

function displaySearchHistory() {
    $("#searchList").html("");
    if (searchHistory.size === 0) {
        $("#searchList").append("<li>No search history at this time...</li>");
    } else {
        [...searchHistory].reverse().forEach((item) => {
            const el = $(`<li class="search-history-item">${item}</li>`);
            $("#searchList").append(el);
        });
    }
}

getSearchHistory();
