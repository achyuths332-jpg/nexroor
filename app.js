const products = [
  {
    id: 1,
    name: "Wireless ANC Headphones",
    cat: "Electronics",
    price: 2499,
    old: 3499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Premium wireless headphones with active noise cancellation, deep bass and comfortable ear cushions. Perfect for music, travel and everyday use.",
    features: [
      "Active Noise Cancellation",
      "Wireless Bluetooth connectivity",
      "Long battery life",
      "Comfortable over-ear design",
      "Built-in microphone"
    ]
  },

  {
    id: 2,
    name: "Minimal Smart Watch",
    cat: "Electronics",
    price: 1999,
    old: 2999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A modern smart watch designed for everyday life. Track your activity, stay connected and keep your style simple.",
    features: [
      "Fitness tracking",
      "Heart-rate monitoring",
      "Activity tracking",
      "Smart notifications",
      "Modern lightweight design"
    ]
  },

  {
    id: 3,
    name: "Everyday Backpack",
    cat: "Fashion",
    price: 1299,
    old: 1799,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A stylish everyday backpack with enough space for work, college, travel and daily essentials.",
    features: [
      "Spacious main compartment",
      "Laptop-friendly storage",
      "Durable material",
      "Comfortable shoulder straps",
      "Modern minimalist design"
    ]
  },

  {
    id: 4,
    name: "Portable Coffee Maker",
    cat: "Home & Kitchen",
    price: 1799,
    old: 2499,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Compact coffee equipment for making your favourite coffee at home, at work or while travelling.",
    features: [
      "Compact design",
      "Easy to use",
      "Travel friendly",
      "Easy cleaning",
      "Suitable for everyday coffee"
    ]
  },

  {
    id: 5,
    name: "Sunglasses Classic",
    cat: "Fashion",
    price: 899,
    old: 1299,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "Classic everyday sunglasses with a clean design that works with casual and modern outfits.",
    features: [
      "Classic frame",
      "Lightweight design",
      "Comfortable fit",
      "Everyday styling",
      "UV protection style"
    ]
  },

  {
    id: 6,
    name: "Modern Desk Lamp",
    cat: "Home & Kitchen",
    price: 1099,
    old: 1599,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1534281307948-9c9c0c8b1f42?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A modern desk lamp for study tables, workspaces and bedrooms. Simple design with a clean look.",
    features: [
      "Modern design",
      "Desk-friendly size",
      "Study and work lighting",
      "Minimal appearance",
      "Easy placement"
    ]
  },

  {
    id: 7,
    name: "Skincare Essentials",
    cat: "Beauty",
    price: 799,
    old: 1199,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A simple collection of everyday skincare essentials designed for a clean and easy routine.",
    features: [
      "Daily skincare essentials",
      "Easy routine",
      "Travel friendly",
      "Simple packaging",
      "Suitable for everyday use"
    ]
  },

  {
    id: 8,
    name: "Compact Bluetooth Speaker",
    cat: "Electronics",
    price: 1399,
    old: 1899,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=85"
    ],
    description: "A compact Bluetooth speaker delivering portable sound for rooms, trips, parties and everyday listening.",
    features: [
      "Bluetooth connectivity",
      "Portable design",
      "Compact size",
      "Wireless operation",
      "Suitable for indoor and outdoor use"
    ]
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

let cart = JSON.parse(
  localStorage.getItem("nexroor_cart") || "[]"
);

const $ = selector => document.querySelector(selector);

function money(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}

function saveCart() {
  localStorage.setItem(
    "nexroor_cart",
    JSON.stringify(cart)
  );
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

/* =========================
   CATEGORIES
========================= */

function renderCategories() {

  const categories = [
    ...new Set(products.map(product => product.cat))
  ];

  $("#categoryGrid").innerHTML = categories.map(category => `
    <button
      class="category-card"
      onclick="selectCategory('${category}')">

      <img
        src="${categoryImages[category]}"
        alt="${category}">

      <span>${category}</span>

    </button>
  `).join("");

  $("#categoryFilter").innerHTML =
    `<option value="all">All categories</option>` +
    categories.map(category =>
      `<option value="${category}">
        ${category}
      </option>`
    ).join("");
}

function selectCategory(category) {

  $("#categoryFilter").value = category;

  renderProducts();

  document.querySelector("#shop").scrollIntoView({
    behavior: "smooth"
  });
}

/* =========================
   PRODUCT CARDS
========================= */

function renderProducts(list = null) {

  let productList = list
    ? [...list]
    : [...products];

  const category = $("#categoryFilter").value;
  const sort = $("#sortFilter").value;

  if (category !== "all") {
    productList = productList.filter(
      product => product.cat === category
    );
  }

  if (sort === "low") {
    productList.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    productList.sort(
      (a, b) => b.price - a.price
    );
  }

  if (!productList.length) {

    $("#productGrid").innerHTML = `
      <div class="empty search-empty">
        <h3>No products found</h3>
        <p>Try another product name or category.</p>
      </div>
    `;

    return;
  }

  $("#productGrid").innerHTML =
    productList.map(product => `

      <article
        class="product-card"
        onclick="openProduct(${product.id})">

        <div class="product-image-wrap">

          <img
            src="${product.image}"
            alt="${product.name}"
            loading="lazy">

          <span class="view-product">
            View details
          </span>

        </div>

        <div
          class="product-info"
          onclick="event.stopPropagation()">

          <p class="category">
            ${product.cat}
          </p>

          <h3>${product.name}</h3>

          <div class="price">

            <strong>
              ${money(product.price)}
            </strong>

            <del>
              ${money(product.old)}
            </del>

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

/* =========================
   PRODUCT DETAILS
========================= */

function openProduct(id) {

  const product = products.find(
    item => item.id === id
  );

  if (!product) return;

  const detailModal = $("#productModal");

  $("#detailCategory").textContent =
    product.cat;

  $("#detailName").textContent =
    product.name;

  $("#detailPrice").textContent =
    money(product.price);

  $("#detailOldPrice").textContent =
    money(product.old);

  $("#detailDescription").textContent =
    product.description;

  $("#detailMainImage").src =
    product.images[0];

  $("#detailMainImage").alt =
    product.name;

  $("#detailThumbnails").innerHTML =
    product.images.map((image, index) => `

      <button
        class="thumbnail ${index === 0 ? "active" : ""}"
        onclick="changeProductImage('${image}', this)">

        <img
          src="${image}"
          alt="${product.name} view ${index + 1}">

      </button>

    `).join("");

  $("#detailFeatures").innerHTML =
    product.features.map(feature => `
      <li>${feature}</li>
    `).join("");

  $("#detailAddCart").onclick = () => {
    addToCart(product.id);
  };

  $("#detailBuy").onclick = () => {
    buyNow(product.id);
  };

  detailModal.classList.add("open");

  document.body.classList.add("modal-open");
}

function changeProductImage(image, button) {

  $("#detailMainImage").src = image;

  document
    .querySelectorAll(".thumbnail")
    .forEach(item =>
      item.classList.remove("active")
    );

  button.classList.add("active");
}

function closeProduct() {

  $("#productModal").classList.remove("open");

  document.body.classList.remove("modal-open");
}

/* =========================
   SEARCH
========================= */

function searchProducts() {

  const input = $("#searchInput");

  if (!input) return;

  const search = input.value
    .trim()
    .toLowerCase();

  if (!search) {

    renderProducts();

    $("#searchResultsText").textContent =
      "";

    return;
  }

  const result = products.filter(product => {

    const searchableText = `
      ${product.name}
      ${product.cat}
      ${product.description}
      ${product.features.join(" ")}
    `.toLowerCase();

    return searchableText.includes(search);
  });

  $("#categoryFilter").value = "all";

  renderProducts(result);

  $("#searchResultsText").textContent =
    result.length
      ? `${result.length} product(s) found for "${input.value}"`
      : `No products found for "${input.value}"`;

  document.querySelector("#shop").scrollIntoView({
    behavior: "smooth"
  });
}

/* =========================
   CART
========================= */

function addToCart(id) {

  const existing = cart.find(
    item => item.id === id
  );

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

  cart = [
    {
      id: id,
      qty: 1
    }
  ];

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

  $("#cartItems").innerHTML =
    cart.map(item => {

      const product = products.find(
        p => p.id === item.id
      );

      return `

        <div class="cart-item">

          <img
            src="${product.image}"
            alt="${product.name}">

          <div>

            <b>${product.name}</b>

            <p>
              ${money(product.price)}
            </p>

            <div class="quantity">

              <button
                onclick="changeQty(${product.id}, -1)">
                −
              </button>

              <span>
                ${item.qty}
              </span>

              <button
                onclick="changeQty(${product.id}, 1)">
                +
              </button>

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

  const total = cart.reduce(
    (sum, item) => {

      const product = products.find(
        p => p.id === item.id
      );

      return sum +
        product.price * item.qty;

    },
    0
  );

  $("#cartTotal").textContent =
    money(total);

  $("#checkoutTotal").textContent =
    money(total);
}

function changeQty(id, amount) {

  const item = cart.find(
    item => item.id === id
  );

  if (!item) return;

  item.qty += amount;

  if (item.qty <= 0) {

    cart = cart.filter(
      item => item.id !== id
    );

  }

  saveCart();

  renderCart();
}

function removeItem(id) {

  cart = cart.filter(
    item => item.id !== id
  );

  saveCart();

  renderCart();

  toast("Item removed");
}

/* =========================
   CHECKOUT
========================= */

function openCheckout() {

  if (!cart.length) {

    toast("Your cart is empty");

    return;
  }

  renderCart();

  $("#checkoutModal")
    .classList.add("open");
}

function closeCheckout() {

  $("#checkoutModal")
    .classList.remove("open");
}

/* =========================
   ORDERS
========================= */

function renderOrders() {

  const orders = JSON.parse(
    localStorage.getItem("nexroor_orders") || "[]"
  );

  if (!orders.length) {

    $("#ordersList").innerHTML = `
      <div class="empty">
        No orders yet.
        Your orders will appear here.
      </div>
    `;

    return;
  }

  $("#ordersList").innerHTML =
    orders.map(order => `

      <div class="order-card">

        <div>

          <b>${order.id}</b>

          <p>
            ${order.items} item(s)
            · ${money(order.total)}
          </p>

          <p>
            ${order.name}, ${order.city}
          </p>

        </div>

        <span>
          Order received
        </span>

      </div>

    `).join("");
}

/* =========================
   BUTTON EVENTS
========================= */

$("#cartBtn").onclick = () => {

  $("#cartDrawer")
    .classList.add("open");

};

$("#closeCart").onclick = () => {

  $("#cartDrawer")
    .classList.remove("open");

};

$("#checkoutBtn").onclick =
  openCheckout;

$("#closeCheckout").onclick =
  closeCheckout;

$("#closeProduct").onclick =
  closeProduct;

$("#categoryFilter").onchange =
  () => renderProducts();

$("#sortFilter").onchange =
  () => renderProducts();

/* Search button */

$("#searchBtn").onclick = () => {

  const searchBox =
    $("#searchInput");

  searchBox.focus();

  document
    .querySelector("#shop")
    .scrollIntoView({
      behavior: "smooth"
    });

};

/* Live search */

$("#searchInput").addEventListener(
  "input",
  searchProducts
);

/* Enter key */

$("#searchInput").addEventListener(
  "keydown",
  event => {

    if (event.key === "Enter") {
      searchProducts();
    }

  }
);

/* Close product modal when clicking outside */

$("#productModal").addEventListener(
  "click",
  event => {

    if (
      event.target.id === "productModal"
    ) {
      closeProduct();
    }

  }
);

/* Checkout form */

$("#checkoutForm").onsubmit =
  function(event) {

    event.preventDefault();

    if (!cart.length) {

      toast("Your cart is empty");

      return;
    }

    const form =
      new FormData(event.target);

    const total = cart.reduce(
      (sum, item) => {

        const product =
          products.find(
            p => p.id === item.id
          );

        return sum +
          product.price * item.qty;

      },
      0
    );

    const orders = JSON.parse(
      localStorage.getItem(
        "nexroor_orders"
      ) || "[]"
    );

    const orderId =
      "NX" +
      Date.now()
        .toString()
        .slice(-8);

    const itemCount =
      cart.reduce(
        (sum, item) =>
          sum + item.qty,
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

      date:
        new Date().toISOString()

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

    $("#cartDrawer")
      .classList.remove("open");

    document
      .querySelector("#orders")
      .scrollIntoView({
        behavior: "smooth"
      });

    toast(
      "Order placed successfully"
    );
  };

/* =========================
   START WEBSITE
========================= */

renderCategories();

renderProducts();

renderCart();

renderOrders();
