import React from 'react';
import styles from './Minicart.module.css'
import { CartContext } from '../../Context/CartContext';

const Minicart = (props) => {

   const cart = React.useContext(CartContext);
   const [cep, setCep] = React.useState('');
   const [error, setError] = React.useState(null);
   const [address, setAddress] = React.useState(null);
   const [totalCart, setTotalCart] = React.useState(0);

   function handleSubmit(e) {
      e.preventDefault();
      getCep(cep);
   }

   function handleChange(e) {
      setCep(e.target.value);
   }

   let convertToReal = (item) => item.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
   })

   React.useEffect(() => {
      if (cart.items.length > 0) {
         let cartPrices = cart.items.map(item => item.price);
         setTotalCart(cartPrices.reduce((acc, item) => acc + item));
      }
   }, [cart]);

   async function getCep(cep) {
      const regex = /[0-9]{5}([- ]?[0-9]{4})?/;
      let response;
      let json;

      try {
         setAddress(null);
         setError(null);

         if (!regex.test(cep)) throw new Error('CEP inválido');

         response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
         json = await response.json();

         if (json.erro) throw new Error('CEP não encontrado');
      } catch (e) {
         json = null;
         setError(e.message);
      } finally {
         setAddress(json);
      }
   }

   return (
      <div className={`${styles.minicart} ${props.cartOpen && styles.active}`}>
         <h3 className={styles.title}>Carrinho</h3>

         <div className={styles.list}>
            {cart.items.length > 0 ? (
               cart.items.map(item => (
                  <div className={styles.item} key={item.id}>
                     <div className={styles.name}>{item.name}</div>
                     <div className={styles.price}>
                        {convertToReal(item.price)}
                     </div>
                  </div>

               ))
            ) : (
               <p>Seu carrinho está vazio</p>
            )}
         </div>

         {cart.items.length > 0 && (
            <>
               <div className={styles.shipping}>
                  <form onSubmit={handleSubmit}>
                     <input
                        type="text"
                        name="cep"
                        id="cep"
                        onChange={handleChange}
                     />
                     <button type="submit">Calcular</button>
                  </form>
               </div>
            </>
         )}

         {error && (
            <div className={styles.error}>{error}</div>
         )}

         {address && (
            <>
               <div className={styles.address}>
                  <p>{address.logradouro}</p>
                  <p>{address.bairro} - {address.localidade}/{address.uf}</p>
               </div>
               <div className={styles.shippingPrice}>Frete grátis</div>
            </>
         )}

         {cart.items.length > 0 && (
            <div className={styles.total}>
               <div>
                  <strong>Valor total:</strong>
               </div>
               <div>{convertToReal(totalCart)}</div>
            </div>
         )}

      </div>
   )
}

export default Minicart;
