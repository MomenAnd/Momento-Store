// عناصر واجهة السلة
const cartSidebar = document.querySelector(".cart-sidebar");
const cartOverlay = document.querySelector(".cart-overlay");
const cartIcon = document.querySelector(".cart-icon");
const closeCart = document.querySelector(".close-cart");
const checkoutBtn = document.querySelector(".checkout-btn");

// فتح السلة
cartIcon.addEventListener("click", () => {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("active");
});

// إغلاق السلة عند الضغط بالخارج أو على زر الإغلاق
cartOverlay.addEventListener("click", closeSidebar);
closeCart.addEventListener("click", closeSidebar);

function closeSidebar() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("active");
}

// إضافة منتجات إلى السلة (مثال توضيحي)
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsContainer = document.querySelector(".cart-items");

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productName = btn.dataset.name || "منتج غير معروف";
    const item = document.createElement("div");
    item.classList.add("cart-item");
    item.innerHTML = `<p>${productName}</p>`;
    cartItemsContainer.appendChild(item);
    cartIcon.setAttribute(
      "data-count",
      document.querySelectorAll(".cart-item").length
    );
  });
});

// زر إتمام الشراء
checkoutBtn.addEventListener("click", () => {
  alert("سيتم تحويلك إلى صفحة الدفع قريبًا 💳");
});
