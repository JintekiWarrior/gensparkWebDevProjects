import "./store.css";
import React from "react";
import ProductCard from "./ProductCard/ProductCard";
import { products } from "./products";

const Store = () => {
  return (
    <div className="store__products">
      {products.map((item, i) => (
        <ProductCard key={i} name={item.name} body={item.body} img={item.img} />
      ))}
    </div>
  );
};

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

export default Store;
