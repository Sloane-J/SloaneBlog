document.addEventListener("DOMContentLoaded", function() {
  const productGrid = document.getElementById("product-grid");
  const filterButtons = document.querySelectorAll("[data-category]");
  const sortSelect = document.getElementById("sort-select");

  function displayProducts(category, sortBy = "price-asc") {
    productGrid.innerHTML = "";
    let filteredProducts = category === "all" ? products : products.filter(product => product.category === category);

    if (sortBy === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating-desc") {
      filteredProducts.sort((a, b) => b.rating - a.rating);
    }

    filteredProducts.forEach(product => {
      const productElement = document.createElement("div");
      productElement.classList.add("bg-gray-800", "shadow", "rounded", "overflow-hidden", "product-card");

      // Ensure seller object exists before accessing properties
      const sellerName = product.seller && product.seller.name ? product.seller.name : "Unknown Seller";
      const sellerContact = product.seller && product.seller.contact ? product.seller.contact : "Not Available";

      productElement.innerHTML = `
        <a href="/deals/${product.slug}">
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">${product.name}</h3>
            <p class="text-gray-400 mb-2">${product.description}</p>
            <p class="text-gray-300 font-bold">$${product.price}</p>
            <p class="text-gray-400">Seller: ${sellerName}</p>
            <p class="text-gray-400">Contact: ${sellerContact}</p>
          </div>
        </a>
      `;

      productGrid.appendChild(productElement);
    });

    initPagination(filteredProducts);
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.dataset.category;
      displayProducts(category, sortSelect.value);
    });
  });

  sortSelect.addEventListener("change", () => {
    displayProducts(document.querySelector("[data-category].bg-gray-600").dataset.category, sortSelect.value);
  });

  displayProducts("all");
});
