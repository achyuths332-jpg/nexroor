const products = [
  {
    id: 1,
    name: "Wireless ANC Headphones",
    cat: "Electronics",
    price: 2499,
    old: 3499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    name: "Minimal Smart Watch",
    cat: "Electronics",
    price: 1999,
    old: 2999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    name: "Everyday Backpack",
    cat: "Fashion",
    price: 1299,
    old: 1799,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    name: "Portable Coffee Maker",
    cat: "Home & Kitchen",
    price: 1799,
    old: 2499,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    name: "Sunglasses Classic",
    cat: "Fashion",
    price: 899,
    old: 1299,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    name: "Modern Desk Lamp",
    cat: "Home & Kitchen",
    price: 1099,
    old: 1599,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 7,
    name: "Skincare Essentials",
    cat: "Beauty",
    price: 799,
    old: 1199,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 8,
    name: "Compact Bluetooth Speaker",
    cat: "Electronics",
    price: 1399,
    old: 1899,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85"
  }
];

const categoryImages = {
  "Electronics":
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=700&q=85",
  "Fashion":
    "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=85",
  "Home & Kitchen":
    "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=700&q=85",
  "Beauty":
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=85"
};

let cart = JSON.parse(localStorage.getItem("nexroor_cart") || "[]");

const $ = selector => document.querySelector(selector);

function money(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}

function saveCart() {
  localStorage.setItem("nexroor_cart", JSON.stringify(cart));
}

function toast(message) {
  const box = $("#toast");
  if (!box) return;

  box.textContent = message;
  box.classList.add("show");

  setTimeout(() => {
    box.classList.remove("show");
  }, 2200);
}

function renderCategories() {
  const categories = [...new Set(products.map(product => product.cat))];

  $("#categoryGrid").innerHTML = categories.map(category => `
    <button class="category-card" onclick="selectCategory('${category}')">
      <img src="${categoryImages[category]}" alt="${category}">
      <span>${category}</span>
    </button>
  `).join("");

  $("#categoryFilter").innerHTML =
    `<option value="all">All categories</option>` +
    categories.map(category =>
      `<option value="${category}">${category}</option>`
    ).join("");
}

function selectCategory(category) {
  $("#categoryFilter").value = category;
  renderProducts();
  document.querySelector("#shop").scrollIntoView({
    behavior: "smooth"
  });
}

function renderProducts() {
  let list = [...products];

  const category = $("#categoryFilter").value;
  const sort = $("#sortFilter").value;

  if (category !== "all") {
    list = list.filter(product => product.cat === category);
  }

  if (sort === "low") {
    list.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    list.sort((a, b) => b.price - a.price);
  }

  $("#productGrid").innerHTML = list.map(product => `
    <article class="product-card">
      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >

      <div class="product-info">
        <p class="category">${product.cat}</p>

        <h3>${product.name}</h3>

        <div class="price">
          <strong>${money(product.price)}</strong>
          <del>${money(product.old)}</del>
        </div>

        <div class="product-actions">
          <button
            class="secondary"
            onclick="addToCart(${product.id})">
            Add to cart
          </button>

          <button
            class="primary"
            onclick="buyNow(${product.id})">
            Buy now
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: id,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  toast("Added to cart");
}

function buyNow(id) {
  cart = [{
    id: id,
    qty: 1
  }];

  saveCart();
  renderCart();
  openCheckout();
}

function renderCart() {
  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  $("#cartCount").textContent = count;

  if (!cart.length) {
    $("#cartItems").innerHTML = `
      <div class="empty">
        Your cart is empty.
      </div>
    `;

    $("#cartTotal").textContent = "₹0";
    $("#checkoutTotal").textContent = "₹0";
    return;
  }

  $("#cartItems").innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);

    return `
      <div class="cart-item">

        <img src="${product.image}" alt="${product.name}">

        <div>
          <b>${product.name}</b>
          <p>${money(product.price)}</p>

          <div class="quantity">
            <button onclick="changeQty(${product.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${product.id}, 1)">+</button>
          </div>

          <button
            class="remove"
            onclick="removeItem(${product.id})">
            Remove
          </button>
        </div>

      </div>
    `;
  }).join("");

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.qty;
  }, 0);

  $("#cartTotal").textContent = money(total);
  $("#checkoutTotal").textContent = money(total);
}

function changeQty(id, amount) {
  const item = cart.find(item => item.id === id);

  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {
    cart = cart.filter(item => item.id !== id);
  }

  saveCart();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(item => item.id !== id);

  saveCart();
  renderCart();
  toast("Item removed");
}

function openCheckout() {
  if (!cart.length) {
    toast("Your cart is empty");
    return;
  }

  renderCart();

  $("#checkoutModal").classList.add("open");
}

function closeCheckout() {
  $("#checkoutModal").classList.remove("open");
}

function renderOrders() {
  const orders = JSON.parse(
    localStorage.getItem("nexroor_orders") || "[]"
  );

  if (!orders.length) {
    $("#ordersList").innerHTML = `
      <div class="empty">
        No orders yet. Your orders will appear here.
      </div>
    `;
    return;
  }

  $("#ordersList").innerHTML = orders.map(order => `
    <div class="order-card">

      <div>
        <b>${order.id}</b>
        <p>${order.items} item(s) · ${money(order.total)}</p>
        <p>${order.name}, ${order.city}</p>
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

$("#closeCheckout").onclick = closeCheckout;

$("#categoryFilter").onchange = renderProducts;

$("#sortFilter").onchange = renderProducts;

$("#searchBtn").onclick = () => {
  const search = prompt("What are you looking for?");

  if (!search) return;

  const result = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase()) ||
    product.cat.toLowerCase().includes(search.toLowerCase())
  );

  if (!result.length) {
    toast("No products found");
    return;
  }

  $("#categoryFilter").value = "all";

  $("#productGrid").innerHTML = result.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}">

      <div class="product-info">
        <p class="category">${product.cat}</p>
        <h3>${product.name}</h3>

        <div class="price">
          <strong>${money(product.price)}</strong>
          <del>${money(product.old)}</del>
        </div>

        <div class="product-actions">
          <button
            class="secondary"
            onclick="addToCart(${product.id})">
            Add to cart
          </button>

          <button
            class="primary"
            onclick="buyNow(${product.id})">
            Buy now
          </button>
        </div>
      </div>
    </article>
  `).join("");

  $("#shop").scrollIntoView({
    behavior: "smooth"
  });
};

$("#checkoutForm").onsubmit = function(event) {
  event.preventDefault();

  if (!cart.length) {
    toast("Your cart is empty");
    return;
  }

  const form = new FormData(event.target);

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + product.price * item.qty;
  }, 0);

  const orders = JSON.parse(
    localStorage.getItem("nexroor_orders") || "[]"
  );

  const orderId =
    "NX" +
    Date.now().toString().slice(-8);

  const itemCount = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  orders.unshift({
    id: orderId,
    name: form.get("name"),
    phone: form.get("phone"),
    address: form.get("address"),
    city: form.get("city"),
    pin: form.get("pin"),
    payment: form.get("payment"),
    total: total,
    items: itemCount,
    date: new Date().toISOString()
  });

  localStorage.setItem(
    "nexroor_orders",
    JSON.stringify(orders)
  );

  cart = [];
  saveCart();

  renderCart();
  renderOrders();

  event.target.reset();
  closeCheckout();

  $("#cartDrawer").classList.remove("open");

  document.querySelector("#orders").scrollIntoView({
    behavior: "smooth"
  });

  toast("Order placed successfully");
};

renderCategories();
renderProducts();
renderCart();
renderOrders();
