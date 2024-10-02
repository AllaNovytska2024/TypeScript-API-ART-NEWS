import styles from "./cart.module.css";

import { useCart } from "../../shopingAPI/context/CartContext";
import MyButton from "../../../forms/myButton/MyButton";

const Cart = () => {
  // ! забираем данные из контекста
  // useCart - это нами созданный хук функция под капотом использующий хук useContext() с переданным в него контекстом для корзины
  // деструктуризацией достаем нужные нам данные
  const { cart, removeFromCart, clearCart } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className={styles.cartContainer}>
      <h2>Shopping cart</h2>
      {/* через тернарный оператор или отображаем сообщение о пустой корзине или выводим данные по продуктам */}
      {cart.length === 0 ? (
        <p>Your cart is empty...</p>
      ) : (
        <ul className={styles.cartList}>
          {cart.map((item) => (
            <li className={styles.cartItem} key={item.id}>
              <span className={styles.cartItemTitle}>{item.title}</span>
              {/* кол-во товаров */}
              <span className={styles.cartItemQuantity}>x {item.quantity}</span>
              {/* считаем цену за текущее кол-во товаров */}
              <span className={styles.cartItemPrice}>
                €{(item.quantity * item.price).toFixed(2)}
              </span>
              {/* передаем id в функцию удаления товара из контекста */}
              <MyButton text="remove" onClick={() => removeFromCart(item.id)} />
            </li>
          ))}
        </ul>
      )}
      <div>
        {/* в стандартный метод toFixed() передаем кол-во знаков после запятой */}
        <h3>Total price: €{calculateTotalPrice().toFixed(2)}</h3>
      </div>
      <div>
        <MyButton text="Clear cart" onClick={clearCart} />
      </div>
    </div>
  );
};

export default Cart;
