import styles from './shop.module.css'
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import ShopProduct from '../shopProduct/ShopProduct';


interface IFormValue {
  amount: string;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const schema = Yup.object().shape({
  amount: Yup
    .number()
    .typeError('кол-во продуктов - это число 🥲')
    .required('ввод данных обязателен!')
    .integer('введите целое число')
    .min(1, 'кол-во должно быть больше 1!')
    .max(20, 'кол-во не больше 20!')
});


const Shop = () => {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [finalPrice, setFinalPrice] = useState<number>(0)

  const getProducts = async (amount: string) => {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${amount}`);
    const data = await res.json();
    setProducts(data);
  };


  const formik = useFormik({
    initialValues: {
      amount: ''
    } as IFormValue,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: (value: IFormValue, { resetForm }) => {
      getProducts(value.amount);
      resetForm();
    }
  });

  // это событие произойдет по нажатию на кнопку и почистит
  // предыдущий вывод данных
  const handleClean = () => {
    setProducts([]);
  };

  const addProduct = (price: number) => {
    setFinalPrice(prev => prev + price)
  }

  useEffect(()=> {
    getProducts('20')
  }, [])



  return (
    <div className={styles.shopContainer}>
      {formik.errors.amount &&

      <p className={styles.error}>{formik.errors.amount}</p>
      }
      <h2>Shop 🛒</h2>
      <form onSubmit={formik.handleSubmit}>
        <input onChange={formik.handleChange} value={formik.values.amount} name='amount' placeholder='amount of products' type="text" />
        <button onClick={handleClean} type="submit">show products</button>
      </form>
      <h4>FInal price: {Math.floor(finalPrice)}€</h4>
      <div className={styles.gridContainerProducts}>
        {products.map(product => (
            <ShopProduct addProduct={addProduct} key={product.id} id={product.id} description={product.description} image={product.image} title={product.title} price={product.price}/>
        ))}
      </div>
    </div>
  );
};

export default Shop;