let searchHistory = new Set();

function addSearchHistory(item) {
    if (!searchHistory.has(item)) {
        searchHistory.add(item);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
        // Update display of search history results
    }
}
