/*
  Everyday Cart — clean replacement storefront
  Supplier/source metadata is intentionally kept out of the customer UI.
  IMPORTANT: because this is a static client-side site, anything in app.js can
  still be inspected by a technical visitor. True supplier-data secrecy needs
  a server-side/admin API.
*/

const PRODUCTS = [
  {
    id: 'waffle-maker-red',
    name: 'Waffle Maker (Red)',
    category: 'Kitchen',
    supplierPrice: 364,
    retailPrice: 1300,
    sellingPrice: 799,
    emoji: '🧇',
    description: 'Compact waffle maker with non-stick heating plates for quick sweet or savory waffles.',
    features: ['Non-stick heating plates', 'Quick heating', 'Easy single-action lid', 'Suitable for sweet and savory recipes'],
    images: []
  },
  {
    id: 'usb-garlic-chopper-pink',
    name: 'USB Garlic Chopper (Pink)',
    category: 'Kitchen',
    supplierPrice: 190,
    retailPrice: 680,
    sellingPrice: 399,
    emoji: '🧄',
    description: 'Compact rechargeable-style kitchen chopper for everyday ingredient preparation.',
    features: ['Compact kitchen helper', 'Easy everyday prep', 'Lightweight design', 'Simple to clean'],
    images: []
  },
  {
    id: 'silicone-sink-guard',
    name: 'Silicone Sink Splash Guard (Multicolor)',
    category: 'Home',
    supplierPrice: 179,
    retailPrice: 640,
    sellingPrice: 349,
    emoji: '🚿',
    description: 'Flexible silicone splash guard designed to help keep the counter around the sink dry and tidy.',
    features: ['Flexible silicone', 'Suction-cup mounting', 'No drilling required', 'Water-resistant and easy to clean'],
    images: []
  },
  {
    id: 'magic-cleaning-cloth-black',
    name: 'Pack of 5 Magic Cleaning Cloth (Black)',
    category: 'Cleaning',
    supplierPrice: 196,
    retailPrice: 700,
    sellingPrice: 399,
    emoji: '🧽',
    description: 'Reusable microfiber cleaning cloths for glass, mirrors, stainless steel, kitchen surfaces and more.',
    features: ['Pack of 5', 'Microfiber material', 'Fast water absorption', 'Reusable and washable'],
    images: []
  },
  {
    id: 'oil-sprayer-black',
    name: 'Pack of 2 Oil Sprayer for Cooking (Black)',
    category: 'Kitchen',
    supplierPrice: 201,
    retailPrice: 720,
    sellingPrice: 449,
    emoji: '🫗',
    description: 'Two-piece oil sprayer set designed for controlled application while cooking, grilling or baking.',
    features: ['Pack of 2', 'Transparent glass body', 'Controlled spray', 'Suitable for multiple oils and sauces'],
    images: []
  }
];

// INTERNAL SOURCE AREA — not rendered in the customer-facing product cards.
// Replace image URLs only with URLs you are permitted to use after reseller access.
const SUPPLIER_SOURCE = {
  'waffle-maker-red': {
    sku: 'AL3551010XX',
    productPage: 'https://www.baapstore.com/home-kitchen'
  },
  'usb-garlic-chopper-pink': {
    sku: 'AL355101032',
    productPage: 'https://shop.baapstore.com/products/usb-garlic-chopper-pink-pid66771'
  },
  'silicone-sink-guard': {
    sku: 'AL355101029',
    productPage: 'https://www.baapstore.com/Dropship-Silicone-Sink-Splash-Guard-for-Kitchen-Multicolor-PID66768'
  },
  'magic-cleaning-cloth-black': {
    sku: 'AL355101148',
    productPage: 'https://www.baapstore.com/Dropship-Pack-of-5-Magic-Cleaning-Cloth-Black-PID66915'
  },
  'oil-sprayer-black': {
    sku: 'AL355101157',
    productPage: 'https://shop.baapstore.com/products/pack-of-2-oil-sprayer-for-cooking-black-pid66924'
  }
};

const state = {
  route: 'home',
  selectedProduct: null,
  category: 'All',
  search: '',
  sort: 'featured',
  detailImage: 0,
  detailQty: 1,
  cart: loadJSON('ec_cart', []),
  orders: loadJSON('ec_orders', [])
};

const app = document.querySelector('#app');
const toast = document.querySelector('#toast');

document.querySelector('#year').textContent = new Date().getFullYear();

function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveJSON(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function money(value) { return `₹${Number(value).toLocaleString('en-IN')}`; }
function escapeHTML(value) { return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function getProduct(id) { return PRODUCTS.find(p => p.id === id); }
function cartCount() { return state.cart.reduce((n, i) => n + i.qty, 0); }
function cartSubtotal() { return state.cart.reduce((sum, i) => sum + getProduct(i.id).sellingPrice * i.qty, 0); }
function shipping() { return state.cart.length ? 0 : 0; }
function updateCartBadge() { document.querySelector('#cart-count').textContent = cartCount(); }
function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function placeholder(product, large = false) {
  return `<div class="placeholder-art" aria-label="Product image pending approved supplier image URL"><div><div class="emoji">${product.emoji}</div><span>Product image</span></div></div>`;
}
function imageMarkup(product, index = 0, cls = '') {
  const url = product.images?.[index];
  return url ? `<img class="${cls}" src="${escapeHTML(url)}" alt="${escapeHTML(product.name)}" loading="lazy">` : placeholder(product);
}
function productCard(product) {
  const saving = Math.max(0, product.retailPrice - product.sellingPrice);
  return `<article class="product-card">
    <button class="product-media" data-product="${product.id}" aria-label="View ${escapeHTML(product.name)}">${imageMarkup(product)}</button>
    <div class="product-body">
      <div class="product-meta">${escapeHTML(product.category)}</div>
      <h3 class="product-name">${escapeHTML(product.name)}</h3>
      <div class="price-row"><span class="price">${money(product.sellingPrice)}</span><span class="old-price">${money(product.retailPrice)}</span></div>
      <div class="save">Save ${money(saving)}</div>
      <div class="card-actions">
        <button class="ghost-btn" data-product="${product.id}">Details</button>
        <button class="primary-btn" data-add="${product.id}">Add to cart</button>
      </div>
    </div>
  </article>`;
}

function renderHome() {
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  let list = PRODUCTS.filter(p => state.category === 'All' || p.category === state.category);
  const q = state.search.trim().toLowerCase();
  if (q) list = list.filter(p => `${p.name} ${p.category} ${p.description}`.toLowerCase().includes(q));
  if (state.sort === 'price-low') list.sort((a,b) => a.sellingPrice - b.sellingPrice);
  if (state.sort === 'price-high') list.sort((a,b) => b.sellingPrice - a.sellingPrice);
  if (state.sort === 'name') list.sort((a,b) => a.name.localeCompare(b.name));

  app.innerHTML = `<section class="hero">
    <div class="hero-copy">
      <div class="eyebrow">Simple products · India</div>
      <h1>Useful things for your everyday home.</h1>
      <p>Shop practical kitchen, home and cleaning products with clear pricing, quick browsing and a simple checkout.</p>
    </div>
    <div class="hero-card">
      <div class="eyebrow">Why shop here</div>
      <h2>Clean store. Clear prices.</h2>
      <div class="mini-grid">
        <div class="mini"><strong>₹ pricing</strong><span>Simple checkout</span></div>
        <div class="mini"><strong>Easy browsing</strong><span>Search & filters</span></div>
        <div class="mini"><strong>Mobile ready</strong><span>Built for phones</span></div>
        <div class="mini"><strong>Useful picks</strong><span>Everyday essentials</span></div>
      </div>
    </div>
  </section>
  <section class="toolbar">
    <div class="toolbar-row">
      <input id="search" class="search" type="search" placeholder="Search products…" value="${escapeHTML(state.search)}" aria-label="Search products">
      <select id="sort" class="search" aria-label="Sort products">
        <option value="featured" ${state.sort==='featured'?'selected':''}>Featured</option>
        <option value="price-low" ${state.sort==='price-low'?'selected':''}>Price: low to high</option>
        <option value="price-high" ${state.sort==='price-high'?'selected':''}>Price: high to low</option>
        <option value="name" ${state.sort==='name'?'selected':''}>Name A–Z</option>
      </select>
    </div>
    <div class="category-row">${categories.map(c => `<button class="category-btn ${state.category===c?'active':''}" data-category="${c}">${c}</button>`).join('')}</div>
  </section>
  <section>
    <div class="section-head"><div><h2>Featured products</h2><p>${list.length} product${list.length===1?'':'s'}</p></div></div>
    ${list.length ? `<div class="product-grid">${list.map(productCard).join('')}</div>` : `<div class="empty"><h3>No products found</h3><p>Try another search or category.</p></div>`}
  </section>`;

  document.querySelector('#search').addEventListener('input', e => { state.search = e.target.value; renderHome(); focusSearch(); });
  document.querySelector('#sort').addEventListener('change', e => { state.sort = e.target.value; renderHome(); });
}
function focusSearch() { const el = document.querySelector('#search'); if (el) { el.focus(); el.setSelectionRange(el.value.length, el.value.length); } }

function renderDetail() {
  const p = getProduct(state.selectedProduct);
  if (!p) return navigate('home');
  const imageCount = Math.max(1, p.images?.length || 1);
  app.innerHTML = `<section class="detail">
    <button class="ghost-btn back" data-route="home">← Back to products</button>
    <div class="detail-grid">
      <div>
        <div class="gallery-main">${imageMarkup(p, state.detailImage)}</div>
        <div class="gallery-thumbs">${Array.from({length:imageCount},(_,i)=>`<button class="thumb ${i===state.detailImage?'active':''}" data-gallery="${i}">${imageMarkup(p,i)}</button>`).join('')}</div>
      </div>
      <div>
        <div class="eyebrow">${escapeHTML(p.category)}</div>
        <h1>${escapeHTML(p.name)}</h1>
        <div class="price-row"><span class="price">${money(p.sellingPrice)}</span><span class="old-price">${money(p.retailPrice)}</span></div>
        <p class="detail-copy">${escapeHTML(p.description)}</p>
        <h3>Features</h3>
        <ul class="feature-list">${p.features.map(f=>`<li>${escapeHTML(f)}</li>`).join('')}</ul>
        <div class="buy-box">
          <div class="qty"><button data-qty="-1">−</button><strong>${state.detailQty}</strong><button data-qty="1">+</button></div>
          <div class="buy-actions"><button class="ghost-btn" data-add="${p.id}" data-detail-qty="${state.detailQty}">Add to cart</button><button class="primary-btn" data-buy="${p.id}">Buy now</button></div>
        </div>
      </div>
    </div>
  </section>`;
}

function renderCart() {
  if (!state.cart.length) {
    app.innerHTML = `<section class="empty"><h2>Your cart is empty</h2><p>Add something useful and it will appear here.</p><button class="primary-btn" data-route="home">Continue shopping</button></section>`;
    return;
  }
  const subtotal = cartSubtotal();
  app.innerHTML = `<section class="cart-layout">
    <div class="cart-list"><div class="section-head" style="padding-top:0"><div><h2>Your cart</h2><p>${cartCount()} item${cartCount()===1?'':'s'}</p></div></div>
      ${state.cart.map(item => { const p=getProduct(item.id); return `<div class="cart-item">
        <div class="cart-thumb">${imageMarkup(p)}</div>
        <div><h3>${escapeHTML(p.name)}</h3><p>${money(p.sellingPrice)} each</p><div class="qty"><button data-cart-qty="-1" data-id="${p.id}">−</button><strong>${item.qty}</strong><button data-cart-qty="1" data-id="${p.id}">+</button></div></div>
        <div class="cart-item-right"><div class="line-price">${money(p.sellingPrice*item.qty)}</div><button class="danger-btn" data-remove="${p.id}">Remove</button></div>
      </div>`; }).join('')}
    </div>
    <aside class="summary"><h3>Order summary</h3><div class="summary-row"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><div class="summary-row"><span>Shipping</span><strong>${shipping() ? money(shipping()) : 'Free'}</strong></div><div class="summary-row summary-total"><span>Total</span><strong>${money(subtotal+shipping())}</strong></div><button class="primary-btn" style="width:100%;margin-top:14px" data-route="checkout">Proceed to checkout</button></aside>
  </section>`;
}

function renderCheckout() {
  if (!state.cart.length) return navigate('cart');
  const subtotal = cartSubtotal();
  app.innerHTML = `<section class="checkout"><button class="ghost-btn back" data-route="cart">← Back to cart</button><div class="checkout-card"><h2>Checkout</h2><p class="detail-copy">Enter your delivery details. This demo stores orders in your browser; connect a real payment/order API before going live.</p>
    <form id="checkout-form">
      <div class="form-grid">
        <div class="field"><label for="name">Full name</label><input id="name" name="name" required></div>
        <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" inputmode="tel" required></div>
        <div class="field full"><label for="address">Address</label><textarea id="address" name="address" required></textarea></div>
        <div class="field"><label for="city">City</label><input id="city" name="city" required></div>
        <div class="field"><label for="pincode">PIN code</label><input id="pincode" name="pincode" inputmode="numeric" required></div>
        <div class="field full"><label for="payment">Payment method</label><select id="payment" name="payment"><option>Cash on Delivery</option><option>Online Payment (connect gateway)</option></select></div>
      </div>
      <div class="payment-note">Total today: <strong>${money(subtotal)}</strong>. No real payment is processed by this static demo.</div>
      <button class="primary-btn" type="submit">Place order</button>
    </form></div></section>`;
  document.querySelector('#checkout-form').addEventListener('submit', placeOrder);
}

function placeOrder(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget).entries());
  const order = { id: `EC-${Date.now().toString().slice(-8)}`, date: new Date().toISOString(), status: 'Received', customer: data, items: state.cart, total: cartSubtotal() };
  state.orders.unshift(order); state.cart = []; saveJSON('ec_orders', state.orders); saveJSON('ec_cart', state.cart); updateCartBadge();
  notify('Order placed');
  state.route='orders'; render();
}

function renderOrders() {
  app.innerHTML = `<section class="orders"><div class="section-head" style="padding-top:0"><div><h2>Orders</h2><p>Your orders saved on this device.</p></div></div>
    ${state.orders.length ? `<div class="order-stack">${state.orders.map(o=>`<article class="order-card"><div><h3>${o.id}</h3><p>${new Date(o.date).toLocaleString('en-IN')}</p><p>${o.items.reduce((n,i)=>n+i.qty,0)} item${o.items.reduce((n,i)=>n+i.qty,0)===1?'':'s'} · ${money(o.total)}</p></div><div class="order-status"><span class="status">${escapeHTML(o.status)}</span></div></article>`).join('')}</div>` : `<div class="empty"><h3>No orders yet</h3><p>Completed orders will appear here.</p><button class="primary-btn" data-route="home">Shop now</button></div>`}
  </section>`;
}

function addToCart(id, qty=1) {
  const item = state.cart.find(i => i.id === id);
  if (item) item.qty += qty; else state.cart.push({id, qty});
  state.cart = state.cart.filter(i => i.qty > 0); saveJSON('ec_cart', state.cart); updateCartBadge(); notify('Added to cart');
}
function buyNow(id) { addToCart(id, 1); navigate('checkout'); }

function navigate(route, productId=null) {
  state.route = route;
  if (productId) { state.selectedProduct = productId; state.detailImage=0; state.detailQty=1; }
  window.history.replaceState({}, '', productId ? `#product/${productId}` : `#${route}`);
  render(); window.scrollTo({top:0, behavior:'smooth'});
}
function render() {
  if (state.route === 'home') renderHome();
  else if (state.route === 'product') renderDetail();
  else if (state.route === 'cart') renderCart();
  else if (state.route === 'checkout') renderCheckout();
  else if (state.route === 'orders') renderOrders();
  updateCartBadge();
}

function routeFromHash() {
  const hash = location.hash.replace(/^#/, '');
  if (hash.startsWith('product/')) { const id=hash.slice(8); if(getProduct(id)){ state.selectedProduct=id; state.route='product'; return; } }
  if (['cart','checkout','orders'].includes(hash)) state.route=hash; else state.route='home';
}

document.addEventListener('click', e => {
  const routeEl = e.target.closest('[data-route]');
  if (routeEl) return navigate(routeEl.dataset.route);
  const productEl = e.target.closest('[data-product]');
  if (productEl) return navigate('product', productEl.dataset.product);
  const addEl = e.target.closest('[data-add]');
  if (addEl) return addToCart(addEl.dataset.add, Number(addEl.dataset.detailQty || 1));
  const buyEl = e.target.closest('[data-buy]');
  if (buyEl) return buyNow(buyEl.dataset.buy);
  const cat = e.target.closest('[data-category]');
  if (cat) { state.category=cat.dataset.category; return renderHome(); }
  const qty = e.target.closest('[data-qty]');
  if (qty) { state.detailQty=Math.max(1,state.detailQty+Number(qty.dataset.qty)); return renderDetail(); }
  const cartQty = e.target.closest('[data-cart-qty]');
  if (cartQty) { const item=state.cart.find(i=>i.id===cartQty.dataset.id); if(item){ item.qty+=Number(cartQty.dataset.cartQty); if(item.qty<=0) state.cart=state.cart.filter(i=>i!==item); saveJSON('ec_cart',state.cart); renderCart(); } return; }
  const remove = e.target.closest('[data-remove]');
  if (remove) { state.cart=state.cart.filter(i=>i.id!==remove.dataset.remove); saveJSON('ec_cart',state.cart); renderCart(); return notify('Removed from cart'); }
  const gallery = e.target.closest('[data-gallery]');
  if (gallery) { state.detailImage=Number(gallery.dataset.gallery); return renderDetail(); }
});

window.addEventListener('hashchange', () => { routeFromHash(); render(); });
routeFromHash();
render();
