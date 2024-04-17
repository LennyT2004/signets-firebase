// Importer le CSS de ce compsant
import "./Entete.scss";
// Importer l'image du logo
import logo from "../assets/logo.png";

// Importer le composant MUI Badge
import Badge from '@mui/material/Badge';
// Importer une icône
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

// Un composant React de UI est une fonction qui retourne
// du JSX
// On utilise : destructuring [assignment]
function Entete({panier}) {
  // Calcul du nombre dA'rticles dans le panier
  // 1er essai : programmation impérative
  // for(let idArticle in panier) {
  //   nbrArticles += panier[idArticle].qte;
  //   sousTotal += panier[idArticle].qte * panier[idArticle].prix;
  // }

  // 2e essai : programmation déclarative
  //
  console.log("Tableau des valeurs dans l'objet panier : "
  , Object.values(panier));

  let nbrArticles = Object.values(panier).reduce((acc, elt) => acc + elt.qte, 0);
  let sousTotal = Object.values(panier).reduce((acc, elt) => acc + (elt.qte * elt.prix), 0);

  return (
    <header className="Entete">
      <nav className="barre-haut">
        {/* <!-- Répéter une balise A pour chaque langue disponible --> */}
        <a title="ENGLISH" href="#" className="">en</a>
        <a title="FRANÇAIS" href="#" className="actif">fr</a>

      </nav>
      <nav className="barre-logo">
        <label htmlFor="cc-btn-responsive" className="material-icons burger">menu</label>
        <a className="logo" href="#">
          <img src={logo} alt="Accueil" />
        </a>
        <div className="panier-icone">
          <Badge badgeContent={nbrArticles} color="secondary">
            <label htmlFor="panier-cc" className="material-icons">
              <ShoppingBasketIcon />
            </label>
          </Badge>

          <input type="checkbox" id="panier-cc"/>
          <div className="sommaire-panier">
            <div className="ligne1">
              <span className="nb-articles">
                <span className="etiquette">#Articles : </span>
                <span className="nombre">{nbrArticles}</span>
              </span>
              <label htmlFor="panier-cc" className="material-icons">close</label>
            </div>
            <div className="ligne2">
              <span className="sous-titre">Sous-total du panier</span>
              <span className="sous-total montant-fr">{sousTotal.toFixed(2)}</span>
            </div>
            <div className="ligne3 btn-afficher-panier">
              <a href="#">Voir le panier d'achats</a>
            </div>
          </div>
        </div>
        <input className="recherche" type="search" name="motscles" placeholder="Mots-clés de votre recherche"/>
      </nav>
      <input type="checkbox" id="cc-btn-responsive"/>
      <nav className="principale">
        <label htmlFor="cc-btn-responsive" className="menu-controle material-icons">close</label>
        <a href="#" className="actif">Teeshirts</a>
        <a href="#" className="">Casquettes</a>
        <a href="#" className="">Hoodies</a>
        <span className="separateur"></span>
        <a href="#" className="">Aide</a>
        <a href="#" className="">À propos de nous</a>
      </nav>
    </header>
  );
}
// Exporter le composant pour qu'il soit accessible par importation ailleurs
export default Entete;