let cart = Number(localStorage.getItem("cart") || 0);

function addCart() {
  cart++;
  localStorage.setItem("cart", cart);
  alert("Product Cart lo add ayyindi.");
}

function goSeller() {
  location.href = "seller.html";
}

// Seller product Home page lo chupinchu
window.onload = function () {
  const p = JSON.parse(localStorage.getItem("manamart_product"));
  const box = document.getElementById("products");

  if (p && box) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.image || "https://picsum.photos/300/200"}">
      <h3>${p.name}</h3>
      <div class="price">₹${p.price}</div>
      <button onclick="addCart()">Add to Cart</button>
    `;
    box.prepend(card);
  }
};