import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart , setIsInCart] = useState(false)

  function handleCartChange(){
    setIsInCart((isInCart) => !isInCart)
  }

  const cartClass = isInCart ? "in-cart" : ""

  const outClass = isInCart ? "remove" : "add"

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={outClass} onClick={handleCartChange}>
        {isInCart ? "Remove From" : "Add To"}
        </button>
    </li>
  );
}

export default Item;
