// import styles from './ShopProductInfo.module.css'

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from "../context/CartContext"
import Loader from '../../../forms/loaders/loaderPic/Loader';
import MyButton from '../../../forms/myButton/MyButton';
import { IProduct } from '../shop/Shop';

const initial: IProduct = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
  rating: {
    rate: 0,
    count: 0
  }
};

const ShopProductInfo = () => {
  const [product, setProduct] = useState<IProduct>(initial);
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();


  // ! забираем функцию добавления в из контекста
  const { addToCart } = useCart();

  // ! создаем функцию добавления элементов в корзину на основе данных из контекста
  const addToCartFromProduct = () => {
    // addToCart ждет объект, который мы прописали и протипизировали в контексте - здесь мы собираем его по ключам и передаем
    // если при создании объекта не указано значение, то это значит что используются переменные - и имя переменной станет ключом объекта (title) а значение это переменной станет значением объекта (Fjallraven - Foldsack No....)
    addToCart({ id: product.id, title: product.title, price: product.price, quantity: 1 });
  };


  const getProduct = (id: string) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct(id as string);
    }, 1000);
  }, [id]);

  return (
    <>
      {loading ? <Loader /> : (
        <div className='lesson-container'>
          <h2>{product.title}</h2>
          <h3>Price: {product.price}€</h3>
          <img width={200} src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <div>

            <Link to='/shop'><MyButton text='back to products' /></Link>
            <MyButton isPrimary={true} text='add product🛒' onClick={addToCartFromProduct}/>
          </div>
        </div>
      )}

    </>
  );
};

export default ShopProductInfo;