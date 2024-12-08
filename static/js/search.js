document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");

  fetch("/index.json")
    .then((response) => response.json())
    .then((pages) => {
      searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const results = pages.filter(
          (page) =>
            page.title.toLowerCase().includes(query) ||
            page.content.toLowerCase().includes(query)
        );

        displayResults(results);
      });

      function displayResults(results) {
        searchResults.innerHTML = results
          .map(
            (page) => `
          <div class="search-result">
            <a href="${page.url}">${page.title}</a>
            <p>${page.content.substring(0, 150)}...</p>
          </div>
        `
          )
          .join("");
      }
    });
});
