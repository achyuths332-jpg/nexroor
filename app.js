/* =========================================================
   NEXROOR - COMPLETE APP.JS
   Product details + gallery + search + cart + checkout
   ========================================================= */

const products = [

  {
    id: 1,
    name: "Waffle Maker",
    cat: "Home & Kitchen",
    price: 599,
    old: 999,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=85"
    ],
    description:
      "Compact waffle maker designed for making delicious homemade waffles quickly and easily. A useful addition to modern kitchens and a great everyday breakfast appliance.",
    features: [
      "Non-stick cooking surface",
      "Compact countertop design",
      "Easy to clean",
      "Suitable for everyday home use"
    ]
  },

  {
    id: 2,
    name: "Pack of 2 Oil Sprayer for Cooking",
    cat: "Home & Kitchen",
    price: 499,
    old: 799,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c25?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
    ],
    description:
      "Convenient cooking oil sprayers designed to help control the amount of oil used while cooking, grilling, baking or roasting.",
    features: [
      "Pack of 2",
      "Easy oil control",
      "Reusable design",
      "Suitable for cooking and baking"
    ]
  },

  {
    id: 3,
    name: "Multi Functional Vegetable Peeler",
    cat: "Home & Kitchen",
    price: 399,
    old: 649,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=85"
    ],
    description:
      "A practical kitchen peeler for preparing vegetables and everyday cooking ingredients quickly.",
    features: [
      "Easy to use",
      "Comfortable grip",
      "Useful everyday kitchen tool",
      "Compact and easy to store"
    ]
  },

  {
    id: 4,
    name: "X Type Mop",
    cat: "Home Accessories",
    price: 699,
    old: 999,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
    ],
    description:
      "A convenient cleaning mop designed to make everyday floor cleaning easier while helping you reach difficult areas.",
    features: [
      "Rotating mop head",
      "Long handle",
      "Useful for multiple floor types",
      "Easy rinse and wring"
    ]
  },

  {
    id: 5,
    name: "Vacuum Storage Bag",
    cat: "Home Accessories",
    price: 799,
    old: 1199,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=85"
    ],
    description:
      "Space-saving storage bags designed to compress clothes, bedding and other bulky household items for easier storage and travel.",
    features: [
      "Space saving design",
      "Useful for clothes and bedding",
      "Helps protect stored items",
      "Great for travel and home organisation"
    ]
  },

  {
    id: 6,
    name: "USB Charging 5 in 1 Magic Brush",
    cat: "Home Accessories",
    price: 899,
    old: 1299,
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85"
    ],
    description:
      "Rechargeable multi-purpose cleaning brush designed for sinks, tiles, bathrooms, tubs and other household surfaces.",
    features: [
      "USB rechargeable",
      "Multiple brush heads",
      "Suitable for wet areas",
      "Helps reduce cleaning effort"
    ]
  },

  {
    id: 7,
    name: "Sunset Light Humidifier",
    cat: "Home Accessories",
    price: 899,
    old: 1299,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85"
    ],
    description:
      "Compact decorative humidifier and ambient light designed to add a relaxing atmosphere to bedrooms, desks and living spaces.",
    features: [
      "Ambient lighting",
      "Compact design",
      "Suitable for bedroom or desk",
      "Decorative home accessory"
    ]
  },

  {
    id: 8,
    name: "Water Dental Flosser",
    cat: "Personal Care",
    price: 999,
    old: 1599,
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85",
    images: [
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85"
    ],
    description:
      "Portable rechargeable water flosser designed for convenient everyday oral-care routines at home or while travelling.",
    features: [
      "USB rechargeable",
      "Portable design",
      "Multiple cleaning modes",
      "Suitable for home and travel"
    ]
  }

];


/* =========================================================
   STATE
   ========================================================= */

let cart = JSON.parse(
  localStorage.getItem("nexroor_cart") || "[]"
);

let currentProduct = null;
let currentImageIndex = 0;


/* =========================================================
   HELPERS
   ========================================================= */

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


/* =========================================================
   CATEGORIES
   ========================================================= */

function renderCategories() {

  const categories = [
    ...new Set(products.map(product => product.cat))
  ];

  const categoryGrid = $("#categoryGrid");

  if (categoryGrid) {

    categoryGrid.innerHTML = categories.map(category => {

      const product = products.find(
        item => item.cat === category
      );

      return `
        <button
          class="category-card"
          onclick="selectCategory('${category}')"
        >
          <img
            src="${product.image}"
            alt="${category}"
            loading="lazy"
          >

          <span>${category}</span>
        </button>
      `;

    }).join("");
  }


  const filter = $("#categoryFilter");

  if (filter) {

    filter.innerHTML =
      `<option value="all">All categories</option>` +

      categories.map(category => `
        <option value="${category}">
          ${category}
        </option>
      `).join("");
  }
}


function selectCategory(category) {

  if ($("#categoryFilter")) {
    $("#categoryFilter").value = category;
  }

  renderProducts();

  const shop = $("#shop");

  if (shop) {
    shop.scrollIntoView({
      behavior: "smooth"
    });
  }
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function productCard(product) {

  return `
    <article class="product-card">

      <div
        class="product-image-link"
        onclick="openProduct(${product.id})"
        style="cursor:pointer"
      >
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
      </div>

      <div class="product-info">

        <p class="category">
          ${product.cat}
        </p>

        <h3
          onclick="openProduct(${product.id})"
          style="cursor:pointer"
        >
          ${product.name}
        </h3>

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
            onclick="openProduct(${product.id})"
          >
            Details
          </button>

          <button
            class="primary"
            onclick="addToCart(${product.id})"
          >
            Add to cart
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(customList = null) {

  let list = customList
    ? [...customList]
    : [...products];

  const category =
    $("#categoryFilter")?.value || "all";

  const sort =
    $("#sortFilter")?.value || "featured";


  if (!customList && category !== "all") {

    list = list.filter(
      product => product.cat === category
    );
  }


  if (sort === "low") {

    list.sort(
      (a, b) => a.price - b.price
    );
  }


  if (sort === "high") {

    list.sort(
      (a, b) => b.price - a.price
    );
  }


  const grid = $("#productGrid");

  if (!grid) return;


  if (!list.length) {

    grid.innerHTML = `
      <div class="empty">
        No products found.
      </div>
    `;

    return;
  }


  grid.innerHTML = list
    .map(productCard)
    .join("");
}


/* =========================================================
   PRODUCT DETAILS
   ========================================================= */

function createProductModal() {

  if ($("#productModal")) return;


  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        class="modal"
        id="productModal"
      >

        <div
          class="modal-card product-detail-card"
          style="max-width:1000px"
        >

          <button
            class="modal-close"
            onclick="closeProduct()"
          >
            ×
          </button>

          <div
            style="
              display:grid;
              grid-template-columns:1fr 1fr;
              gap:35px;
            "
            class="product-detail-layout"
          >

            <div>

              <img
                id="detailMainImage"
                src=""
                alt=""
                style="
                  width:100%;
                  height:450px;
                  object-fit:cover;
                  border-radius:20px;
                  display:block;
                "
              >

              <div
                id="detailThumbnails"
                style="
                  display:flex;
                  gap:10px;
                  margin-top:12px;
                  overflow:auto;
                "
              ></div>

            </div>


            <div>

              <p
                class="eyebrow"
                id="detailCategory"
              ></p>

              <h2
                id="detailName"
                style="
                  font-size:38px;
                  margin:0 0 15px;
                "
              ></h2>


              <div
                class="price"
                style="margin:15px 0"
              >

                <strong
                  id="detailPrice"
                ></strong>

                <del
                  id="detailOldPrice"
                ></del>

              </div>


              <p
                id="detailDescription"
                style="
                  color:#666;
                  line-height:1.7;
                "
              ></p>


              <h3>
                Product features
              </h3>

              <ul
                id="detailFeatures"
                style="
                  padding-left:20px;
                  line-height:2;
                "
              ></ul>


              <div
                style="
                  display:grid;
                  grid-template-columns:1fr 1fr;
                  gap:10px;
                  margin-top:25px;
                "
              >

                <button
                  class="secondary"
                  id="detailCartBtn"
                >
                  Add to cart
                </button>

                <button
                  class="primary"
                  id="detailBuyBtn"
                >
                  Buy now
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    `
  );
}


function openProduct(id) {

  createProductModal();

  const product = products.find(
    item => item.id === id
  );

  if (!product) return;

  currentProduct = product;
  currentImageIndex = 0;

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


  $("#detailFeatures").innerHTML =
    product.features.map(feature => `
      <li>${feature}</li>
    `).join("");


  renderDetailImage();


  $("#detailCartBtn").onclick = () => {
    addToCart(product.id);
  };


  $("#detailBuyBtn").onclick = () => {
    buyNow(product.id);
  };


  $("#productModal").classList.add("open");

  document.body.style.overflow = "hidden";
}


function renderDetailImage() {

  if (!currentProduct) return;

  const images =
    currentProduct.images || [
      currentProduct.image
    ];


  $("#detailMainImage").src =
    images[currentImageIndex];

  $("#detailMainImage").alt =
    currentProduct.name;


  $("#detailThumbnails").innerHTML =
    images.map((image, index) => `
      <button
        onclick="changeDetailImage(${index})"
        style="
          border:2px solid ${
            index === currentImageIndex
              ? "#111"
              : "#ddd"
          };
          padding:0;
          border-radius:10px;
          overflow:hidden;
          background:white;
          flex:0 0 75px;
        "
      >

        <img
          src="${image}"
          alt=""
          style="
            width:75px;
            height:75px;
            object-fit:cover;
            display:block;
          "
        >

      </button>
    `).join("");
}


function changeDetailImage(index) {

  currentImageIndex = index;

  renderDetailImage();
}


function closeProduct() {

  const modal = $("#productModal");

  if (modal) {
    modal.classList.remove("open");
  }

  document.body.style.overflow = "";
}


/* =========================================================
   SEARCH
   ========================================================= */

function createSearchUI() {

  if ($("#searchPanel")) return;


  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        class="modal"
        id="searchPanel"
        style="align-items:flex-start;padding-top:80px"
      >

        <div
          class="modal-card"
          style="max-width:800px"
        >

          <button
            class="modal-close"
            onclick="closeSearch()"
          >
            ×
          </button>

          <p class="eyebrow">
            SEARCH NEXROOR
          </p>

          <h2>
            Find a product
          </h2>

          <input
            id="searchInput"
            type="search"
            placeholder="Search products, categories..."
            autocomplete="off"
            style="
              width:100%;
              padding:18px;
              border:1px solid #ddd;
              border-radius:14px;
              margin:10px 0 20px;
              font-size:18px;
            "
          >

          <div
            id="searchResults"
            class="product-grid"
            style="
              grid-template-columns:repeat(2,1fr);
            "
          ></div>

        </div>

      </div>
    `
  );


  $("#searchInput").addEventListener(
    "input",
    runSearch
  );


  $("#searchInput").addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {
        closeSearch();
      }

    }
  );
}


function openSearch() {

  createSearchUI();

  $("#searchPanel").classList.add("open");

  setTimeout(() => {
    $("#searchInput").focus();
  }, 100);
}


function closeSearch() {

  const panel = $("#searchPanel");

  if (panel) {
    panel.classList.remove("open");
  }
}


function runSearch() {

  const query =
    $("#searchInput")
      .value
      .trim()
      .toLowerCase();


  let result = products;


  if (query) {

    result = products.filter(product => {

      const searchableText = [
        product.name,
        product.cat,
        product.description,
        ...(product.features || [])
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }


  $("#searchResults").innerHTML =
    result.length
      ? result.map(productCard).join("")
      : `
        <div class="empty">
          No products found for
          "${query}".
        </div>
      `;
}


/* =========================================================
   CART
   ========================================================= */

function addToCart(id) {

  const existing =
    cart.find(item => item.id === id);


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

  const count =
    cart.reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );


  if ($("#cartCount")) {
    $("#cartCount").textContent =
      count;
  }


  if (!cart.length) {

    $("#cartItems").innerHTML = `
      <div class="empty">
        Your cart is empty.
      </div>
    `;

    $("#cartTotal").textContent =
      "₹0";

    $("#checkoutTotal").textContent =
      "₹0";

    return;
  }


  $("#cartItems").innerHTML =
    cart.map(item => {

      const product =
        products.find(
          p => p.id === item.id
        );

      return `
        <div class="cart-item">

          <img
            src="${product.image}"
            alt="${product.name}"
          >

          <div>

            <b>
              ${product.name}
            </b>

            <p>
              ${money(product.price)}
            </p>

            <div class="quantity">

              <button
                onclick="changeQty(${product.id},-1)"
              >
                −
              </button>

              <span>
                ${item.qty}
              </span>

              <button
                onclick="changeQty(${product.id},1)"
              >
                +
              </button>

            </div>

            <button
              class="remove"
              onclick="removeItem(${product.id})"
            >
              Remove
            </button>

          </div>

        </div>
      `;

    }).join("");


  const total =
    cart.reduce(
      (sum, item) => {

        const product =
          products.find(
            p => p.id === item.id
          );

        return sum +
          product.price *
          item.qty;

      },
      0
    );


  $("#cartTotal").textContent =
    money(total);

  $("#checkoutTotal").textContent =
    money(total);
}


function changeQty(id, amount) {

  const item =
    cart.find(
      item => item.id === id
    );

  if (!item) return;


  item.qty += amount;


  if (item.qty <= 0) {

    cart =
      cart.filter(
        item => item.id !== id
      );
  }


  saveCart();

  renderCart();
}


function removeItem(id) {

  cart =
    cart.filter(
      item => item.id !== id
    );

  saveCart();

  renderCart();

  toast("Item removed");
}


/* =========================================================
   CHECKOUT
   ========================================================= */

function openCheckout() {

  if (!cart.length) {

    toast("Your cart is empty");

    return;
  }


  renderCart();

  $("#checkoutModal")
    .classList
    .add("open");
}


function closeCheckout() {

  $("#checkoutModal")
    .classList
    .remove("open");
}


/* =========================================================
   ORDERS
   ========================================================= */

function renderOrders() {

  const orders =
    JSON.parse(
      localStorage.getItem(
        "nexroor_orders"
      ) || "[]"
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

          <b>
            ${order.id}
          </b>

          <p>
            ${order.items} item(s)
            · ${money(order.total)}
          </p>

          <p>
            ${order.name},
            ${order.city}
          </p>

        </div>

        <span>
          Order received
        </span>

      </div>
    `).join("");
}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

function setupEvents() {

  const cartBtn =
    $("#cartBtn");

  if (cartBtn) {

    cartBtn.onclick = () => {

      $("#cartDrawer")
        .classList
        .add("open");

    };
  }


  const closeCart =
    $("#closeCart");

  if (closeCart) {

    closeCart.onclick = () => {

      $("#cartDrawer")
        .classList
        .remove("open");

    };
  }


  const checkoutBtn =
    $("#checkoutBtn");

  if (checkoutBtn) {
    checkoutBtn.onclick =
      openCheckout;
  }


  const closeCheckoutBtn =
    $("#closeCheckout");

  if (closeCheckoutBtn) {
    closeCheckoutBtn.onclick =
      closeCheckout;
  }


  const searchBtn =
    $("#searchBtn");

  if (searchBtn) {
    searchBtn.onclick =
      openSearch;
  }


  const categoryFilter =
    $("#categoryFilter");

  if (categoryFilter) {
    categoryFilter.onchange =
      renderProducts;
  }


  const sortFilter =
    $("#sortFilter");

  if (sortFilter) {
    sortFilter.onchange =
      renderProducts;
  }


  const checkoutForm =
    $("#checkoutForm");


  if (checkoutForm) {

    checkoutForm.onsubmit =
      function(event) {

        event.preventDefault();


        if (!cart.length) {

          toast(
            "Your cart is empty"
          );

          return;
        }


        const form =
          new FormData(
            event.target
          );


        const total =
          cart.reduce(
            (sum, item) => {

              const product =
                products.find(
                  p => p.id === item.id
                );

              return sum +
                product.price *
                item.qty;

            },
            0
          );


        const orders =
          JSON.parse(
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

          name:
            form.get("name"),

          phone:
            form.get("phone"),

          address:
            form.get("address"),

          city:
            form.get("city"),

          pin:
            form.get("pin"),

          payment:
            form.get("payment"),

          total: total,

          items: itemCount,

          date:
            new Date()
              .toISOString()

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
          .classList
          .remove("open");


        const ordersSection =
          $("#orders");

        if (ordersSection) {

          ordersSection.scrollIntoView({
            behavior: "smooth"
          });
        }


        toast(
          "Order placed successfully"
        );
      };
  }
}


/* =========================================================
   CLOSE MODALS WHEN CLICKING BACKGROUND
   ========================================================= */

document.addEventListener(
  "click",
  event => {

    if (
      event.target.id ===
      "productModal"
    ) {
      closeProduct();
    }


    if (
      event.target.id ===
      "searchPanel"
    ) {
      closeSearch();
    }


    if (
      event.target.id ===
      "checkoutModal"
    ) {
      closeCheckout();
    }

  }
);


/* =========================================================
   ESC KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") {
      return;
    }

    closeProduct();
    closeSearch();
    closeCheckout();

  }
);


/* =========================================================
   START APP
   ========================================================= */

renderCategories();

renderProducts();

renderCart();

renderOrders();

setupEvents();
