document.addEventListener("DOMContentLoaded", function() {
  // Ensure products array is loaded from the global scope or another file
  if (typeof products === "undefined") {
    console.error("Products array not found.");
    return;
  }

  // Get the product slug from the URL
  const productSlug = window.location.pathname.split("/").pop();

  // Find the product from the array
  const product = products.find(p => p.slug === productSlug);

  // If the product is found, display its details
  if (product) {
    const productDetail = document.getElementById("product-detail");
    productDetail.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="${product.image}" alt="${product.name}" class="w-full h-auto rounded">
        </div>
        <div>
          <h1 class="text-3xl font-bold mb-4">${product.name}</h1>
          <p class="text-gray-400 mb-4">${product.description}</p>
          <p class="text-gray-300 font-bold text-2xl mb-4">$${product.price}</p>
          <p class="text-gray-400 mb-4">Rating: ${product.rating ? product.rating : "N/A"}/5</p>
          <p class="text-gray-400 mb-4">Seller: ${product.seller ? product.seller : "Unknown"}</p>
          <p class="text-gray-400 mb-4">Contact: ${product.contact ? product.contact : "Not Provided"}</p>
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      </div>
    `;
  } else {
    const productDetail = document.getElementById("product-detail");
    productDetail.innerHTML = "<p>Product not found.</p>";
  }
});
