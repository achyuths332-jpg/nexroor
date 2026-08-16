const products = [
 {id:1,name:"Wireless ANC Headphones",cat:"Electronics",price:2499,old:3299,img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85"},
 {id:2,name:"Minimal Smart Watch",cat:"Electronics",price:1999,old:2799,img:"https://images.unsplash.com/photo-1546868871-7041f2a55e6f?auto=format&fit=crop&w=900&q=85"},
 {id:3,name:"Everyday Backpack",cat:"Fashion",price:1299,old:1799,img:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85"},
 {id:4,name:"Portable Coffee Maker",cat:"Home & Kitchen",price:1599,old:2199,img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"},
 {id:5,name:"Sunglasses Classic",cat:"Fashion",price:899,old:1299,img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85"},
 {id:6,name:"Desk Lamp",cat:"Home & Kitchen",price:999,old:1499,img:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85"},
 {id:7,name:"Skincare Essentials",cat:"Beauty",price:1199,old:1599,img:"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85"},
 {id:8,name:"Compact Bluetooth Speaker",cat:"Electronics",price:1399,old:1899,img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85"}
];
const categoryImages={
 Electronics:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
 Fashion:"https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80",
 "Home & Kitchen":"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80",
 Beauty:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80"
};
let cart=JSON.parse(localStorage.getItem("nexroor_cart")||"[]");
const $=s=>document.querySelector(s), money=n=>`₹${n.toLocaleString("en-IN")}`;
function save(){localStorage.setItem("nexroor_cart",JSON.stringify(cart))}
function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),1800)}
function renderCategories(){
 const cats=[...new Set(products.map(p=>p.cat))];
 $("#categoryGrid").innerHTML=cats.map(c=>`<button class="category" data-cat="${c}"><img src="${categoryImages[c]}" alt="${c}"><b>${c}</b></button>`).join("");
 $("#categoryFilter").innerHTML='<option value="all">All categories</option>'+cats.map(c=>`<option>${c}</option>`).join("");
 document.querySelectorAll(".category").forEach(b=>b.onclick=()=>{$("#categoryFilter").value=b.dataset.cat;renderProducts();location.hash="shop"});
}
function renderProducts(){
 let list=[...products], cat=$("#categoryFilter").value, sort=$("#sortFilter").value;
 if(cat!=="all")list=list.filter(p=>p.cat===cat);
 if(sort==="low")list.sort((a,b)=>a.price-b.price); if(sort==="high")list.sort((a,b)=>b.price-a.price);
 $("#productGrid").innerHTML=list.map(p=>`<article class="product"><div class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></div><div class="product-body"><span class="tag">${p.cat}</span><h3>${p.name}</h3><div class="price">${money(p.price)} <span class="old">${money(p.old)}</span></div><div class="product-actions"><button onclick="addToCart(${p.id})">Add to cart</button><button class="buy" onclick="buyNow(${p.id})">Buy now</button></div></div></article>`).join("");
}
function addToCart(id){const x=cart.find(i=>i.id===id);x?x.qty++:cart.push({id,qty:1});save();renderCart();toast("Added to cart")}
function buyNow(id){cart=[{id,qty:1}];save();openCheckout()}
function renderCart(){
 $("#cartCount").textContent=cart.reduce((s,i)=>s+i.qty,0);
 $("#cartItems").innerHTML=cart.map(i=>{const p=products.find(x=>x.id===i.id);return `<div class="cart-line"><img src="${p.img}" alt=""><div><b>${p.name}</b><div>${money(p.price)}</div><div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div></div><button onclick="removeItem(${p.id})">×</button></div>`}).join("")||'<div class="empty">Your cart is empty.</div>';
 const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
 $("#cartTotal").textContent=money(total);$("#checkoutTotal").textContent=money(total);
}
function changeQty(id,n){const x=cart.find(i=>i.id===id);x.qty+=n;if(x.qty<=0)cart=cart.filter(i=>i.id!==id);save();renderCart()}
function removeItem(id){cart=cart.filter(i=>i.id!==id);save();renderCart()}
function openCheckout(){if(!cart.length){toast("Add a product first");return}$("#checkoutModal").classList.add("open");renderCart()}
function renderOrders(){
 const orders=JSON.parse(localStorage.getItem("nexroor_orders")||"[]");
 $("#ordersList").innerHTML=orders.length?orders.map(o=>`<div class="order"><div><b>${o.id}</b><div>${o.items} item(s) · ${money(o.total)}</div><small>${o.name}, ${o.city}</small></div><span class="status">${o.status}</span></div>`).join(""):'<div class="empty">No orders yet. Your placed orders will appear here.</div>';
}
$("#cartBtn").onclick=()=>$("#cartDrawer").classList.add("open");
$("#closeCart").onclick=()=>$("#cartDrawer").classList.remove("open");
$("#checkoutBtn").onclick=()=>{if(!cart.length){toast("Your cart is empty");return}$("#cartDrawer").classList.remove("open");openCheckout()};
$("#closeCheckout").onclick=()=>$("#checkoutModal").classList.remove("open");
$("#categoryFilter").onchange=renderProducts;$("#sortFilter").onchange=renderProducts;
$("#checkoutForm").onsubmit=e=>{
 e.preventDefault(); const f=new FormData(e.target);
 const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
 const orders=JSON.parse(localStorage.getItem("nexroor_orders")||"[]");
 orders.unshift({id:"NX"+Date.now().toString().slice(-8),name:f.get("name"),city:f.get("city"),items:cart.reduce((s,i)=>s+i.qty,0),total,status:"Order received"});
 localStorage.setItem("nexroor_orders",JSON.stringify(orders));cart=[];save();renderCart();renderOrders();e.target.reset();$("#checkoutModal").classList.remove("open");toast("Order placed successfully");location.hash="orders";
};
renderCategories();renderProducts();renderCart();renderOrders();
