import react from 'react'
import { CartProvider } from './contexts/CartContext';
import ProductList from './ProductList';

const App=()=>{

  return (
<CartProvider>
  <ProductList/>
</CartProvider>

  )


}

export default App;
