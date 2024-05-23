// Listado de todos los productos para el catalogo
const products = [
  {
    id: 1,
    img: "/img/Laptop_ASUS01.webp",
    title:
      'Laptop Asus Vivobook Go 15 R3 7320U 512GB SSD 8 GB RAM 15.6 Green Grey',
    store: "Oechsle",
    price: "1799.00",
  },

  {
    id: 2,
    img: "/img/Laptop_LENOVO01.png",
    title:
      "Laptop Gamer Lenovo IdeaPad Gaming3 15IAH7 i5-12450H 8GB RAM 512GB SSD RTX3060",
    store: "Oechsle",
    price: "3529.00",
  },

  {
    id: 3,
    img: "/img/Laptop_ACER01.webp",
    title: 'Laptop Acer A315-24PT Ryzen 5-7520U 16GB RAM 512GB SSD 15,6',
    store: "Oechsle",
    price: "2499.00",
  },

  {
    id: 4,
    img: "/img/Laptop_HP01.webp",
    title: 'Laptop HP 15-fc0002la AMD Ryzen 5 16GB RAM 512GB SSD 15.6',
    store: "Oechsle",
    price: "2499.00",
  },

  {
    id: 5,
    img: "/img/Laptop_APPLE01.webp",
    title: 'Apple Macbook Air MLXW3E/A Chip M2 8GB RAM 256GB 13.6',
    store: "Oechsle",
    price: "6099.00",
  },

  {
    id: 6,
    img: "/img/Laptop_LG01.webp",
    title:
      'Laptop LG Gram 17Z90Q-G.AH76 Intel Evo Core i7 12 Núcleos 16GB RAM 512GB SSD 17',
    store: "Oechsle",
    price: "6799.00",
  },

  {
    id: 7,
    img: "/img/Laptop_DELL.webp",
    title: 'Laptop Dell Inspiron I3520 Intel Core i5 8GB RAM 512GB SSD 15.6',
    store: "Oechsle",
    price: "1899.00",
  },
];

// Función para la creacion de cartas dinamicas para los productos
function createProductCard(product) {

  return `
      <div class="col-md-6 col-lg-4 mb-4 d-flex">
          <div class="card flex-fill tamano">
              <img src="${product.img}" class="card-img-top" alt="${product.title}" />
              <div class="card-body">
                  <p class="card-title">${product.title}</p>
                  <p class="card-text">${product.store}</p>
                  <p class="card-text">S/ ${product.price}</p>
                  <a href="/detail.html?id=${product.id}" class="btn btn-primary">Ver Detalle</a>
                  <a class="btn btn-secondary" onClick="addCar('${product.id}', '${product.img}', '${product.title}', '${product.price}')">Enviar Carrito</a>
              </div>
          </div>
      </div>
  `;
}

// Aqui se crean las diversas cartas para los producto
document.addEventListener("DOMContentLoaded", function () {
  let container = document.getElementById("product-container");
  products.forEach((product) => {
      container.innerHTML += createProductCard(product);
  });
});

// Función para las cartas para el carrito
function addCar(id, img, title, price) {

  // Crea un nuevo div para el carrito
  let productCar = document.getElementById("product-carrito");
  let newDiv = document.createElement("div");
  newDiv.classList.add("cart-item");

  // Asignamos un id al nuevo div
  let divId = 'div-' + id;
  
  // variable para guardar la cantidad o inicializarlo
  let amount = 0;

  // Verificamos la existencia del div para que no se repita
  if (document.getElementById(divId)) {
    // Si existe el div con el producto en el carrito solo editamos la cantidad
    let divContainer = document.getElementById(divId);
    let pContainer = divContainer.getElementsByTagName('p')[1]
    let amountAct = parseInt(pContainer.textContent.split(':')[1].trim())
    // Se modifica y se agrega un mas al contador
    let newAmount = amountAct + 1;
    // Se actualiza la vista
    pContainer.textContent = `Cantidad : ${newAmount}`
  } else {
    // Si no existe se asigna el id y se crea la carta
    newDiv.id = divId;
    newDiv.innerHTML = `
      <div class="card">
          <img src="${img}" class="card-img-top" alt="${title}" />
          <div class="card-body">
              <p class="card-text">S/ ${price}</p>
              <p id="amount" class="card-text">Cantidad : ${amount+1}</p>
          </div>
      </div>
    `;
    // Agrega el nuevo div al carrito
    productCar.appendChild(newDiv);
  }

  // Actualiza el monto a pagar al final con todos los precios del carrito
  let divPrice = document.getElementById("price");
  let pContainerPrice = divPrice.getElementsByTagName('p')[1];
  let priceAct = parseInt(pContainerPrice.textContent.split('/')[1].trim());
  let productPrice = parseFloat(price)
  // Se suma el precio del producto
  let newPrice = priceAct + productPrice;
  // Se actualiza el monto para la visualizacion
  pContainerPrice.textContent = `Monto : S/ ${newPrice}`;


}
