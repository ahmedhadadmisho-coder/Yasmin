const products = [
  { id: 1, name: "سائل غسيل الصحون - الياسمين", price: 12, img: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "مسحوق غسيل الملابس 3 كيلو", price: 35, img: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "منظف الأرضيات بالياسمين", price: 15, img: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "صابون سائل لليدين", price: 10, img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "معقم ومطهر متعدد الاستعمال", price: 18, img: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "مبيض الملابس البيضاء", price: 14, img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80" },
];

let cart = [];

function renderProducts() {
  const box = document.getElementById("products");
  box.innerHTML = products.map(p => `
    <div class="card">
      <img src="${p.img}">
      <h3>${p.name}</h3>
      <p>${p.price} د.ل</p>
      <button onclick="addToCart(${p.id})">أضف للسلة</button>
    </div>
  `).join("");
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;
  let total = cart.reduce((sum, p) => sum + p.price, 0);
  document.getElementById("total").innerText = total;
  if (cart.length === 0) {
    document.getElementById("cart-items").innerHTML = "السلة فاضية توا";
  } else {
    document.getElementById("cart-items").innerHTML = cart.map(p => `<p>${p.name} - ${p.price} د.ل</p>`).join("");
  }
}

function orderWhatsApp() {
  if (cart.length === 0) { alert("السلة فاضية، ضيف منتج الأول"); return; }
  let msg = "مرحبا، نبي نطلب من الياسمين:\n" + cart.map(p => `- ${p.name} (${p.price} د.ل)`).join("\n");
  let total = cart.reduce((sum, p) => sum + p.price, 0);
  msg += `\nالإجمالي: ${total} د.ل`;
  window.open("https://wa.me/218910000000?text=" + encodeURIComponent(msg));
}

renderProducts();
