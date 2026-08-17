/* NEXROOR — handbag catalogue replacement
   Products shown here are based on the supplier/product screenshots supplied in this conversation.
   Images are stored locally in /assets so the GitHub Pages site does not depend on external image URLs.
*/

const products = [
  {
    id: 1,
    name: "Women's PU Leather Solid Shoulder Zipper Handbag (Cream)",
    cat: "Women's Bags",
    price: 319,
    old: 1225,
    sku: "BSB48BGWYYYN_1009",
    images: ["assets/cream-front.jpg"],
    description: "Women's PU Leather Solid Handbag in cream with a structured dual-handle design and a removable adjustable strap.",
    features: [
      "Color: Cream",
      "Material: PU Leather",
      "No. of Compartments: 2",
      "Pattern: Solid",
      "Type: Handbag",
      "Inner Material: Polyester Lining",
      "Strap Type: Adjustable - Removable",
      "Closure Type: Zipper",
      "Handle Type: Dual Handle"
    ]
  },
  {
    id: 2,
    name: "Women's PU Leather Solid Shoulder Zipper Handbag (Black)",
    cat: "Women's Bags",
    price: 319,
    old: 1225,
    sku: "BSB48BGWYYYN_1008",
    images: ["assets/black-front.jpg"],
    description: "Women's PU Leather Solid Handbag in black with dual handles, a removable adjustable strap and zipper closure.",
    features: [
      "Color: Black",
      "Material: PU Leather",
      "No. of Compartments: 3",
      "Pattern: Solid",
      "Type: Handbag",
      "Inner Material: Polyester Lining",
      "Strap Type: Adjustable - Removable",
      "Closure Type: Zipper",
      "Handle Type: Dual Handle"
    ]
  },
  {
    id: 3,
    name: "Women's Polyurethane Floral Embroidered Crossbody Sling Bag (Tan)",
    cat: "Women's Bags",
    price: 399,
    old: 999,
    sku: "PID67409",
    images: [
      "assets/floral-front.jpg",
      "assets/floral-side.jpg",
      "assets/floral-back.jpg"
    ],
    description: "Tan polyurethane crossbody sling bag with floral embroidery and an adjustable, removable shoulder strap. The product gallery includes front, side and back views.",
    features: [
      "Color: Tan",
      "Material: Polyurethane",
      "Pattern: Floral Embroidered",
      "Type: Crossbody Sling Bag",
      "Strap Type: Adjustable - Removable",
      "Front floral embroidery",
      "Multiple product views included"
    ]
  }
];

const categoryImages = {
  "Women's Bags": "assets/cream-front.jpg"
};

let cart = JSON.parse(localStorage.getItem("nexroor_cart") || "[]");
const $ = selector => document.querySelector(selector);

function money(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function saveCart() {
  localStorage.setItem("nexroor_cart", JSON.stringify(cart));
}

function toast(message) {
  const box = $("#toast");
  if (!box) return;
  box.textContent = message;
  box.classList.add("show");
  clearTimeout(window.__nexroorToast);
  window.__nexroorToast = setTimeout(() => box.classList.remove("show"), 2200);
}

function injectStyles() {
  if ($("#nexroorBagStyles")) return;
  const style = document.createElement("style");
  style.id = "nexroorBagStyles";
  style.textContent = `
    .product-image-wrap{position:relative;background:#f7f6f3;overflow:hidden;border-radius:18px 18px 0 0;cursor:pointer;}
    .product-image-wrap img{display:block;width:100%;height:300px;object-fit:contain;background:#fff;}
    .view-product{position:absolute;right:12px;bottom:12px;background:#111;color:#fff;padding:8px 11px;border-radius:999px;font-size:12px;font-weight:800;opacity:.92;}
    .product-card{overflow:hidden;}
    .bag-detail-grid{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);gap:28px;align-items:start;}
    .bag-gallery{background:#f7f6f3;border-radius:20px;padding:14px;}
    .bag-main-image{width:100%;height:470px;object-fit:contain;background:#fff;border-radius:16px;display:block;}
    .bag-thumbs{display:flex;gap:10px;margin-top:12px;overflow:auto;padding-bottom:3px;}
    .bag-thumb{flex:0 0 78px;width:78px;height:78px;border:2px solid #e3e3e3;border-radius:12px;background:#fff;padding:3px;}
    .bag-thumb.active{border-color:#111;}
    .bag-thumb img{width:100%;height:100%;object-fit:contain;border-radius:8px;display:block;}
    .bag-sku{font-size:13px;color:#777;margin:10px 0 18px;}
    .bag-feature-list{padding-left:20px;line-height:1.75;color:#3f4145;}
    .bag-disclaimer{font-size:12px;line-height:1.55;color:#777;margin-top:18px;padding-top:14px;border-top:1px solid #eee;}
    .bag-detail-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:22px;}
    .nexroor-search-overlay{position:fixed;inset:0;z-index:500;background:rgba(0,0,0,.55);display:none;align-items:flex-start;justify-content:center;padding:8vh 18px 20px;}
    .nexroor-search-overlay.open{display:flex;}
    .nexroor-search-box{width:min(760px,100%);max-height:84vh;overflow:auto;background:#fff;border-radius:22px;padding:24px;position:relative;box-shadow:0 25px 80px rgba(0,0,0,.25);}
    .nexroor-search-input{width:100%;padding:15px 16px;border:1px solid #d8d8d8;border-radius:13px;font-size:17px;margin:14px 0;outline:none;}
    .nexroor-search-input:focus{border-color:#111;box-shadow:0 0 0 3px rgba(17,17,17,.08);}
    .nexroor-search-results{display:grid;gap:8px;}
    .nexroor-search-result{display:flex;align-items:center;gap:12px;width:100%;border:1px solid #ececec;border-radius:13px;background:#fff;padding:9px;text-align:left;}
    .nexroor-search-result:hover{background:#f7f7f7;}
    .nexroor-search-result img{width:68px;height:68px;object-fit:contain;background:#fff;border-radius:9px;flex:none;}
    .nexroor-close{position:absolute;right:16px;top:10px;border:0;background:none;font-size:32px;line-height:1;}
    .search-status{min-height:20px;}
    @media(max-width:760px){
      .bag-detail-grid{grid-template-columns:1fr;}
      .bag-main-image{height:340px;}
      .bag-detail-actions{grid-template-columns:1fr;}
      .product-image-wrap img{height:250px;}
    }
  `;
  document.head.appendChild(style);
}

function renderCategories() {
  const categories = [...new Set(products.map(p => p.cat))];
  const grid = $("#categoryGrid");
  if (grid) {
    grid.innerHTML = categories.map(category => `
      <button class="category-card" type="button" data-category="${escapeHtml(category)}">
        <img src="${categoryImages[category]}" alt="${escapeHtml(category)}" loading="lazy">
        <span>${escapeHtml(category)}</span>
      </button>
    `).join("");
    grid.querySelectorAll(".category-card").forEach(button => {
      button.addEventListener("click", () => selectCategory(button.dataset.category));
    });
  }

  const filter = $("#categoryFilter");
  if (filter) {
    filter.innerHTML = `<option value="all">All categories</option>` +
      categories.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("");
  }
}

function selectCategory(category) {
  if ($("#categoryFilter")) $("#categoryFilter").value = category;
  if ($("#searchInput")) $("#searchInput").value = "";
  if ($("#searchStatus")) $("#searchStatus").textContent = "";
  renderProducts();
  $("#shop")?.scrollIntoView({ behavior: "smooth" });
}

function productCard(product) {
  return `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image-wrap" role="button" tabindex="0" aria-label="View ${escapeHtml(product.name)}">
        <img src="${product.images[0]}" alt="${escapeHtml(product.name)}" loading="lazy">
        <span class="view-product">View details</span>
      </div>
      <div class="product-info">
        <p class="category">${escapeHtml(product.cat)}</p>
        <h3>${escapeHtml(product.name)}</h3>
        <div class="price"><strong>${money(product.price)}</strong> <del>${money(product.old)}</del></div>
        <p class="bag-sku">SKU: ${escapeHtml(product.sku)}</p>
        <div class="product-actions">
          <button class="secondary add-btn" type="button">Add to cart</button>
          <button class="primary buy-btn" type="button">Buy now</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(listOverride = null) {
  let list = listOverride ? [...listOverride] : [...products];
  const category = $("#categoryFilter")?.value || "all";
  const sort = $("#sortFilter")?.value || "featured";

  if (!listOverride && category !== "all") {
    list = list.filter(product => product.cat === category);
  }

  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);

  const grid = $("#productGrid");
  if (!grid) return;
  grid.innerHTML = list.length
    ? list.map(productCard).join("")
    : `<div class="empty" style="grid-column:1/-1">No products found.</div>`;

  grid.querySelectorAll(".product-card").forEach(card => {
    const id = Number(card.dataset.id);
    const image = card.querySelector(".product-image-wrap");
    image.addEventListener("click", () => openProduct(id));
    image.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProduct(id);
      }
    });
    card.querySelector(".add-btn").addEventListener("click", event => {
      event.stopPropagation();
      addToCart(id);
    });
    card.querySelector(".buy-btn").addEventListener("click", event => {
      event.stopPropagation();
      buyNow(id);
    });
  });
}

function ensureSearchOverlay() {
  if ($("#nexroorSearchOverlay")) return;
  document.body.insertAdjacentHTML("beforeend", `
    <div class="nexroor-search-overlay" id="nexroorSearchOverlay" role="dialog" aria-modal="true" aria-label="Search products">
      <div class="nexroor-search-box">
        <button class="nexroor-close" id="nexroorSearchClose" type="button" aria-label="Close search">×</button>
        <p class="eyebrow">SEARCH NEXROOR</p>
        <h2 style="margin:0">Find a handbag</h2>
        <input class="nexroor-search-input" id="searchInput" type="search" placeholder="Search by product, color, material or category..." autocomplete="off">
        <div class="nexroor-search-results" id="searchResults"></div>
      </div>
    </div>
  `);

  $("#nexroorSearchClose").onclick = closeSearch;
  $("#nexroorSearchOverlay").addEventListener("click", event => {
    if (event.target.id === "nexroorSearchOverlay") closeSearch();
  });
  $("#searchInput").addEventListener("input", event => updateSearchResults(event.target.value));
  $("#searchInput").addEventListener("keydown", event => {
    if (event.key === "Escape") closeSearch();
  });
}

function openSearch() {
  ensureSearchOverlay();
  $("#nexroorSearchOverlay").classList.add("open");
  $("#searchInput").value = "";
  updateSearchResults("");
  document.body.style.overflow = "hidden";
  setTimeout(() => $("#searchInput")?.focus(), 30);
}

function closeSearch() {
  $("#nexroorSearchOverlay")?.classList.remove("open");
  if (!$("#productModal")?.classList.contains("open")) document.body.style.overflow = "";
}

function updateSearchResults(query) {
  const q = String(query || "").trim().toLowerCase();
  const results = q
    ? products.filter(product => `${product.name} ${product.cat} ${product.description} ${product.sku} ${product.features.join(" ")}`.toLowerCase().includes(q))
    : products;

  const box = $("#searchResults");
  if (!box) return;
  box.innerHTML = results.length
    ? results.map(product => `
      <button class="nexroor-search-result" type="button" data-search-id="${product.id}">
        <img src="${product.images[0]}" alt="">
        <span><b>${escapeHtml(product.name)}</b><br><small>${escapeHtml(product.cat)} · ${money(product.price)}</small></span>
      </button>
    `).join("")
    : `<div class="empty">No products found for “${escapeHtml(query)}”.</div>`;

  box.querySelectorAll("[data-search-id]").forEach(button => {
    button.addEventListener("click", () => {
      closeSearch();
      openProduct(Number(button.dataset.searchId));
    });
  });
}

function openProduct(id) {
  const product = products.find(item => item.id === Number(id));
  if (!product) {
    toast("Product not found");
    return;
  }

  const details = $("#productDetails");
  if (!details) return;

  details.innerHTML = `
    <div class="bag-detail-grid">
      <div class="bag-gallery">
        <img id="mainProductImage" class="bag-main-image" src="${product.images[0]}" alt="${escapeHtml(product.name)}">
        <div class="bag-thumbs" aria-label="Product images">
          ${product.images.map((image, index) => `
            <button class="bag-thumb ${index === 0 ? "active" : ""}" type="button" data-image="${image}" aria-label="View image ${index + 1}">
              <img src="${image}" alt="${escapeHtml(product.name)} image ${index + 1}">
            </button>
          `).join("")}
        </div>
      </div>
      <div class="product-detail-info">
        <p class="category">${escapeHtml(product.cat)}</p>
        <h2>${escapeHtml(product.name)}</h2>
        <div class="detail-price"><strong>${money(product.price)}</strong> <del>${money(product.old)}</del></div>
        <p class="bag-sku">SKU: ${escapeHtml(product.sku)}</p>
        <p class="product-description">${escapeHtml(product.description)}</p>
        <h3>Product information</h3>
        <ul class="bag-feature-list">${product.features.map(feature => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
        <p class="bag-disclaimer">Product colour may vary slightly because of photographic lighting and screen settings.</p>
        <div class="bag-detail-actions">
          <button class="secondary" type="button" id="detailAdd">Add to cart</button>
          <button class="primary" type="button" id="detailBuy">Buy now</button>
        </div>
      </div>
    </div>
  `;

  $("#productModal").classList.add("open");
  document.body.style.overflow = "hidden";

  details.querySelectorAll(".bag-thumb").forEach(button => {
    button.addEventListener("click", () => {
      $("#mainProductImage").src = button.dataset.image;
      details.querySelectorAll(".bag-thumb").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
    });
  });

  $("#detailAdd").onclick = () => {
    addToCart(product.id);
    closeProduct();
  };
  $("#detailBuy").onclick = () => {
    closeProduct();
    buyNow(product.id);
  };
}

function closeProduct() {
  $("#productModal")?.classList.remove("open");
  if (!$("#nexroorSearchOverlay")?.classList.contains("open")) document.body.style.overflow = "";
}

function addToCart(id) {
  const numericId = Number(id);
  const item = cart.find(entry => entry.id === numericId);
  if (item) item.qty += 1;
  else cart.push({ id: numericId, qty: 1 });
  saveCart();
  renderCart();
  toast("Added to cart");
}

function buyNow(id) {
  cart = [{ id: Number(id), qty: 1 }];
  saveCart();
  renderCart();
  openCheckout();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  if ($("#cartCount")) $("#cartCount").textContent = count;

  if (!cart.length) {
    $("#cartItems").innerHTML = `<div class="empty">Your cart is empty.</div>`;
    $("#cartTotal").textContent = "₹0";
    $("#checkoutTotal").textContent = "₹0";
    return;
  }

  $("#cartItems").innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return "";
    return `
      <div class="cart-item">
        <img src="${product.images[0]}" alt="${escapeHtml(product.name)}">
        <div class="cart-item-info">
          <button type="button" style="border:0;background:none;padding:0;text-align:left;font-weight:800;cursor:pointer" data-open-cart-product="${product.id}">${escapeHtml(product.name)}</button>
          <p>${money(product.price)}</p>
          <div class="quantity">
            <button type="button" data-minus="${product.id}">−</button>
            <span>${item.qty}</span>
            <button type="button" data-plus="${product.id}">+</button>
          </div>
          <button class="remove" type="button" data-remove="${product.id}">Remove</button>
        </div>
      </div>
    `;
  }).join("");

  $("#cartItems").querySelectorAll("[data-minus]").forEach(button => {
    button.onclick = () => changeQty(Number(button.dataset.minus), -1);
  });
  $("#cartItems").querySelectorAll("[data-plus]").forEach(button => {
    button.onclick = () => changeQty(Number(button.dataset.plus), 1);
  });
  $("#cartItems").querySelectorAll("[data-remove]").forEach(button => {
    button.onclick = () => removeItem(Number(button.dataset.remove));
  });
  $("#cartItems").querySelectorAll("[data-open-cart-product]").forEach(button => {
    button.onclick = () => openProduct(Number(button.dataset.openCartProduct));
  });

  const total = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return product ? sum + product.price * item.qty : sum;
  }, 0);
  $("#cartTotal").textContent = money(total);
  $("#checkoutTotal").textContent = money(total);
}

function changeQty(id, amount) {
  const item = cart.find(entry => entry.id === Number(id));
  if (!item) return;
  item.qty += amount;
  if (item.qty <= 0) cart = cart.filter(entry => entry.id !== Number(id));
  saveCart();
  renderCart();
}

function removeItem(id) {
  cart = cart.filter(entry => entry.id !== Number(id));
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
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  $("#checkoutModal")?.classList.remove("open");
  if (!$("#productModal")?.classList.contains("open")) document.body.style.overflow = "";
}

function renderOrders() {
  const orders = JSON.parse(localStorage.getItem("nexroor_orders") || "[]");
  const list = $("#ordersList");
  if (!list) return;
  list.innerHTML = orders.length
    ? orders.map(order => `
      <div class="order-card">
        <div><b>${escapeHtml(order.id)}</b><p>${order.items} item(s) · ${money(order.total)}</p><p>${escapeHtml(order.name)}, ${escapeHtml(order.city)}</p></div>
        <span>Order received</span>
      </div>
    `).join("")
    : `<div class="empty">No orders yet. Your orders will appear here.</div>`;
}

function setupCheckout() {
  const form = $("#checkoutForm");
  if (!form) return;
  form.onsubmit = event => {
    event.preventDefault();
    if (!cart.length) {
      toast("Your cart is empty");
      return;
    }

    const data = new FormData(form);
    const total = cart.reduce((sum, item) => {
      const product = products.find(p => p.id === item.id);
      return product ? sum + product.price * item.qty : sum;
    }, 0);
    const orders = JSON.parse(localStorage.getItem("nexroor_orders") || "[]");
    const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const orderId = "NX" + Date.now().toString().slice(-8);

    orders.unshift({
      id: orderId,
      name: data.get("name"),
      phone: data.get("phone"),
      address: data.get("address"),
      city: data.get("city"),
      pin: data.get("pin"),
      payment: data.get("payment"),
      total,
      items: itemCount,
      date: new Date().toISOString()
    });

    localStorage.setItem("nexroor_orders", JSON.stringify(orders));
    cart = [];
    saveCart();
    renderCart();
    renderOrders();
    form.reset();
    closeCheckout();
    $("#cartDrawer")?.classList.remove("open");
    $("#orders")?.scrollIntoView({ behavior: "smooth" });
    toast("Order placed successfully");
  };
}

function init() {
  injectStyles();

  $("#cartBtn")?.addEventListener("click", () => $("#cartDrawer")?.classList.add("open"));
  $("#closeCart")?.addEventListener("click", () => $("#cartDrawer")?.classList.remove("open"));
  $("#checkoutBtn")?.addEventListener("click", openCheckout);
  $("#closeCheckout")?.addEventListener("click", closeCheckout);
  $("#closeProduct")?.addEventListener("click", closeProduct);
  $("#searchBtn")?.addEventListener("click", openSearch);

  $("#categoryFilter")?.addEventListener("change", () => {
    if ($("#searchStatus")) $("#searchStatus").textContent = "";
    renderProducts();
  });
  $("#sortFilter")?.addEventListener("change", renderProducts);

  ["#productModal", "#checkoutModal"].forEach(selector => {
    $(selector)?.addEventListener("click", event => {
      if (event.target === $(selector)) {
        selector === "#productModal" ? closeProduct() : closeCheckout();
      }
    });
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeProduct();
      closeCheckout();
      closeSearch();
      $("#cartDrawer")?.classList.remove("open");
    }
  });

  setupCheckout();
  renderCategories();
  renderProducts();
  renderCart();
  renderOrders();
}

init();
