import { useEffect, useState } from "react";
import './Appli.scss';
import Entete from './Entete';
import Principal from './Principal';
import Pied2Page from './Pied2Page';

function Appli() {
  const [compteur, setCompteur] = useState(0);
  const [panier, setPanier] = useState(() => JSON.parse(localStorage.getItem("panier")) || {});

  useEffect(
    () => {
      localStorage.setItem("panier", JSON.stringify(panier));
      console.log("====================> localStorage est modifié.");
    }
    ,
    [panier]
  );

  return (
    <div className="Appli">
      <Entete panier={panier} />
      <button onClick={() => setCompteur(compteur + 1)}>Augmenter ({compteur})</button>
      <Principal panier={panier} setPanier={setPanier} />
      <Pied2Page />
    </div>
  );
}

export default Appli;