/* =========================================================
   NEXROOR - APP.JS
   Product details + search + categories + cart + checkout
   ========================================================= */


/* ---------------------------------------------------------
   PRODUCTS
   --------------------------------------------------------- */

const products = [

  {
    id: 1,
    name: "Wireless ANC Headphones",
    cat: "Electronics",
    price: 2499,
    old: 3499,

    description:
      "Enjoy immersive sound with wireless ANC headphones designed for music, calls and everyday use.",

    features: [
      "Active noise cancellation",
      "Wireless Bluetooth connection",
      "Comfortable over-ear design",
      "Built for everyday listening",
      "Rechargeable battery"
    ],

    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=85"
    ]
  },


  {
    id: 2,
    name: "Minimal Smart Watch",
    cat: "Electronics",
    price: 1999,
    old: 2999,

    description:
      "A modern smart watch with a clean design for everyday activity tracking and notifications.",

    features: [
      "Modern minimal design",
      "Activity tracking",
      "Digital display",
      "Comfortable wrist fit",
      "Suitable for everyday use"
    ],

    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=85"
    ]
  },


  {
    id: 3,
    name: "Everyday Backpack",
    cat: "Fashion",
    price: 1299,
    old: 1799,

    description:
      "A practical everyday backpack suitable for work, college, travel and daily carrying.",

    features: [
      "Spacious main compartment",
      "Everyday carry design",
      "Comfortable shoulder straps",
      "Suitable for work and travel",
      "Modern minimalist look"
    ],

    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=900&q=85"
    ]
  },


  {
    id: 4,
    name: "Portable Coffee Maker",
    cat: "Home & Kitchen",
    price: 1799,
    old: 2499,

    description:
      "A compact coffee-making solution designed for convenient use at home, work or while travelling.",

    features: [
      "Compact design",
      "Easy to carry",
      "Suitable for home and travel",
      "Simple operation",
      "Modern appearance"
    ],

    images: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=900&q=85"
    ]
  },


  {
    id: 5,
    name: "Sunglasses Classic",
    cat: "Fashion",
    price: 899,
    old: 1299,

    description:
      "Classic everyday sunglasses with a versatile style that works with different outfits.",

    features: [
      "Classic frame design",
      "Lightweight construction",
      "Everyday fashion accessory",
      "Versatile styling",
      "Comfortable fit"
    ],

    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1511499767150-5b5e8f5c7d9b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=85"
    ]
  },


  {
    id: 6,
    name: "Modern Desk Lamp",
    cat: "Home & Kitchen",
    price: 1099,
    old: 1599,

    description:
      "A modern desk lamp designed to add practical lighting to your workspace, study area or bedside table.",

    features: [
      "Modern minimalist design",
      "Suitable for desks and tables",
      "Compact footprint",
      "Useful for study and work",
      "Contemporary appearance"
    ],

    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1534281308479-cf7a0c6f3a58?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85"
    ]
  },


  {
    id: 7,
    name: "Skincare Essentials",
    cat: "Beauty",
    price: 799,
    old: 1199,

    description:
      "A convenient skincare essentials collection designed for simple everyday personal-care routines.",

    features: [
      "Everyday skincare collection",
      "Easy to use",
      "Suitable for personal-care routines",
      "Convenient packaging",
      "Ideal for everyday use"
    ],

    images: [
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85"
    ]
  },


  {
    id: 8,
    name: "Compact Bluetooth Speaker",
    cat: "Electronics",
    price: 1399,
    old: 1899,

    description:
      "A compact Bluetooth speaker made for convenient wireless listening at home, outdoors and while travelling.",

    features: [
      "Bluetooth wireless connection",
      "Compact portable design",
      "Suitable for everyday listening",
      "Easy to carry",
      "Modern appearance"
    ],

    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=85"
    ]
  }

];


/* ---------------------------------------------------------
   CATEGORY IMAGES
   --------------------------------------------------------- */

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


/* ---------------------------------------------------------
   CART
   --------------------------------------------------------- */

let cart = JSON.parse(
  localStorage.getItem("nexroor_cart") || "[]"
);


/* ---------------------------------------------------------
   HELPER
   --------------------------------------------------------- */

const $ = selector =>
  document.querySelector(selector);


function money(value) {

  return "₹" +
    Number(value).toLocaleString("en-IN");

}


/* ---------------------------------------------------------
   SAVE CART
   --------------------------------------------------------- */

function saveCart() {

  localStorage.setItem(
    "nexroor_cart",
    JSON.stringify(cart)
  );

}


/* ---------------------------------------------------------
   TOAST
   --------------------------------------------------------- */

function toast(message) {

  const box = $("#toast");

  if (!box) return;

  box.textContent = message;

  box.classList.add("show");

  setTimeout(() => {

    box.classList.remove("show");

  }, 2200);

}


/* ---------------------------------------------------------
   RENDER CATEGORIES
   --------------------------------------------------------- */

function renderCategories() {

  const categories = [
    ...new Set(
      products.map(product => product.cat)
    )
  ];


  $("#categoryGrid").innerHTML =
    categories.map(category => `

      <button
        class="category-card"
        type="button"
        onclick="selectCategory('${category}')">

        <img
          src="${categoryImages[category]}"
          alt="${category}"
          loading="lazy">

        <span>
          ${category}
        </span>

      </button>

    `).join("");


  $("#categoryFilter").innerHTML =

    `<option value="all">
      All categories
    </option>` +

    categories.map(category => `

      <option value="${category}">
        ${category}
      </option>

    `).join("");

}


/* ---------------------------------------------------------
   SELECT CATEGORY
   --------------------------------------------------------- */

function selectCategory(category) {

  $("#categoryFilter").value = category;

  renderProducts();

  document
    .querySelector("#shop")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* ---------------------------------------------------------
   PRODUCT CARD
   --------------------------------------------------------- */

function productCard(product) {

  return `

    <article
      class="product-card"
      onclick="openProduct(${product.id})">

      <div class="product-image-wrap">

        <img
          src="${product.images[0]}"
          alt="${product.name}"
          loading="lazy">

        <span class="view-product">
          View details
        </span>

      </div>


      <div class="product-info">

        <p class="category">
          ${product.cat}
        </p>

        <h3>
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


        <div
          class="product-actions"
          onclick="event.stopPropagation()">

          <button
            class="secondary"
            type="button"
            onclick="addToCart(${product.id})">

            Add to cart

          </button>


          <button
            class="primary"
            type="button"
            onclick="buyNow(${product.id})">

            Buy now

          </button>

        </div>

      </div>

    </article>

  `;

}


/* ---------------------------------------------------------
   RENDER PRODUCTS
   --------------------------------------------------------- */

function renderProducts(listOverride = null) {

  let list =
    listOverride
      ? [...listOverride]
      : [...products];


  const category =
    $("#categoryFilter").value;

  const sort =
    $("#sortFilter").value;


  if (!listOverride && category !== "all") {

    list = list.filter(
      product =>
        product.cat === category
    );

  }


  if (sort === "low") {

    list.sort(
      (a, b) =>
        a.price - b.price
    );

  }


  if (sort === "high") {

    list.sort(
      (a, b) =>
        b.price - a.price
    );

  }


  if (!list.length) {

    $("#productGrid").innerHTML = `

      <div class="empty product-empty">

        No products found.

      </div>

    `;

    return;

  }


  $("#productGrid").innerHTML =
    list.map(productCard).join("");

}


/* ---------------------------------------------------------
   OPEN PRODUCT DETAILS
   --------------------------------------------------------- */

function openProduct(id) {

  const product =
    products.find(
      item => item.id === Number(id)
    );


  if (!product) {

    toast("Product not found");

    return;

  }


  const details =
    $("#productDetails");


  details.innerHTML = `

    <div class="product-detail-layout">


      <div class="product-gallery">


        <div class="main-product-image">

          <img
            id="mainProductImage"
            src="${product.images[0]}"
            alt="${product.name}">

        </div>


        <div class="thumbnail-list">

          ${product.images.map((image, index) => `

            <button
              type="button"
              class="product-thumbnail ${index === 0 ? "active" : ""}"
              onclick="changeProductImage(
                '${image}',
                this
              )">

              <img
                src="${image}"
                alt="${product.name} image ${index + 1}">

            </button>

          `).join("")}

        </div>

      </div>


      <div class="product-detail-info">

        <p class="category">
          ${product.cat}
        </p>


        <h2>
          ${product.name}
        </h2>


        <div class="detail-price">

          <strong>
            ${money(product.price)}
          </strong>

          <del>
            ${money(product.old)}
          </del>

        </div>


        <p class="product-description">
          ${product.description}
        </p>


        <h3>
          Product information
        </h3>


        <ul class="feature-list">

          ${product.features.map(feature => `

            <li>
              ${feature}
            </li>

          `).join("")}

        </ul>


        <div class="detail-actions">

          <button
            class="secondary"
            type="button"
            onclick="addToCart(${product.id})">

            Add to cart

          </button>


          <button
            class="primary"
            type="button"
            onclick="buyNow(${product.id})">

            Buy now

          </button>

        </div>

      </div>

    </div>

  `;


  $("#productModal")
    .classList
    .add("open");

}


/* ---------------------------------------------------------
   CHANGE PRODUCT IMAGE
   --------------------------------------------------------- */

function changeProductImage(image, button) {

  const main =
    $("#mainProductImage");


  if (main) {

    main.src = image;

  }


  document
    .querySelectorAll(".product-thumbnail")
    .forEach(item => {

      item.classList.remove("active");

    });


  button.classList.add("active");

}


/* ---------------------------------------------------------
   CLOSE PRODUCT
   --------------------------------------------------------- */

function closeProduct() {

  $("#productModal")
    .classList
    .remove("open");

}


/* ---------------------------------------------------------
   ADD TO CART
   --------------------------------------------------------- */

function addToCart(id) {

  id = Number(id);


  const existing =
    cart.find(
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


/* ---------------------------------------------------------
   BUY NOW
   --------------------------------------------------------- */

function buyNow(id) {

  id = Number(id);


  cart = [{

    id: id,
    qty: 1

  }];


  saveCart();

  renderCart();

  closeProduct();

  openCheckout();

}


/* ---------------------------------------------------------
   RENDER CART
   --------------------------------------------------------- */

function renderCart() {

  const count =
    cart.reduce(
      (sum, item) =>
        sum + item.qty,
      0
    );


  $("#cartCount").textContent =
    count;


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


      if (!product) return "";


      return `

        <div class="cart-item">

          <img
            src="${product.images[0]}"
            alt="${product.name}">


          <div class="cart-item-info">

            <b>
              ${product.name}
            </b>

            <p>
              ${money(product.price)}
            </p>


            <div class="quantity">

              <button
                type="button"
                onclick="changeQty(${product.id}, -1)">
                −
              </button>

              <span>
                ${item.qty}
              </span>

              <button
                type="button"
                onclick="changeQty(${product.id}, 1)">
                +
              </button>

            </div>


            <button
              class="remove"
              type="button"
              onclick="removeItem(${product.id})">

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


        return product
          ? sum +
            product.price *
            item.qty
          : sum;

      },
      0
    );


  $("#cartTotal").textContent =
    money(total);

  $("#checkoutTotal").textContent =
    money(total);

}


/* ---------------------------------------------------------
   CHANGE QUANTITY
   --------------------------------------------------------- */

function changeQty(id, amount) {

  const item =
    cart.find(
      item => item.id === Number(id)
    );


  if (!item) return;


  item.qty += amount;


  if (item.qty <= 0) {

    cart =
      cart.filter(
        item =>
          item.id !== Number(id)
      );

  }


  saveCart();

  renderCart();

}


/* ---------------------------------------------------------
   REMOVE ITEM
   --------------------------------------------------------- */

function removeItem(id) {

  cart =
    cart.filter(
      item =>
        item.id !== Number(id)
    );


  saveCart();

  renderCart();

  toast("Item removed");

}


/* ---------------------------------------------------------
   OPEN CHECKOUT
   --------------------------------------------------------- */

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


/* ---------------------------------------------------------
   CLOSE CHECKOUT
   --------------------------------------------------------- */

function closeCheckout() {

  $("#checkoutModal")
    .classList
    .remove("open");

}


/* ---------------------------------------------------------
   ORDERS
   --------------------------------------------------------- */

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
            ${order.items}
            item(s) ·
            ${money(order.total)}
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


/* ---------------------------------------------------------
   SEARCH
   --------------------------------------------------------- */

function performSearch() {

  const search =
    prompt(
      "Search products by name or category:"
    );


  if (search === null) return;


  const query =
    search.trim().toLowerCase();


  if (!query) {

    $("#searchStatus").textContent = "";

    renderProducts();

    return;

  }


  const result =
    products.filter(product =>

      product.name
        .toLowerCase()
        .includes(query)

      ||

      product.cat
        .toLowerCase()
        .includes(query)

      ||

      product.description
        .toLowerCase()
        .includes(query)

    );


  $("#categoryFilter").value =
    "all";


  $("#sortFilter").value =
    "featured";


  $("#searchStatus").textContent =
    `Search results for "${search}"`;


  renderProducts(result);


  document
    .querySelector("#shop")
    .scrollIntoView({
      behavior: "smooth"
    });

}


/* ---------------------------------------------------------
   EVENTS
   --------------------------------------------------------- */

$("#cartBtn").onclick = () => {

  $("#cartDrawer")
    .classList
    .add("open");

};


$("#closeCart").onclick = () => {

  $("#cartDrawer")
    .classList
    .remove("open");

};


$("#checkoutBtn").onclick =
  openCheckout;


$("#closeCheckout").onclick =
  closeCheckout;


$("#closeProduct").onclick =
  closeProduct;


$("#categoryFilter").onchange =
  () => {

    $("#searchStatus").textContent = "";

    renderProducts();

  };


$("#sortFilter").onchange =
  () => {

    renderProducts();

  };


$("#searchBtn").onclick =
  performSearch;


/* ---------------------------------------------------------
   CLOSE MODALS WHEN CLICKING OUTSIDE
   --------------------------------------------------------- */

$("#productModal").addEventListener(
  "click",
  event => {

    if (
      event.target ===
      $("#productModal")
    ) {

      closeProduct();

    }

  }
);


$("#checkoutModal").addEventListener(
  "click",
  event => {

    if (
      event.target ===
      $("#checkoutModal")
    ) {

      closeCheckout();

    }

  }
);


/* ---------------------------------------------------------
   CHECKOUT
   --------------------------------------------------------- */

$("#checkoutForm").onsubmit =
  function(event) {

    event.preventDefault();


    if (!cart.length) {

      toast("Your cart is empty");

      return;

    }


    const form =
      new FormData(event.target);


    const total =
      cart.reduce(
        (sum, item) => {

          const product =
            products.find(
              p => p.id === item.id
            );


          return product
            ? sum +
              product.price *
              item.qty
            : sum;

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

      items:
        itemCount,

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
      .classList
      .remove("open");


    document
      .querySelector("#orders")
      .scrollIntoView({
        behavior: "smooth"
      });


    toast(
      "Order placed successfully"
    );

  };


/* ---------------------------------------------------------
   ESC KEY
   --------------------------------------------------------- */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape")
      return;


    closeProduct();

    closeCheckout();

    $("#cartDrawer")
      .classList
      .remove("open");

  }
);


/* ---------------------------------------------------------
   INITIALIZE
   --------------------------------------------------------- */

renderCategories();

renderProducts();

renderCart();

renderOrders();
