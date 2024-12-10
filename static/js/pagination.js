function initPagination(products) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("bg-gray-700", "hover:bg-gray-600", "px-4", "py-2", "rounded", "mr-2");
    pageButton.textContent = page;

    pageButton.addEventListener("click", () => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const pageProducts = products.slice(startIndex, endIndex);

      productGrid.innerHTML = "";
      pageProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("bg-gray-800", "shadow", "rounded", "overflow-hidden", "product-card");

        productElement.innerHTML = `
          <a href="/deals/${product.slug}">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-4">
              <h3 class="text-lg font-medium mb-2">${product.name}</h3>
              <p class="text-gray-400 mb-2">${product.description}</p>
              <p class="text-gray-300 font-bold">$${product.price}</p>
              <p class="text-gray-400">Seller: ${product.seller.name}</p>
              <p class="text-gray-400">Contact: ${product.seller.contact}</p>
            </div>
          </a>
        `;

        productGrid.appendChild(productElement);
      });
    });

    paginationContainer.appendChild(pageButton);
  }
}
