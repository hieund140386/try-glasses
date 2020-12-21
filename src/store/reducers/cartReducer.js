const initialState = {
  product: [],
}

const cartReducer = (state = initialState, action) => {
  const product = [...state.product];
  switch (action.type) {
    case 'ADD_TO_CART':
      {
        const addedProductIdx = product.findIndex((prod) => prod.id === action.payload.id);
        if (addedProductIdx === -1) {
          const newProduct = {...action.payload, quantity: 1};
          product.push(newProduct);
        } else {
          product[addedProductIdx].quantity++;
        }
        state.product = product;
        return {...state};
      }
    case 'REMOVE_FROM_CART':
      {
        const removedProductId = action.payload;
        const newProduct = product.filter(prod => prod.id !== removedProductId);
        state.product = newProduct;
        return {...state};
      }
    case 'ADJUST_PRODUCT':
      {
        const { adjustType, productId } = action.payload;
        const adjustedProductIdx = product.findIndex((prod) => prod.id === productId);
        if (adjustedProductIdx !== -1) {
          if (adjustType === 'increase') {
            product[adjustedProductIdx].quantity++;
          }
          if (adjustType === 'decrease') {
            if (product[adjustedProductIdx].quantity > 1) {
              product[adjustedProductIdx].quantity--;
            }
          }
          state.product = product;
        }
        return {...state}
      }
    default:
      return {...state}    
  }
}

export default cartReducer;