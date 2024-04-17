import './Principal.scss';
import ListeProduits from './ListeProduits';
import { useState } from 'react';

function Principal({panier, setPanier}) {

  // Utiliser une variable (d'état) pour le tri
  const [tri, setTri] = useState("alea");

  // Utiliser une variable (d'état) pour le filtre
  const [filtre, setFiltre] = useState("");

  
  return (
    <main className="Principal page-produits page-teeshirts">
      <article className="amorce">
        <h1>Nos teeshirts</h1>
        <section className="controle">
          <form action="" method="get">
            <div className="filtre">
              <label htmlFor="filtre">Filtrer par : </label>
              <select name="filtre" id="filtre" onChange={(evt) => {setFiltre(evt.target.value)}}>
                <option value="">Tous les produits</option>
                <option value="animaux">Animaux</option>
                <option value="inusite">Inusité</option>
                <option value="nature">Nature</option>
                <option value="sport">Sport</option>
              </select>
            </div>
            <div className="tri">
              <label htmlFor="tri">Trier par : </label>
              <select name="tri" id="tri" value={tri} onChange={(evt) => setTri(evt.target.value)}>
                <option value="alea">Aléatoire</option>
                <option value="prixASC">Prix / ascendant</option>
                <option value="prixDESC">Prix / descendant</option>
                <option value="nomASC">Nom / ascendant</option>
                <option value="nomDESC">Nom / descendant</option>
                <option value="dacDESC">Nouveauté</option>
                <option value="ventesDESC">Meilleur vendeur</option>
              </select>
            </div>
          </form>
        </section>
      </article>

      <ListeProduits filtre={filtre} tri={tri} panier={panier} setPanier={setPanier} />

    </main>
  );
}

export default Principal;