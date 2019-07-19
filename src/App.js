import React, {useState, useEffect} from 'react';
import './App.css';
import * as requests from './requests';
import Header from './components/Header';
import ProductContainer from './components/ProductContainer';
import ProductDetailModal from './components/ProductDetailModal';

export default function App() {
  const [categories, setCategories] = useState([]);
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState({min: null, max: null});
  const [searchText, setSearchText] = useState('');
  const [activeProductId, setActiveProductId] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
      requests
        .getProducts({
          categoryId: activeCategoryId,
        })
        .then(products => {
          setProducts(products);
        });
    },
    [activeCategoryId]
  );

  useEffect(
    () => {
      requests
        .getProducts({
          categoryId: activeCategoryId,
          minPrice: prices.min,
          maxPrice: prices.max,
          searchText,
        })
        .then(products => {
          setProducts(products);
        });
    },
    [prices, searchText]
  );

  useEffect(
    () => {
      requests.getProduct(activeProductId).then(product => {
        setActiveProduct(product);
      });
    },
    [activeProductId]
  );

  const {name: categoryName} =
    categories.find(({id}) => id === activeCategoryId) || {};

  return (
    <>
      <div className="content-grid">
        <Header setSearchText={setSearchText} />
        <ProductContainer
          categories={categories}
          products={products}
          categoryName={categoryName}
          activeCategoryId={activeCategoryId}
          setActiveCategoryId={setActiveCategoryId}
          setPrices={setPrices}
          setActiveProductId={setActiveProductId}
          setModalOpen={setModalOpen}
        />
        {modalOpen && activeProduct ? (
          <ProductDetailModal
            product={activeProduct}
            setModalOpen={setModalOpen}
            setActiveProductId={setActiveProductId}
            setActiveProduct={setActiveProduct}
          />
        ) : null}
      </div>
    </>
  );
}
