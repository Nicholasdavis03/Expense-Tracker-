import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import "./Account.css"


function Account() {
  const [state, dispatch] = useStoreContext();
  const [products, setProducts] = useState([]);
  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products
      });

      data.products.forEach(product => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then(indexedProducts => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts
        });
      });
    }
  }, [data, loading, dispatch]);

  useEffect(() => {
    setProducts(state.products);
  }, [state.products]);

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>
        <h2>My Account</h2>
        <p>Welcome to your account dashboard.</p>
      </div>
    </>
  );
}

export default Account;
