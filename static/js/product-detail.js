document.addEventListener("DOMContentLoaded", function() {
    const productSlug = window.location.pathname.split("/").pop();
    const product = products.find(p => p.slug === productSlug);
  
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
            <p class="text-gray-400 mb-4">Rating: ${product.rating}/5</p>
            <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        </div>
      `;
    } else {
      productDetail.innerHTML = "<p>Product not found.</p>";
    }
  });