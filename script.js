// Simple store script (bilingual & cart in localStorage)
const PRODUCTS = [
  {id:1,title_ar:'هاتف سامسونج',title_en:'Samsung Phone',price:4999,img:'images/product-phone.jpg',desc_ar:'هاتف ذكي بشاشة Super AMOLED',desc_en:'Smartphone with Super AMOLED screen'},
  {id:2,title_ar:'سماعات بلوتوث',title_en:'Bluetooth Headphones',price:899,img:'images/product-headphones.jpg',desc_ar:'صوت نقي وراحة في الارتداء',desc_en:'Clear sound and comfortable fit'},
  {id:3,title_ar:'ساعة ذكية',title_en:'Smart Watch',price:1299,img:'images/product-watch.jpg',desc_ar:'تتبع النشاط والنبض',desc_en:'Activity & heart-rate tracking'},
  {id:4,title_ar:'شاحن سريع',title_en:'Fast Charger',price:199,img:'images/product-charger.jpg',desc_ar:'شحن آمن وسريع',desc_en:'Safe and fast charging'}
];
const CART_KEY='go_store_full_cart';

function _(k){ // i18n lookup for static elements
  const dict = {
    ar:{sectionsTitle:'الأقسام',electronics:'الكترونيات',mobiles:'موبايلات',clothes:'ملابس',home:'منزل',offers:'عروض اليوم',products:'المنتجات',checkoutTitle:'إتمام الطلب',backToStore:'العودة للمتجر',orderDetails:'تفاصيل الطلب',shipping:'بيانات الشحن',total:'الإجمالي:',fullNameLabel:'الاسم الكامل',phoneLabel:'رقم الهاتف',addressLabel:'العنوان',confirmOrder:'تأكيد الطلب'},
    en:{sectionsTitle:'Sections',electronics:'Electronics',mobiles:'Mobiles',clothes:'Clothes',home:'Home',offers:'Offers',products:'Products',checkoutTitle:'Checkout',backToStore:'Back to store',orderDetails:'Order details',shipping:'Shipping details',total:'Total:',fullNameLabel:'Full name',phoneLabel:'Phone',addressLabel:'Address',confirmOrder:'Confirm Order'}
  };
  const lang = localStorage.getItem('site_lang')||'ar';
  return dict[lang][k] || '';
}

function renderStaticI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.textContent = _(''+key);
  });
}

function renderProducts(){
  const container = document.getElementById('products');
  container.innerHTML='';
  const lang = localStorage.getItem('site_lang')||'ar';
  PRODUCTS.forEach(p=>{
    const title = lang==='ar'?p.title_ar:p.title_en;
    const card = document.createElement('div');
    card.className='bg-white rounded-lg shadow p-4 flex flex-col';
    card.innerHTML = `<img src="${p.img}" alt="${title}" class="h-40 object-cover rounded mb-3"><h3 class="font-semibold mb-1">${title}</h3><p class="text-gray-700 mb-3">${p.price} ج.م</p><div class="mt-auto flex items-center justify-between"><a href="product.html?id=${p.id}" class="text-sm text-green-600">عرض</a><button class="addBtn px-3 py-1 border rounded">`+(lang==='ar'?'أضف للسلة':'Add to cart')+`</button></div>`;
    container.appendChild(card);
    card.querySelector('.addBtn').addEventListener('click',()=>addToCart(p.id));
  });
  updateCartCount();
  renderStaticI18n();
}

function addToCart(id){
  const cart = JSON.parse(localStorage.getItem(CART_KEY)||'[]');
  const item = cart.find(i=>i.id===id);
  if(item) item.qty++; else cart.push({id,qty:1});
  localStorage.setItem(CART_KEY,JSON.stringify(cart));
  updateCartCount();
  alert((localStorage.getItem('site_lang')||'ar')==='ar'?'تمت إضافة المنتج إلى السلة ✅':'Product added to cart ✅');
}

function updateCartCount(){
  const cart = JSON.parse(localStorage.getItem(CART_KEY)||'[]');
  const count = cart.reduce((s,i)=>s+i.qty,0);
  const el = document.getElementById('cartCount'); if(el) el.textContent=count;
}

function applyLang(lang){
  localStorage.setItem('site_lang',lang);
  const html = document.documentElement;
  if(lang==='en'){ html.lang='en'; html.dir='ltr'; document.getElementById('siteTitle').textContent='GO STORE'; }
  else { html.lang='ar'; html.dir='rtl'; document.getElementById('siteTitle').textContent='GO STORE'; }
  renderProducts();
  // update static texts on any pages using data-i18n
  renderStaticI18n();
}

document.addEventListener('DOMContentLoaded',()=>{
  // default language
  const saved = localStorage.getItem('site_lang')||'ar';
  document.getElementById('langSwitch').value = saved;
  document.getElementById('langSwitch').addEventListener('change',e=> applyLang(e.target.value));
  applyLang(saved);
  document.getElementById('year').textContent = new Date().getFullYear();

  // search filter
  document.getElementById('search').addEventListener('input',e=>{
    const q = e.target.value.trim().toLowerCase();
    const lang = localStorage.getItem('site_lang')||'ar';
    const filtered = PRODUCTS.filter(p=> (lang==='ar'?p.title_ar:p.title_en).toLowerCase().includes(q) );
    const container = document.getElementById('products');
    container.innerHTML='';
    filtered.forEach(p=>{
      const title = lang==='ar'?p.title_ar:p.title_en;
      const card = document.createElement('div');
      card.className='bg-white rounded-lg shadow p-4 flex flex-col';
      card.innerHTML = `<img src="${p.img}" alt="${title}" class="h-40 object-cover rounded mb-3"><h3 class="font-semibold mb-1">${title}</h3><p class="text-gray-700 mb-3">${p.price} ج.م</p><div class="mt-auto flex items-center justify-between"><a href="product.html?id=${p.id}" class="text-sm text-green-600">`+(lang==='ar'?'عرض':'View')+`</a><button class="addBtn px-3 py-1 border rounded">`+(lang==='ar'?'أضف للسلة':'Add to cart')+`</button></div>`;
      container.appendChild(card);
      card.querySelector('.addBtn').addEventListener('click',()=>addToCart(p.id));
    });
  });
});