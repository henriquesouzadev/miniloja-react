import React from 'react';

export const CartContext = React.createContext();
export const GlobalCart = ({ children }) => {

   const [items, setItems] = React.useState([]);

   function addProduct(item) {
      setItems([...items, item])
   }

   function removeProduct(id) {
      setItems(items.filter(
         item => item.id !== id
      ));
   }

   return (
      <CartContext.Provider
         value={{
            items,
            addProduct,
            removeProduct
         }}
      >
         {children}
      </CartContext.Provider>
   );

}