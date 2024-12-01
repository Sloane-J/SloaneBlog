document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search-form");
  const searchInput = searchForm.querySelector('input[name="keyword"]');
  const searchResults = document.querySelector(".search-results");

  searchForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    const keyword = searchInput.value.toLowerCase();

    try {
      const response = await fetch("/index.json");
      const pages = await response.json();

      const results = pages.filter(
        (page) =>
          page.title.toLowerCase().includes(keyword) ||
          page.content.toLowerCase().includes(keyword)
      );

      displayResults(results);
    } catch (error) {
      console.error("Search error:", error);
    }
  });

  function displayResults(results) {
    searchResults.innerHTML = results
      .map(
        (result) => `
            <div class="search-result">
                <h3><a href="${result.url}">${result.title}</a></h3>
                <p>${result.summary || ""}</p>
            </div>
        `
      )
      .join("");
  }
});
