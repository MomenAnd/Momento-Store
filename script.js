// Momento Store - bilingual + autoplay carousels + popup cart
const PRODUCTS = [
  {id:1,ar:'هاتف ذكي سامسونج',en:'Samsung Phone',price:4999,img:'images/product-phone.jpg',cat:'mobiles',desc_ar:'هاتف بشاشة ممتازة وكاميرا جيدة.',desc_en:'Great screen and camera.'},
  {id:2,ar:'سماعات بلوتوث',en:'Bluetooth Headphones',price:899,img:'images/product-headphones.jpg',cat:'audio',desc_ar:'سماعات مريحة وصوت واضح.',desc_en:'Comfortable and clear sound.'},
  {id:3,ar:'ساعة ذكية',en:'Smart Watch',price:1299,img:'images/product-watch.jpg',cat:'wearables',desc_ar:'تتبع النشاط والنبض.',desc_en:'Tracks activity and heart-rate.'},
  {id:4,ar:'كاميرا رقمية',en:'Digital Camera',price:2399,img:'images/product-camera.jpg',cat:'camera',desc_ar:'كاميرا بدقة عالية.',desc_en:'High-resolution camera.'},
  {id:5,ar:'شاحن سريع',en:'Fast Charger',price:199,img:'images/product-charger.jpg',cat:'accessories',desc_ar:'شاحن آمن وسريع.',desc_en:'Safe and fast charging.'},
  {id:6,ar:'لوحة مفاتيح ميكانيكية',en:'Mechanical Keyboard',price:459,img:'images/product-keyboard.jpg',cat:'accessories',desc_ar:'لوحة مريحة للكتابة.',desc_en:'Comfortable typing keyboard.'},
  {id:7,ar:'سماعات أذن',en:'Earbuds',price:299,img:'images/product-earbuds.jpg',cat:'audio',desc_ar:'سماعات صغيرة وواضحة الصوت.',desc_en:'Small and clear earbuds.'}
];

const CART_KEY='momento_store_cart';

function el(html){ const d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstChild; }
function formatEGP(n){ return n + ' ج.م'; }

// Render helpers
function renderCarousel(id, items, lang='ar'){
  const container=document.getElementById(id);
  container.innerHTML='';
  items.forEach(p=>{
    const title = lang==='ar'?p.ar:p.en;
    const card = el(`<div class="card"><img src="${p.img}" alt="${title}"><h3 class="font-semibold mt-2">${title}</h3><p class="text-green-600 font-bold mt-2">${formatEGP(p.price)}</p><div class="mt-4 flex justify-between items-center"><button class="btn small" data-id="${p.id}">`+(lang==='ar'?'أضف للسلة':'Add')+`</button><button class="text-sm text-gray-600 view" data-id="${p.id}">`+(lang==='ar'?'عرض':'View')+`</button></div></div>`);
    container.appendChild(card);
  });
  container.querySelectorAll('.btn.small').forEach(b=>b.addEventListener('click',e=> addToCart(Number(e.target.dataset.id))));
  container.querySelectorAll('.view').forEach(b=>b.addEventListener('click',e=> showProduct(Number(e.target.dataset.id))));
}

function renderVerticalList(id, items, lang='ar'){
  const container=document.getElementById(id);
  container.innerHTML='';
  items.forEach(p=>{
    const title = lang==='ar'?p.ar:p.en;
    const desc = lang==='ar'?p.desc_ar:p.desc_en;
    const row = el(`<div class="v-item"><img src="${p.img}" class="w-24 h-24 object-cover rounded"><div class="flex-1"><div class="font-semibold">${title}</div><div class="text-sm text-gray-600">${desc}</div></div><div class="text-right"><div class="font-bold">${formatEGP(p.price)}</div><button class="mt-2 btn small" data-id="${p.id}">`+(lang==='ar'?'أضف للسلة':'Add')+`</button></div></div>`);
    container.appendChild(row);
  });
  container.querySelectorAll('.btn.small').forEach(b=>b.addEventListener('click',e=> addToCart(Number(e.target.dataset.id))));
}

function renderGrid(id, items, lang='ar'){
  const container=document.getElementById(id);
  container.innerHTML='';
  items.forEach(p=>{
    const title = lang==='ar'?p.ar:p.en;
    const card = el(`<div class="bg-white rounded-lg shadow p-4"><img src="${p.img}" class="w-full h-40 object-cover rounded mb-3"><h3 class="font-semibold">${title}</h3><div class="flex items-center justify-between mt-3"><div class="font-bold">${formatEGP(p.price)}</div><div class="flex gap-2"><button class="btn small" data-id="${p.id}">`+(lang==='ar'?'أضف للسلة':'Add')+`</button><button class="btn-outline view" data-id="${p.id}">`+(lang==='ar'?'عرض':'View')+`</button></div></div></div>`);
    container.appendChild(card);
  });
  container.querySelectorAll('.btn.small').forEach(b=>b.addEventListener('click',e=> addToCart(Number(e.target.dataset.id))));
  container.querySelectorAll('.view').forEach(b=>b.addEventListener('click',e=> showProduct(Number(e.target.dataset.id))));
}

// cart
function getCart(){ return JSON.parse(localStorage.getItem(CART_KEY)||'[]'); }
function saveCart(c){ localStorage.setItem(CART_KEY,JSON.stringify(c)); updateCartCount(); renderCartPanel(); }
function addToCart(id){ const cart=getCart(); const it=cart.find(i=>i.id===id); if(it) it.qty++; else cart.push({id,qty:1}); saveCart(cart); openCartPanel(); }
function removeFromCart(id){ const cart=getCart().filter(i=>i.id!==id); saveCart(cart); }
function updateCartCount(){ const cart=getCart(); const cnt=cart.reduce((s,i)=>s+i.qty,0); document.getElementById('cartCount').textContent = cnt; }
function renderCartPanel(){ const container=document.getElementById('cartItems'); const cart=getCart(); container.innerHTML=''; if(cart.length===0){ container.innerHTML='<div>السلة فارغة</div>'; document.getElementById('cartTotal').textContent='0 ج.م'; return; } let total=0; cart.forEach(ci=>{ const p=PRODUCTS.find(x=>x.id===ci.id); if(!p) return; const row = el(`<div class="flex items-center gap-3 border-b pb-3"><img src="${p.img}" class="w-20 h-20 object-cover rounded"><div class="flex-1"><div class="font-semibold">${p.ar}</div><div class="text-sm text-gray-600">الكمية: ${ci.qty}</div></div><div class="text-right"><div class="font-bold">${formatEGP(p.price*ci.qty)}</div><button class="text-sm text-red-600 remove" data-id="${p.id}">حذف</button></div></div>`); container.appendChild(row); }); container.querySelectorAll('.remove').forEach(b=>b.addEventListener('click',e=> removeFromCart(Number(e.target.dataset.id)))); total = cart.reduce((s,i)=>{ const p=PRODUCTS.find(x=>x.id===i.id); return s + (p? p.price*i.qty:0); },0); document.getElementById('cartTotal').textContent = total + ' ج.م'; }

function openCartPanel(){ document.querySelector('.cart-backdrop').classList.add('show'); document.querySelector('.cart-panel').style.transform='translateX(0)'; document.querySelector('.cart-panel').style.right='0'; }
function closeCartPanel(){ document.querySelector('.cart-backdrop').classList.remove('show'); document.querySelector('.cart-panel').style.transform='translateX(100%)'; }

// product modal
function showProduct(id){ const p=PRODUCTS.find(x=>x.id===id); if(!p) return; const lang = localStorage.getItem('site_lang')||'ar'; document.getElementById('pmImg').src=p.img; document.getElementById('pmTitle').textContent = lang==='ar'?p.ar:p.en; document.getElementById('pmDesc').textContent = lang==='ar'?p.desc_ar:p.desc_en; document.getElementById('pmPrice').textContent = formatEGP(p.price); document.getElementById('pmAdd').onclick = ()=>{ addToCart(p.id); closeProductModal(); }; document.getElementById('productModal').classList.remove('hidden'); document.getElementById('productModal').classList.add('flex'); }
function closeProductModal(){ document.getElementById('productModal').classList.add('hidden'); document.getElementById('productModal').classList.remove('flex'); }

// autoplay for carousels
function setupAutoplay(carouselId, interval=3000){
  const el = document.getElementById(carouselId);
  if(!el) return;
  let timer = null;
  function start(){ if(timer) return; timer = setInterval(()=>{ el.scrollBy({left: el.offsetWidth*0.6, behavior:'smooth'}); }, interval); }
  function stop(){ if(timer){ clearInterval(timer); timer=null; } }
  el.addEventListener('mouseenter', stop);
  el.addEventListener('mouseleave', start);
  start();
}

// language
function applyLanguage(lang){
  localStorage.setItem('site_lang', lang);
  const isAr = lang==='ar';
  document.documentElement.lang = isAr? 'ar':'en';
  document.documentElement.dir = isAr? 'rtl':'ltr';
  // re-render content
  renderCarousel('featuredCarousel', PRODUCTS.slice(0,5), lang);
  renderCarousel('electronicsCarousel', PRODUCTS.filter(p=>['audio','mobiles','accessories'].includes(p.cat)), lang);
  renderVerticalList('newArrivals', PRODUCTS.slice(0,6), lang);
  renderGrid('bestsellers', PRODUCTS.slice(0,6), lang);
  renderCartPanel();
  // static texts
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    const dict = {
      featured: {ar:'عروض مميزة', en:'Featured'},
      electronics: {ar:'إلكترونيات', en:'Electronics'},
      newarrivals: {ar:'وصل حديثًا', en:'New Arrivals'},
      bestsellers: {ar:'الأكثر مبيعًا', en:'Bestsellers'},
      contact: {ar:'تواصل معنا', en:'Contact Us'},
      cartTitle: {ar:'سلة المشتريات', en:'Cart'},
      total: {ar:'الإجمالي:', en:'Total:'}
    };
    if(dict[key]) el.textContent = isAr? dict[key].ar : dict[key].en;
  });
}

// init
document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('site_lang')||'ar';
  document.getElementById('langSwitch').value = saved;
  document.getElementById('langSwitch').addEventListener('change', e=> applyLanguage(e.target.value));
  applyLanguage(saved);

  // buttons for featured manual scroll
  document.getElementById('nextFeatured').addEventListener('click', ()=> document.getElementById('featuredCarousel').scrollBy({left: 320, behavior:'smooth'}));
  document.getElementById('prevFeatured').addEventListener('click', ()=> document.getElementById('featuredCarousel').scrollBy({left: -320, behavior:'smooth'}));

  // setup autoplay
  setupAutoplay('featuredCarousel', 3000);
  setupAutoplay('electronicsCarousel', 3500);

  // cart open/close
  document.getElementById('cartBtn').addEventListener('click', ()=> openCartPanel());
  document.getElementById('closeCartPanel').addEventListener('click', ()=> closeCartPanel());

  // search
  document.getElementById('search').addEventListener('input', e=>{
    const q = e.target.value.trim().toLowerCase();
    const lang = localStorage.getItem('site_lang')||'ar';
    const filtered = PRODUCTS.filter(p=> (lang==='ar'?p.ar:p.en).toLowerCase().includes(q) );
    renderCarousel('featuredCarousel', filtered.slice(0,5), lang);
    renderVerticalList('newArrivals', filtered, lang);
    renderGrid('bestsellers', filtered.slice(0,6), lang);
  });

  updateCartCount();
  renderCartPanel();
  document.getElementById('year').textContent = new Date().getFullYear();
});