document.addEventListener("DOMContentLoaded", function() {
    const productGrid = document.getElementById("product-grid");
    const filterButtons = document.querySelectorAll("[data-category]");
  
    function displayProducts(category) {
      productGrid.innerHTML = "";
      const filteredProducts = category === "all" ? products : products.filter(product => product.category === category);
  
      filteredProducts.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("bg-white", "shadow", "rounded", "overflow-hidden");
  
        productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
          <div class="p-4">
            <h3 class="text-lg font-medium mb-2">${product.name}</h3>
            <p class="text-gray-600 mb-2">${product.description}</p>
            <p class="text-gray-800 font-bold">$${product.price}</p>
          </div>
        `;
  
        productGrid.appendChild(productElement);
      });
    }
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const category = button.dataset.category;
        displayProducts(category);
      });
    });
  
    displayProducts("all");
  });