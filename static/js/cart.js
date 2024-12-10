let cart = [];

function addToCart(product) {
  const existingItem = cart.find(item => item.slug === product.slug);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

function removeFromCart(product) {
  const index = cart.findIndex(item => item.slug === product.slug);
  if (index !== -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity--;
    } else {
      cart.splice(index, 1);
    }
    updateCartUI();
  }
}

function updateCartUI() {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  cart.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("bg-gray-800", "shadow", "rounded", "overflow-hidden", "p-4", "flex", "justify-between", "items-center");

    cartItem.innerHTML = `
      <div class="flex items-center">
        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded mr-4">
        <div>
          <h3 class="text-lg font-medium">${item.name}</h3>
          <p class="text-gray-400">$${item.price}</p>
        </div>
      </div>
      <div class="flex items-center">
        <button class="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded mr-2" onclick="removeFromCart(${JSON.stringify(item)})">-</button>
        <span class="text-gray-300">${item.quantity}</span>
        <button class="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded ml-2" onclick="addToCart(${JSON.stringify(item)})">+</button>
      </div>
    `;

    cartContainer.appendChild(cartItem);
  });
}