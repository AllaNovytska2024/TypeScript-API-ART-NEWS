import { createContext, useContext, useState } from 'react';

// типизация одного товара в корзине
interface ICartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

// типизация контекста
interface ICartContextType {
  // сама корзина
  cart: ICartItem[];
  // добавление товара в корзину
  addToCart: (product: ICartItem) => void;
  // удаление товара из корзины
  removeFromCart: (id: number) => void;
  // очистка корзины
  clearCart: () => void;
}

// создаем контекст с помощью createContext() из react
export const CartContext = createContext<ICartContextType | undefined>(undefined);

// ! это компонент обертка, в который мы обернем другие компоненты в index.tsx
// * в нем будут находится функции и данные доступные для всех компонентов им обернутых
// эти компоненты станут пропсами для обертки и придут за место children


export const CartProvider = ({ children }: { children: React.ReactNode; }) => {
  // ! готовим четыре значение по ключам описанных в ICartContextType

  // * 1. стейт для элементов корзины
  const [cart, setCart] = useState<ICartItem[]>([]);

  // * 2. функция добавление элементов в корзину (усложненная логика вокруг setCart)
  // если товара нет - записывается новый объект
  // если товар есть - меняем кол-во
  const addToCart = (product: ICartItem) => {
    setCart(prevCart => {
      // ищем есть ли уже в корзине добавляемый продукт
      const productExist = prevCart.find(item => item.id === product.id);
      if (productExist) {
        // если продукт существует мы на одно значение увеличиваем его quantity
        return prevCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // * 3. функция удаления элементов из корзины по id (усложненная логика вокруг setCart)
  // если элемент с таким id в корзине уже есть - он не пройдет фильтр и будет удален
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };


  // * 4. функция очистки корзины (усложненная логика вокруг setCart)
  const clearCart = () => {
    setCart([]);
  };

  return (
    // обертку создаем с помощью созданного контекста через ключ provider
    // ! через props value мы передаем данные в контекст, чтобы можно было получить к ним доступ из всех компонентов
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {/* здесь будут обернутые компоненты */}
      {/* только обернутые компоненты будут иметь доступ к контексту */}
      {children}
    </CartContext.Provider>
  );
};

// кастомный хук (сделанный нами) для работы с конкретным контекстом
// имеющий внутри проверку на undefined
export const useCart = () => {
  // useContext - это хук для получения данных из выбранного контекста внутри компонентов
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('no such context! 😥');
  }
  return context;
}