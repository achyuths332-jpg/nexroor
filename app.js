/* =========================================================
   NEXROOR - COMPLETE STOREFRONT APP
   ========================================================= */

const products = [
  {
    id: "cream",
    name: "Premium Cream Bag",
    category: "Bags",
    price: 899,
    oldPrice: 1499,
    image: "cream-front.jpg",
    images: ["cream-front.jpg"],
    description:
      "A stylish everyday cream bag designed for casual use, shopping, travel and daily essentials.",
    features: [
      "Premium-looking finish",
      "Spacious everyday design",
      "Suitable for casual and daily use",
      "Lightweight and easy to carry"
    ]
  },

  {
    id: "black",
    name: "Classic Black Bag",
    category: "Bags",
    price: 899,
    oldPrice: 1499,
    image: "black-front.jpg",
    images: ["black-front.jpg"],
    description:
      "A classic black everyday bag with a simple and versatile look that works with different outfits.",
    features: [
      "Classic black appearance",
      "Everyday carry design",
      "Versatile style",
      "Lightweight construction"
    ]
  },

  {
    id: "floral",
    name: "Floral Fashion Bag",
    category: "Bags",
    price: 999,
    oldPrice: 1699,
    image: "floral-front.jpg",
    images: [
      "floral-front.jpg",
      "floral-side.jpg",
      "floral-back.jpg"
    ],
    description:
      "A stylish floral-patterned bag with multiple views so you can see the front, side and back before buying.",
    features: [
      "Floral printed design",
      "Front, side and back views",
      "Fashionable everyday style",
      "Suitable for daily use"
    ]
  }
];

/* =========================================================
   STORE STATE
   ========================================================= */

let cart = JSON.parse(localStorage.getItem("nexroor-cart") || "[]");
let currentProduct = null;

/* =========================================================
   HELPERS
   ========================================================= */

function money(value) {
  return "₹" + Number(value).toLocaleString("en-IN");
}

function saveCart() {
  localStorage.setItem("nexroor-cart", JSON.stringify(cart));
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   PRODUCT CARD
   ========================================================= */

function productCard(product) {
  return `
    <article class="product-card" data-product-id="${product.id}">
      
      <div class="product-image-wrap">
        <img
          src="${product.image}"
          alt="${escapeHTML(product.name)}"
          class="product-image"
          loading="lazy"
        />
      </div>

      <div class="product-info">
        <div class="product-category">
          ${escapeHTML(product.category)}
        </div>

        <h3>${escapeHTML(product.name)}</h3>

        <div class="price-row">
          <strong>${money(product.price)}</strong>
          <span class="old-price">${money(product.oldPrice)}</span>
        </div>

        <button
          class="view-product-btn"
          type="button"
          data-action="view"
          data-id="${product.id}"
        >
          View Product
        </button>

        <button
          class="buy-product-btn"
          type="button"
          data-action="buy"
          data-id="${product.id}"
        >
          Buy Now
        </button>
      </div>

    </article>
  `;
}

/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts(list = products) {
  const containers = [
    document.querySelector("#products"),
    document.querySelector(".products"),
    document.querySelector("#product-grid"),
    document.querySelector(".product-grid")
  ].filter(Boolean);

  if (!containers.length) return;

  const html = list.length
    ? list.map(productCard).join("")
    : `
      <div class="no-products">
        <h3>No products found</h3>
        <p>Try another search.</p>
      </div>
    `;

  containers.forEach(container => {
    container.innerHTML = html;
  });
}

/* =========================================================
   PRODUCT DETAILS MODAL
   ========================================================= */

function createProductModal() {
  if (document.querySelector("#nexroor-product-modal")) return;

  const modal = document.createElement("div");

  modal.id = "nexroor-product-modal";

  modal.innerHTML = `
    <div class="nexroor-modal-backdrop" data-close-modal></div>

    <div class="nexroor-modal">

      <button
        class="modal-close"
        type="button"
        aria-label="Close"
        data-close-modal
      >
        ×
      </button>

      <div class="modal-content">

        <div class="modal-gallery">

          <div class="main-image-box">
            <img id="modal-main-image" src="" alt="" />
          </div>

          <div id="modal-thumbnails" class="modal-thumbnails"></div>

        </div>

        <div class="modal-details">

          <div class="product-category" id="modal-category"></div>

          <h2 id="modal-name"></h2>

          <div class="modal-price">
            <strong id="modal-price"></strong>
            <span id="modal-old-price"></span>
          </div>

          <p id="modal-description"></p>

          <h3>Product Information</h3>

          <ul id="modal-features"></ul>

          <div class="modal-actions">

            <button
              id="modal-add-cart"
              type="button"
              class="modal-cart-btn"
            >
              Add to Cart
            </button>

            <button
              id="modal-buy"
              type="button"
              class="modal-buy-btn"
            >
              Buy Now
            </button>

          </div>

        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.addEventListener("click", event => {
    if (
      event.target.matches("[data-close-modal]") ||
      event.target.closest("[data-close-modal]")
    ) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeProductModal();
    }
  });
}

function openProduct(productId) {
  const product = products.find(item => item.id === productId);

  if (!product) return;

  currentProduct = product;

  createProductModal();

  const modal = document.querySelector("#nexroor-product-modal");

  const mainImage = document.querySelector("#modal-main-image");
  const thumbnails = document.querySelector("#modal-thumbnails");

  document.querySelector("#modal-category").textContent =
    product.category;

  document.querySelector("#modal-name").textContent =
    product.name;

  document.querySelector("#modal-price").textContent =
    money(product.price);

  document.querySelector("#modal-old-price").textContent =
    money(product.oldPrice);

  document.querySelector("#modal-description").textContent =
    product.description;

  document.querySelector("#modal-features").innerHTML =
    product.features
      .map(feature => `<li>${escapeHTML(feature)}</li>`)
      .join("");

  mainImage.src = product.images[0];
  mainImage.alt = product.name;

  thumbnails.innerHTML = product.images
    .map((image, index) => `
      <button
        type="button"
        class="modal-thumb ${index === 0 ? "active" : ""}"
        data-image="${image}"
      >
        <img src="${image}" alt="${escapeHTML(product.name)} view ${index + 1}" />
      </button>
    `)
    .join("");

  thumbnails.querySelectorAll(".modal-thumb").forEach(button => {
    button.addEventListener("click", () => {

      thumbnails
        .querySelectorAll(".modal-thumb")
        .forEach(item => item.classList.remove("active"));

      button.classList.add("active");

      mainImage.src = button.dataset.image;
    });
  });

  modal.classList.add("open");
  document.body.classList.add("nexroor-modal-open");
}

function closeProductModal() {
  const modal = document.querySelector("#nexroor-product-modal");

  if (modal) {
    modal.classList.remove("open");
  }

  document.body.classList.remove("nexroor-modal-open");

  currentProduct = null;
}

/* =========================================================
   CART
   ========================================================= */

function addToCart(product) {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  updateCartCount();

  showMessage(`${product.name} added to cart`);
}

function updateCartCount() {
  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  document
    .querySelectorAll(
      "#cart-count, .cart-count, [data-cart-count]"
    )
    .forEach(element => {
      element.textContent = count;
    });
}

function showMessage(message) {
  let box = document.querySelector("#nexroor-message");

  if (!box) {
    box = document.createElement("div");
    box.id = "nexroor-message";
    document.body.appendChild(box);
  }

  box.textContent = message;
  box.classList.add("show");

  clearTimeout(box._timer);

  box._timer = setTimeout(() => {
    box.classList.remove("show");
  }, 2200);
}

/* =========================================================
   BUY NOW
   ========================================================= */

function buyProduct(product) {
  /*
    IMPORTANT:
    This keeps the Buy button functional without pretending
    that Nexroor has its own payment gateway.

    Replace the URL below with the actual Baapstore product
    URL when you have the matching product page.
  */

  const baapstoreSearch =
    "https://www.baapstore.com/search?q=" +
    encodeURIComponent(product.name);

  window.open(
    baapstoreSearch,
    "_blank",
    "noopener,noreferrer"
  );
}

/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {
  const searchInputs = document.querySelectorAll(
    'input[type="search"], #search, .search-input, [data-search]'
  );

  searchInputs.forEach(input => {

    input.addEventListener("input", event => {

      const query = event.target.value
        .trim()
        .toLowerCase();

      const filtered = products.filter(product => {

        const searchableText = [
          product.name,
          product.category,
          product.description,
          ...product.features
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(query);
      });

      renderProducts(filtered);
    });

  });
}

/* =========================================================
   CLICK HANDLER
   ========================================================= */

document.addEventListener("click", event => {

  const viewButton = event.target.closest(
    '[data-action="view"]'
  );

  if (viewButton) {
    openProduct(viewButton.dataset.id);
    return;
  }

  const buyButton = event.target.closest(
    '[data-action="buy"]'
  );

  if (buyButton) {

    const product = products.find(
      item => item.id === buyButton.dataset.id
    );

    if (product) {
      buyProduct(product);
    }

    return;
  }

  if (
    event.target.closest("#modal-add-cart") &&
    currentProduct
  ) {
    addToCart(currentProduct);
    return;
  }

  if (
    event.target.closest("#modal-buy") &&
    currentProduct
  ) {
    buyProduct(currentProduct);
    return;
  }

  const cartButton = event.target.closest(
    "#cart-button, .cart-button, [data-cart]"
  );

  if (cartButton) {
    showCart();
  }

});

/* =========================================================
   CART DISPLAY
   ========================================================= */

function showCart() {

  let cartModal = document.querySelector("#nexroor-cart-modal");

  if (!cartModal) {

    cartModal = document.createElement("div");

    cartModal.id = "nexroor-cart-modal";

    cartModal.innerHTML = `
      <div class="nexroor-modal-backdrop" data-close-cart></div>

      <div class="cart-panel">

        <button
          type="button"
          class="modal-close"
          data-close-cart
        >
          ×
        </button>

        <h2>Your Cart</h2>

        <div id="cart-items"></div>

        <div class="cart-total">
          <span>Total</span>
          <strong id="cart-total-price">₹0</strong>
        </div>

      </div>
    `;

    document.body.appendChild(cartModal);

    cartModal.addEventListener("click", event => {
      if (
        event.target.matches("[data-close-cart]") ||
        event.target.closest("[data-close-cart]")
      ) {
        cartModal.classList.remove("open");
      }
    });
  }

  const itemsContainer =
    document.querySelector("#cart-items");

  if (!cart.length) {

    itemsContainer.innerHTML = `
      <div class="empty-cart">
        <h3>Your cart is empty</h3>
        <p>Add products to your cart to see them here.</p>
      </div>
    `;

  } else {

    itemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">

        <img
          src="${item.image}"
          alt="${escapeHTML(item.name)}"
        />

        <div class="cart-item-info">
          <h3>${escapeHTML(item.name)}</h3>
          <p>${money(item.price)}</p>

          <div class="quantity-controls">

            <button
              type="button"
              data-cart-minus="${item.id}"
            >
              −
            </button>

            <span>${item.quantity}</span>

            <button
              type="button"
              data-cart-plus="${item.id}"
            >
              +
            </button>

          </div>
        </div>

      </div>
    `).join("");
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  document.querySelector("#cart-total-price").textContent =
    money(total);

  cartModal.classList.add("open");
}

/* =========================================================
   CART QUANTITY BUTTONS
   ========================================================= */

document.addEventListener("click", event => {

  const plus = event.target.closest(
    "[data-cart-plus]"
  );

  if (plus) {

    const item = cart.find(
      product => product.id === plus.dataset.cartPlus
    );

    if (item) {
      item.quantity += 1;
      saveCart();
      updateCartCount();
      showCart();
    }

    return;
  }

  const minus = event.target.closest(
    "[data-cart-minus]"
  );

  if (minus) {

    const item = cart.find(
      product => product.id === minus.dataset.cartMinus
    );

    if (item) {

      item.quantity -= 1;

      if (item.quantity <= 0) {
        cart = cart.filter(
          product => product.id !== item.id
        );
      }

      saveCart();
      updateCartCount();
      showCart();
    }
  }

});

/* =========================================================
   INITIALISE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  createProductModal();

  renderProducts(products);

  setupSearch();

  updateCartCount();

  console.log(
    "Nexroor storefront loaded successfully."
  );

});
