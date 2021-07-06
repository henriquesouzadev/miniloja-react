import React from 'react'
import styles from './Tips.module.css'
import TipsNumber from './TipsNumber'

const Tips = () => {

   const [error, setError] = React.useState(null);
   const [games, setGames] = React.useState(null);
   const [category, setCategory] = React.useState('pvp');
   const API_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

   function handleChange(e) {
      setCategory(e.target.value);
   }

   React.useEffect(() => {
      async function fetchGames() {
         let response;
         let json;

         try {
            setError(null);
            response = await fetch(`${API_URL}?platform=pc&category=${category}`, {
               "method": "GET",
               "headers": {
                  "x-rapidapi-key": "c64c7bf1f7mshedffac520a8c0bdp1eb427jsn4a52af1741f8",
                  "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
               },
            });
            json = await response.json();
            if (response.ok === false) throw new Error('Nenhum resultado foi encontrado');
         } catch (err) {
            json = null;
            setError(err.message);
         } finally {
            setGames(json)
            return { response, json };
         }
      }
      fetchGames();
   }, [category]);

   return (
      <section className="mt-80 mb-120">
         <div className="container">

            <div className="title">
               <h1>Dicas de games</h1>

               <form>
                  <select
                     name="categoria"
                     id="categoria"
                     className={styles.select}
                     defaultValue="pvp"
                     onChange={handleChange}
                  >
                     <option value="" disabled>Selecione a categoria</option>
                     <option value="mmorpg">MMORPG</option>
                     <option value="shooter">SHOOTER</option>
                     <option value="pvp">PVP</option>
                     <option value="dd">dd</option>
                  </select>
               </form>
            </div>

            <div className={`${styles.tipsList} mt-80`}>
               {error ? <p>{error}</p> : ''}
               {games && games.map(game => (
                  <div key={game.id} className={styles.item}>
                     <TipsNumber number={game.id} />
                     <img src={game.thumbnail} alt={game.title} className="img-fluid" />
                  </div>
               ))}
            </div>

         </div>
      </section>
   );

}
export default Tips;
