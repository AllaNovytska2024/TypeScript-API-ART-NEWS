import cn from 'classnames';
// import { v4 } from "uuid";


// const containerProducts = document.querySelector("#container-products");
// const loader = document.querySelector("#loader");
// const productSelect = document.querySelector("#productSelect");
// const cartList = document.querySelector("#cartList");
// const totalPriceElement = document.querySelector("#totalPrice");

// let cart = [];

// const getProducts = async () => {
//   loader.classList.toggle("loader-hide");
//   setTimeout(async () => {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     data.forEach((product) => {
//       const card = document.createElement("div");
//       card.classList.add("product-card");
//       const heading = document.createElement("h4");
//       heading.textContent = product.title;
//       const price = document.createElement("p");
//       price.textContent = `Price: ${Math.floor(product.price)} €`;
//       const img = document.createElement("img");
//       img.src = product.image;
//       img.classList.add("card-img");
//       card.append(heading, price, img);
//       containerProducts.append(card);

//       const option = document.createElement("option");
//       option.value = product.id;
//       option.textContent = `${product.title} - $${product.price}`;
//       productSelect.appendChild(option);
//     });
//     loader.classList.toggle("loader-hide");
//   }, 1000);
// };

// getProducts();

// function addToCart(productId, quantity) {
//   const selectedOption = productSelect.options[productSelect.selectedIndex];
//   const productName = selectedOption.textContent.split(" - ")[0];
//   const productPrice = parseFloat(selectedOption.textContent.split(" - $")[1]);

//   const existingProduct = cart.find((item) => item.id === productId);
//   if (existingProduct) {
//     if (
//       confirm(
//         "Такой товар уже лежит в корзине. Вы действительно хотите добавить товар еще раз?"
//       )
//     ) {
//       existingProduct.quantity += quantity;
//     }
//   } else {
//     cart.push({
//       id: productId,
//       name: productName,
//       price: productPrice,
//       quantity: quantity,
//     });
//   }
//   updateCartDisplay();
// }

// function updateCartDisplay() {
//   cartList.innerHTML = ""; // Очистка текущего содержимого

//   cart.forEach((item) => {
//     const totalItemPrice = (item.price * item.quantity).toFixed(2);
//     const listItem = document.createElement("li");
//     listItem.innerHTML = `${item.name} - $${item.price} x ${item.quantity} = $${totalItemPrice}
//       <button class="decrease" data-id="${item.id}">-</button>
//       <button class="increase" data-id="${item.id}">+</button>`;
//     cartList.appendChild(listItem);
//   });

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.quantity * item.price,
//     0
//   );
//   totalPriceElement.textContent = `Total Price:   $${totalPrice.toFixed(2)}`;
// }

// document.querySelector("#priceForm").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const productId = parseInt(productSelect.value);
//   const quantity = parseInt(document.querySelector("#quantity").value);
//   addToCart(productId, quantity);
// });

// cartList.addEventListener("click", (event) => {
//   if (event.target.classList.contains("decrease")) {
//     const productId = parseInt(event.target.dataset.id);
//     const product = cart.find((item) => item.id === productId);
//     if (product.quantity > 1) {
//       product.quantity -= 1;
//     } else {
//       cart = cart.filter((item) => item.id !== productId);
//     }
//     updateCartDisplay();
//   }

//   if (event.target.classList.contains("increase")) {
//     const productId = parseInt(event.target.dataset.id);
//     const product = cart.find((item) => item.id === productId);
//     product.quantity += 1;
//     updateCartDisplay();
//   }
// });
