import react ,{createContext,useState,useEffect,useReducer} from 'react';
const CartContext=createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
        case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
      default:
        return state;
    }
  };
  
  // Initial state
  const initialState = {
   cart: [],
  };
  


const CartProvider=({children})=>{
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart=(product)=>{
     dispatch({type:'ADD_TO_CART',payload:product})

        console.log(`${product} added to cart`);

       
    };

    useEffect(() => {
        console.log('Updated Cart:', state); // Log the updated cart state
      }, [state]);


    return(
        <CartContext.Provider value={{addToCart}}>

        {children}

        </CartContext.Provider>



    );




};

export {CartContext,CartProvider};

