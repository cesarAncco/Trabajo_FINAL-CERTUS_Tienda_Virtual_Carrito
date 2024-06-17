document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  products.forEach((product) => {
    if (id == product.id) {
      document.getElementById("product-img").src = product.img;
      document.getElementById("product-title").innerText = product.title;
      document.getElementById("product-price").innerText = product.price;
      document.getElementById("product-store").innerText = product.store;
    }
  });
});
