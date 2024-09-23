const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    price: 9.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    price: 19.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    price: 14.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    price: 12.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    price: 8.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    price: 49.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
  },
  {
    id: 7,
    title: "Chanel Coco Noir Eau De",
    description:
      "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    price: 129.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
  },
  {
    id: 8,
    title: "Dior J'adore",
    description:
      "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication. ",
    price: 89.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
  },
  {
    id: 9,
    title: "Dolce Shine Eau de",
    description:
      "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    price: 69.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/thumbnail.png",
  },
  {
    id: 10,
    title: "Gucci Bloom Eau de",
    description:
      "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    price: 79.99,
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/thumbnail.png",
  },
  {
    id: 11,
    title: "",
    description: "",
    price: 0.0,
    thumbnail: "",
  },
];

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("productContainer");
  const productSelect = document.getElementById("productSelect");
  const cartList = document.getElementById("cartList");
  const totalPriceElement = document.getElementById("totalPrice");

  products.forEach((product) => {
    // Создаем карточки продуктов
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
    productContainer.appendChild(productCard);

    // Добавляем опции в выпадающий список
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.title;
    option.dataset.price = product.price;
    productSelect.appendChild(option);
  });

  document
    .getElementById("priceForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const selectedOption = productSelect.options[productSelect.selectedIndex];
      const productId = parseInt(selectedOption.value);
      const pricePerUnit = parseFloat(selectedOption.dataset.price);
      const quantity = parseInt(document.getElementById("quantity").value);
      const totalPrice = pricePerUnit * quantity;

      // Проверяем, есть ли товар уже в корзине
      const existingCartItem = cart.find((item) => item.id === productId);
      if (existingCartItem) {
        alert("This product is already in the cart.");
        return;
      }

      // Добавляем товар в корзину
      const cartItem = {
        id: productId,
        title: selectedOption.textContent,
        pricePerUnit: pricePerUnit,
        quantity: quantity,
        totalPrice: totalPrice,
      };
      cart.push(cartItem);

      // Обновляем отображение корзины
      updateCartDisplay();

      // Функция для обновления отображения корзины
      function updateCartDisplay() {
        cartList.innerHTML = "";
        let totalCartPrice = 0;
        cart.forEach((item) => {
          const cartItemElement = document.createElement("li");
          cartItemElement.textContent = `${item.title} - ${
            item.quantity
          } x $${item.pricePerUnit.toFixed(2)} = $${item.totalPrice.toFixed(
            2
          )}`;
          cartList.appendChild(cartItemElement);
          totalCartPrice += item.totalPrice;
        });
        totalPriceElement.textContent = `Total Price: $${totalCartPrice.toFixed(
          2
        )}`;
      }
    });
});
