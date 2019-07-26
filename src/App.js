import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import * as requests from './requests';
import Header from './components/Header';
import ProductContainer from './components/ProductContainer';
import ProductDetailModal from './components/ProductDetailModal';

const initialState = {
  categories: [],
  activeCategoryId: 0,
  products: [],
  prices: {min: null, max: null},
  searchText: '',
  activeProductId: null,
  activeProduct: null,
  modalOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    // action types here and how they update state with new state object
    case 'FETCH_CATEGORIES':
      return {
        ...state,
        categories: action.categories,
        activeCategoryId: action.categories[0].id,
      };
    case 'SELECT_CATEGORY':
      return {...state, activeCategoryId: action.category.id};
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {categories, activeCategoryId} = state;

  useEffect(
    () => {
      requests.getCategories().then(categories => {
        dispatch({type: 'FETCH_CATEGORIES', categories});
      });
    },
    [categories]
  );

  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState({min: null, max: null});
  const [searchText, setSearchText] = useState('');
  const [activeProductId, setActiveProductId] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

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
    [activeCategoryId, prices, searchText]
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
          dispatch={dispatch}
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
