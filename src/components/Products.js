import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';
import { popularProducts } from '../data';
import Product from './Product';


const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Add header allow axios
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `/products?category=${cat}`
            : "/products/"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) => 
          Object.entries(filters).every(([key, value]) =>
               item[key].includes(value)
            )
          )
        );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Wrapper>
        <h1 className="title"> Our popular products </h1>
        <div className="container">
          {cat ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
          : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.container{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    padding: 20px; 
    width: 21rem;
    gap: 4rem;
    margin-top:1rem;
    margin-bottom: 1rem;
}

.title{
  margin-top:2rem;
  text-align:center;
  font-weight: bold;
  font-size: 2.5rem;
}

`
export default Products;