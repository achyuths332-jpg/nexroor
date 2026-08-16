const products = [
  {
    id: 1,
    name: "Wireless ANC Headphones",
    cat: "Electronics",
    price: 2499,
    old: 3299,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    name: "Minimal Smart Watch",
    cat: "Electronics",
    price: 1999,
    old: 2799,
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    name: "Everyday Backpack",
    cat: "Fashion",
    price: 1299,
    old: 1799,
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    name: "Portable Coffee Maker",
    cat: "Home & Kitchen",
    price: 1599,
    old: 2199,
    img: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    name: "Sunglasses Classic",
    cat: "Fashion",
    price: 899,
    old: 1299,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    name: "Desk Lamp",
    cat: "Home & Kitchen",
    price: 999,
    old: 1499,
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 7,
    name: "Skincare Essentials",
    cat: "Beauty",
    price: 1199,
    old: 1599,
    img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 8,
    name: "Compact Bluetooth Speaker",
    cat: "Electronics",
    price: 1399,
    old: 1899,
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85"
  }
];

const categoryImages = {
  Electronics: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85",
  Fashion: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=85",
  "Home & Kitchen": "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=85",
  Beauty: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85"
};

let cart = JSON.parse(localStorage.getItem("nexroor_cart") || "[]");

const $ = selector => document.querySelector(selector);

function money(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}

function save() {
  localStorage.setItem("nexroor_cart", JSON.stringify(cart));
}

function toast(message) {
  const box = $("#toast");
  if (!box) return;
  box.textContent = message;
  box.classList.add("show");
  setTimeout(() => box.classList.remove("show"), 1800);
}

function renderCategories() {
  const cats = [...new Set(products.map(p => p.cat))];

  $("#categoryGrid").innerHTML = cats.map(cat => `
    <button class="category" data-cat="${cat}">
      <img src="${categoryImages[cat]}" alt="${cat}">
      <span>${cat}</span>
    </button>
  `).join("");

  $("#categoryFilter").innerHTML =
    `<option value="all">All categories</option>` +
    cats.map(cat => `<option value="${cat}">${cat}</option>`).join("");

  document.querySelectorAll(".category").forEach(button => {
    button.onclick = () => {
      $("#categoryFilter").value = button.dataset.cat;
      renderProducts();
      location.hash = "shop";
    };
  });
}

function renderProducts() {
  let list = [...products];

  const cat = $("#categoryFilter").value;
  const sort = $("#sortFilter").value;

  if (cat !== "all") {
    list = list.filter(p => p.cat === cat);
  }

  if (sort === "low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    list.sort((a, b) => b.price - a.price);
  }

  $("#productGrid").innerHTML = list.map(p => `
    <article class="product">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>

      <div class="product-info">
        <span class="category-label">${p.cat}</span>
        <h3>${p.name}</h3>

        <div class="price">
          <b>${money(p.price)}</b>
          <span class="old">${money(p.old)}</span>
        </div>

        <div class="product-actions">
          <button class="secondary" onclick="addToCart(${p.id})">
            Add to cart
          </button>

          <button class="primary" onclick="buyNow(${p.id})">
            Buy now
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const item = cart.find(x => x.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  save();
  renderCart();
  toast("Added to cart");
}

function buyNow(id) {
  cart = [{ id, qty: 1 }];
  save();
  renderCart();
  openCheckout();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  $("#cartCount").textContent = count;

  if (!cart.length) {
    $("#cartItems").innerHTML =
      `<p class="empty">Your cart is empty.</p>`;
    $("#cartTotal").textContent = "₹0";
    $("#checkoutTotal").textContent = "₹0";
    return;
  }

  let total = 0;

  $("#cartItems").innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    const itemTotal = p.price * item.qty;
    total += itemTotal;

    return `
      <div class="cart-line">
        <img src="${p.img}" alt="${p.name}">

        <div>
          <b>${p.name}</b>
          <small>${money(p.price)}</small>

          <div class="qty">
            <button onclick="changeQty(${p.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${p.id}, 1)">+</button>
          </div>

          <button class="remove" onclick="removeItem(${p.id})">
            Remove
          </button>
        </div>
      </div>
    `;
  }).join("");

  $("#cartTotal").textContent = money(total);
  $("#checkoutTotal").textContent = money(total);
}

function changeQty(id, amount) {
  const item = cart.find(x => x.id === id);
  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(x => x.id !== id);
  }

  save();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(x => x.id !== id);
  save();
  renderCart();
}

function openCheckout() {
  if (!cart.length) {
    toast("Add a product first");
    return;
  }

  renderCart();
  $("#checkoutModal").classList.add("open");
}

function renderOrders() {
  const orders =
    JSON.parse(localStorage.getItem("nexroor_orders") || "[]");

  if (!orders.length) {
    $("#ordersList").innerHTML =
      `<div class="empty">No orders yet. Your placed orders will appear here.</div>`;
    return;
  }

  $("#ordersList").innerHTML = orders.map(order => `
    <div class="order">
      <div>
        <b>${order.id}</b>
        <div>${order.items} item(s) · ${money(order.total)}</div>
        <div>${order.name}, ${order.city}</div>
      </div>

      <span>Order received</span>
    </div>
  `).join("");
}

$("#cartBtn").onclick = () => {
  $("#cartDrawer").classList.add("open");
};

$("#closeCart").onclick = () => {
  $("#cartDrawer").classList.remove("open");
};

$("#checkoutBtn").onclick = openCheckout;

$("#closeCheckout").onclick = () => {
  $("#checkoutModal").classList.remove("open");
};

$("#categoryFilter").onchange = renderProducts;
$("#sortFilter").onchange = renderProducts;

$("#checkoutForm").onsubmit = event => {
  event.preventDefault();

  if (!cart.length) {
    toast("Your cart is empty");
    return;
  }

  const form = new FormData(event.target);

  const total = cart.reduce((sum, item) => {
    const p = products.find(x => x.id === item.id);
    return sum + p.price * item.qty;
  }, 0);

  const orders =
    JSON.parse(localStorage.getItem("nexroor_orders") || "[]");

  orders.unshift({
    id: "NX" + Date.now().toString().slice(-8),
    name: form.get("name"),
    city: form.get("city"),
    items: cart.reduce((sum, item) => sum + item.qty, 0),
    total: total
  });

  localStorage.setItem("nexroor_orders", JSON.stringify(orders));

  cart = [];
  save();
  renderCart();
  renderOrders();

  event.target.reset();
  $("#checkoutModal").classList.remove("open");

  toast("Order placed successfully");
  location.hash = "orders";
};

$("#searchBtn").onclick = () => {
  const query = prompt("What are you looking for?");

  if (!query) return;

  const found = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.cat.toLowerCase().includes(query.toLowerCase())
  );

  if (!found.length) {
    toast("No products found");
    return;
  }

  $("#categoryFilter").value = "all";

  $("#productGrid").innerHTML = found.map(p => `
    <article class="product">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}">
      </div>

      <div class="product-info">
        <span class="category-label">${p.cat}</span>
        <h3>${p.name}</h3>

        <div class="price">
          <b>${money(p.price)}</b>
          <span class="old">${money(p.old)}</span>
        </div>

        <div class="product-actions">
          <button class="secondary" onclick="addToCart(${p.id})">
            Add to cart
          </button>

          <button class="primary" onclick="buyNow(${p.id})">
            Buy now
          </button>
        </div>
      </div>
    </article>
  `).join("");

  location.hash = "shop";
};

renderCategories();
renderProducts();
renderCart();
renderOrders();
