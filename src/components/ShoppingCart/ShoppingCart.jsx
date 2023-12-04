//Realizar el segmento para realizar un carrito de compras cuando el usuario este loggeado.
import React from 'react'

const ShoppingCart = () => {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
  return (
    <ProductList
    allProducts={allProducts}
    setAllProducts={setAllProducts}
    total={total}
    setTotal={setTotal}
    countProducts={countProducts}
    setCountProducts={setCountProducts}
  />
  )
}

export default ShoppingCart;