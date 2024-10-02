import { Link } from "react-router-dom";
import MyButton from "../../../forms/myButton/MyButton";
import styles from "./shopProduct.module.css";
import { useCart } from "../context/CartContext";

interface IShopProductProps {
  addProduct: (price: number) => void;
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  rating?: {
    rate?: number;
    count?: number;
  };
}

const ShopProduct = ({
  price,
  image,
  title,
  id,
  addProduct,
}: IShopProductProps) => {
  // ! забираем функцию добавления в из контекста
  const { addToCart } = useCart();
  // эта функция обрезает строку если она больше 25 символов
  const shortTitle = (str: string) => {
    return str.length > 25 ? str.slice(0, 25) + "..." : str;
  };

  // ! создаем функцию добавления элементов в корзину на основе данных из контекста
  const addToCartFromProduct = () => {
    // addToCart ждет объект, который мы прописали и протипизировали в контексте - здесь мы собираем его по ключам и передаем
    // если при создании объекта не указано значение, то это значит что используются переменные - и имя переменной станет ключом объекта (title) а значение это переменной станет значением объекта (Fjallraven - Foldsack No....)
    addToCart({ id, title, price, quantity: 1 });
  };

  return (
    <div className={styles.card}>
      <h3>{shortTitle(title)}</h3>
      <span>Price: {price}</span>
      <div className={styles.imgWrapper}>
        <img src={image} alt={title} />
      </div>
      {/* c помощью навигационного элемента Link мы дописываем в строку url id нужного продукта */}
      <div>
        <Link to={String(id)}>
          <MyButton isPrimary={true} text="more info" />
        </Link>
        {/* <button onClick={}>add product</button> */}
        <MyButton
          onClick={addToCartFromProduct}
          text="add product"
          // price={price}
        />
      </div>
    </div>
  );
};

export default ShopProduct;
