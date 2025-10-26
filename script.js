const CART_KEY = 'momento_store_cart';
let PRODUCTS = [
  {
    "id": 1,
    "ar": "قميص قطن كلاسيكي",
    "en": "Classic Cotton Shirt",
    "price": 399,
    "img": "https://images.unsplash.com/photo-1520975910232-0b6d1f0a5f22?w=1200&q=80&auto=format&fit=crop",
    "cat": "shirts",
    "desc_ar": "قميص قطني مريح مناسب للعمل والخروج.",
    "desc_en": "Comfortable cotton shirt, perfect for work and outings.",
    "images": [
      "https://images.unsplash.com/photo-1520975910232-0b6d1f0a5f22?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  },
  {
    "id": 2,
    "ar": "تيشيرت بولو",
    "en": "Polo T-Shirt",
    "price": 299,
    "img": "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80&auto=format&fit=crop",
    "cat": "shirts",
    "desc_ar": "تيشيرت بولو أنيق بقصة مريحة.",
    "desc_en": "Stylish polo with a relaxed fit.",
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  },
  {
    "id": 3,
    "ar": "جينز داكن",
    "en": "Dark Jeans",
    "price": 499,
    "img": "https://images.unsplash.com/photo-1526178613214-32d2a90a9b3e?w=1200&q=80&auto=format&fit=crop",
    "cat": "pants",
    "desc_ar": "جينز متين وقصة عصرية.",
    "desc_en": "Durable jeans with a modern cut.",
    "images": [
      "https://images.unsplash.com/photo-1526178613214-32d2a90a9b3e?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  },
  {
    "id": 4,
    "ar": "بنطال تشينو",
    "en": "Chino Pants",
    "price": 449,
    "img": "https://images.unsplash.com/photo-1562158070-5b5f7d6a3d4b?w=1200&q=80&auto=format&fit=crop",
    "cat": "pants",
    "desc_ar": "بنطال تشينو خفيف ومناسب للموسم الحار.",
    "desc_en": "Lightweight chino pants, great for warm weather.",
    "images": [
      "https://images.unsplash.com/photo-1562158070-5b5f7d6a3d4b?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  },
  {
    "id": 5,
    "ar": "سترة خفيفة",
    "en": "Light Jacket",
    "price": 799,
    "img": "https://images.unsplash.com/photo-1526178613214-32d2a90a9b3e?w=1200&q=80&auto=format&fit=crop",
    "cat": "jackets",
    "desc_ar": "سترة خفيفة مقاومة للرياح.",
    "desc_en": "Wind-resistant light jacket.",
    "images": [
      "https://images.unsplash.com/photo-1526178613214-32d2a90a9b3e?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  },
  {
    "id": 6,
    "ar": "هودي بغطاء",
    "en": "Hoodie",
    "price": 549,
    "img": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80&auto=format&fit=crop",
    "cat": "hoodies",
    "desc_ar": "هودي دافئ ومريح للوقت الحر.",
    "desc_en": "Warm and comfy hoodie for leisure time.",
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  },
  {
    "id": 7,
    "ar": "قميص بولو للأطفال",
    "en": "Kids Polo Shirt",
    "price": 219,
    "img": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop",
    "cat": "kids",
    "desc_ar": "قميص بولو للأطفال بجودة عالية.",
    "desc_en": "High-quality kids' polo shirt.",
    "images": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "Free"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  },
  {
    "id": 8,
    "ar": "شورت رياضي",
    "en": "Sports Shorts",
    "price": 199,
    "img": "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&q=80&auto=format&fit=crop",
    "cat": "shorts",
    "desc_ar": "شورت خفيف للتمارين والنشاطات الرياضية.",
    "desc_en": "Light shorts for workouts and sports.",
    "images": [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  },
  {
    "id": 9,
    "ar": "حزام جلد",
    "en": "Leather Belt",
    "price": 149,
    "img": "https://images.unsplash.com/photo-1519741491031-5aa4f51b9d14?w=1200&q=80&auto=format&fit=crop",
    "cat": "accessories",
    "desc_ar": "حزام جلد أنيق متين.",
    "desc_en": "Durable and stylish leather belt.",
    "images": [
      "https://images.unsplash.com/photo-1519741491031-5aa4f51b9d14?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "Free"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  },
  {
    "id": 10,
    "ar": "جاكيت شتوي ثقيل",
    "en": "Winter Coat",
    "price": 1299,
    "img": "https://images.unsplash.com/photo-1602810316668-3cf6a23b8f3c?w=1200&q=80&auto=format&fit=crop",
    "cat": "coats",
    "desc_ar": "جاكيت سميك ومناسب للبرد القارس.",
    "desc_en": "Thick coat suitable for cold winters.",
    "images": [
      "https://images.unsplash.com/photo-1602810316668-3cf6a23b8f3c?w=1200&q=80&auto=format&fit=crop"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "colors": [
      "أسود",
      "أبيض",
      "رمادي"
    ]
  }
];


// helper functions
function unique(arr){ return [...new Set(arr)] }
function el(html){ const d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstChild; }
function formatEGP(n){ return n + ' ج.م'; }

// filters init
function initFilters(){
  const cats = unique(PRODUCTS.map(p=>p.cat));
  const catSel = document.getElementById('filterCat');
  cats.forEach(c=>{ const opt=document.createElement('option'); opt.value=c; opt.textContent = c; catSel.appendChild(opt) });

  const sizes = unique(PRODUCTS.flatMap(p=>p.sizes || []));
  const sizeSel = document.getElementById('filterSize');
  sizes.forEach(s=>{ const opt=document.createElement('option'); opt.value=s; opt.textContent = s; sizeSel.appendChild(opt) });

  const colors = unique(PRODUCTS.flatMap(p=>p.colors || []));
  const colorSel = document.getElementById('filterColor');
  colors.forEach(c=>{ const opt=document.createElement('option'); opt.value=c; opt.textContent = c; colorSel.appendChild(opt) });
}

function renderProducts(list){
  const container = document.getElementById('productsArea');
  container.innerHTML = '';
  list.forEach(p=>{
    const card = el('<div class="card" data-id="'+p.id+'">      <img src="'+(p.images[0]||'')+'" alt="'+p.ar+'">      <h3>'+p.ar+'</h3>      <div style="color:var(--muted)">'+p.desc_ar+'</div>      <div style="display:flex;justify-content:space-between;align-items:center">        <div class="price">'+p.price+' ج.م</div>        <div class="actions">          <button class="btn ghost view" data-id="'+p.id+'">عرض</button>          <button class="btn small add" data-id="'+p.id+'">أضف للسلة</button>        </div>      </div>    </div>');
    container.appendChild(card);
  });
  document.querySelectorAll('.view').forEach(b=>b.addEventListener('click', e=> showModal(Number(e.target.dataset.id))));
  document.querySelectorAll('.add').forEach(b=>b.addEventListener('click', e=> addToCart(Number(e.target.dataset.id))));
}

// cart management
function getCart(){ return JSON.parse(localStorage.getItem(CART_KEY)||'[]') }
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartCount(); renderCartDrawer(); renderCheckoutItems() }

function addToCart(id, opts){
  const cart = getCart();
  const product = PRODUCTS.find(p=>p.id===id);
  if(!product) return;
  const size = opts && opts.size ? opts.size : (product.sizes && product.sizes[0]);
  const color = opts && opts.color ? opts.color : (product.colors && product.colors[0]);
  const existing = cart.find(i=>i.id===id && i.size===size && i.color===color);
  if(existing) existing.qty += 1;
  else cart.push({id, qty:1, size, color});
  saveCart(cart);
  openCartDrawer();
}

function removeFromCart(index){ const cart = getCart(); cart.splice(index,1); saveCart(cart); }
function updateQty(index, qty){ const cart = getCart(); cart[index].qty = qty; saveCart(cart); }
function updateCartCount(){ const cnt = getCart().reduce((s,i)=>s+i.qty,0); const el = document.getElementById('cartCount'); if(el) el.textContent = cnt; }

function renderCartDrawer(){
  const container = document.getElementById('cartItems');
  if(!container) return;
  const cart = getCart();
  container.innerHTML = '';
  let total = 0;
  cart.forEach((it, idx)=>{
    const p = PRODUCTS.find(x=>x.id===it.id);
    const line = el('<div class="cart-item">      <img src="'+(p.images[0]||'')+'">      <div style="flex:1">        <div>'+p.ar+'</div>        <div style="color:var(--muted);font-size:0.9rem">مقاس: '+it.size+' • لون: '+it.color+'</div>        <div style="margin-top:6px;display:flex;gap:6px;align-items:center">          <input type="number" min="1" value="'+it.qty+'" data-idx="'+idx+'" class="small qty" style="width:68px"/>          <button data-idx="'+idx+'" class="btn ghost remove">حذف</button>        </div>      </div>      <div style="text-align:left;font-weight:700">'+(p.price * it.qty)+' ج.م</div>    </div>');
    container.appendChild(line);
    total += p.price * it.qty;
  });
  document.getElementById('cartTotal').textContent = formatEGP(total);
  container.querySelectorAll('.remove').forEach(b=>b.addEventListener('click', e=> removeFromCart(Number(e.target.dataset.idx))));
  container.querySelectorAll('.qty').forEach(inp=>inp.addEventListener('change', e=>{ const idx = Number(e.target.dataset.idx); let val = Number(e.target.value); if(val<1) val=1; e.target.value=val; updateQty(idx, val); }));
}

function renderCheckoutItems(){
  const elc = document.getElementById('checkoutItems');
  if(!elc) return;
  const cart = getCart();
  elc.innerHTML = '';
  let total = 0;
  cart.forEach(it=>{
    const p = PRODUCTS.find(x=>x.id===it.id);
    const row = document.createElement('div');
    row.style.display='flex'; row.style.justifyContent='space-between'; row.style.padding='8px 0';
    row.innerHTML = '<div>'+p.ar+' • '+it.size+' • '+it.color+' x'+it.qty+'</div><div>'+ (p.price * it.qty) +' ج.م</div>';
    elc.appendChild(row);
    total += p.price * it.qty;
  });
  const elTotal = document.getElementById('checkoutTotal');
  if(elTotal) elTotal.textContent = formatEGP(total);
}

function openCartDrawer(){ document.getElementById('cartDrawer').classList.add('open') }
function closeCartDrawer(){ document.getElementById('cartDrawer').classList.remove('open') }

function showModal(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  document.getElementById('modalTitle').textContent = p.ar;
  document.getElementById('modalDesc').textContent = p.desc_ar;
  document.getElementById('modalPrice').textContent = p.price + ' ج.م';
  const main = document.getElementById('modalMainImg'); main.src = p.images[0] || '';
  const thumbs = document.getElementById('modalThumbs'); thumbs.innerHTML='';
  (p.images||[]).forEach((u,idx)=>{ const img = document.createElement('img'); img.src = u; img.dataset.idx = idx; if(idx===0) img.classList.add('active'); img.addEventListener('click', ()=>{ main.src = u; thumbs.querySelectorAll('img').forEach(i=>i.classList.remove('active')); img.classList.add('active') }); thumbs.appendChild(img); });
  const sizeSel = document.getElementById('modalSize'); sizeSel.innerHTML=''; (p.sizes||[]).forEach(s=>{ const o=document.createElement('option'); o.value=s; o.textContent=s; sizeSel.appendChild(o) });
  const colorSel = document.getElementById('modalColor'); colorSel.innerHTML=''; (p.colors||[]).forEach(c=>{ const o=document.createElement('option'); o.value=c; o.textContent=c; colorSel.appendChild(o) });
  const mb = document.getElementById('modalBackdrop'); mb.style.display='flex'; mb.setAttribute('aria-hidden','false');
  const addBtn = document.getElementById('modalAdd');
  addBtn.onclick = ()=>{ const size = document.getElementById('modalSize').value; const color = document.getElementById('modalColor').value; addToCart(id, {size, color}); mb.style.display='none'; mb.setAttribute('aria-hidden','true'); };
  document.getElementById('modalClose').onclick = ()=>{ mb.style.display='none'; mb.setAttribute('aria-hidden','true') };
}

function applyFilters(){
  const q = (document.getElementById('search')?.value||'').trim().toLowerCase();
  const cat = document.getElementById('filterCat')?.value || '';
  const size = document.getElementById('filterSize')?.value || '';
  const color = document.getElementById('filterColor')?.value || '';
  const sort = document.getElementById('sort')?.value || 'default';
  let list = PRODUCTS.filter(p=>{
    const matchQ = q === '' || p.ar.toLowerCase().includes(q) || p.en.toLowerCase().includes(q);
    const matchCat = cat === '' || p.cat === cat;
    const matchSize = size === '' || (p.sizes || []).includes(size);
    const matchColor = color === '' || (p.colors || []).includes(color);
    return matchQ && matchCat && matchSize && matchColor;
  });
  if(sort === 'price-asc') list.sort((a,b)=>a.price-b.price);
  if(sort === 'price-desc') list.sort((a,b)=>b.price-a.price);
  renderProducts(list);
}

document.addEventListener('DOMContentLoaded', ()=>{
  initFilters();
  renderProducts(PRODUCTS);
  renderCartDrawer();
  updateCartCount();
  renderCheckoutItems();
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('search').addEventListener('input', applyFilters);
  document.getElementById('filterCat').addEventListener('change', applyFilters);
  document.getElementById('filterSize').addEventListener('change', applyFilters);
  document.getElementById('filterColor').addEventListener('change', applyFilters);
  document.getElementById('sort').addEventListener('change', applyFilters);
  document.getElementById('openCart').addEventListener('click', openCartDrawer);

  const checkoutForm = document.getElementById('checkoutForm');
  if(checkoutForm){
    checkoutForm.addEventListener('submit', e=>{
      e.preventDefault();
      const cart = getCart();
      if(cart.length===0){ document.getElementById('orderMsg').textContent = 'سلة التسوق فارغة.'; return; }
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const address = document.getElementById('address').value.trim();
      if(!name||!phone||!address){ document.getElementById('orderMsg').textContent = 'يرجى تعبئة الحقول المطلوبة.'; return; }
      localStorage.removeItem(CART_KEY);
      saveCart([]);
      document.getElementById('orderMsg').textContent = 'تم استلام طلبك، شكرًا لك!';
      setTimeout(()=>{ window.location.href = 'index.html' }, 1500);
    });
  }
});
