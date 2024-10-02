// import styles from './ShopProductInfo.module.css'

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IProduct } from '../shop/Shop';
import MyButton from '../../../forms/myButton/MyButton';

const initial:IProduct = {
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
}

const ShopProductInfo = () => {
  const [product, setProduct] = useState<IProduct>(initial)

  const { id } = useParams();

  const getProduct = (id: string) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  };

  useEffect(() => {
    getProduct(id as string);
  }, [id]);




  return (
    <div className='lesson-container'>
      <h2>{product.title}</h2>
      <h3>Price: {product.price}€</h3>
      <img width={200} src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <Link to='/shop'><MyButton text='back to products' /></Link>


    </div>
  );
};

export default ShopProductInfo;