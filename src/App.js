import React, {useState, useEffect} from 'react';
import './App.css';
import * as requests from './requests';
import Header from './Header';
import ProductContainer from './components/productContainer';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const [products, setProducts] = useState([]);
  const [activeProduct, setActiveProduct] = useState({});

  useEffect(
    () => {
      requests.getCategories().then(categories => {
        setCategories(categories);
        setActiveCategoryId(categories[0].id);
      });
    },
    [categories]
  );

  useEffect(
    () => {
      requests.getProducts({categoryId: activeCategoryId}).then(products => {
        setProducts(products);
      });
    },
    [activeCategoryId]
  );

  const {name: categoryName} =
    categories.find(({id}) => id === activeCategoryId) || {};

  return (
    <div className="product-listing">
      <Header />
      <ProductContainer
        categories={categories}
        products={products}
        categoryName={categoryName}
        setActiveCategoryId={setActiveCategoryId}
      />
    </div>
  );
}

/*
  // Here as an example to get you started with requests.js

  React.useEffect(() => {
    (async () => {
      const categories = await requests.getCategories();
      const products = await requests.getProducts({
        categoryId: categories[0].id,
      });
      const product = await requests.getProduct(products[0].id);
      console.log('Example request: categories', categories);
      console.log('Example request: products', products);
      console.log('Example request: product', product);
    })();
  }, []);
*/
