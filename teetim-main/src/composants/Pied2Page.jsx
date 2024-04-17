import './Pied2Page.scss';

function Pied2Page() {
  return (
    <footer className='Pied2Page'>
      <h2>teeTIM</h2>
      <div className="contenu">
        <section className="achats">
          <h3>Vos achats</h3>
          <nav>
            <a href="#">Foire aux questions</a>
            <a href="#">Livraison de votre colis</a>
            <a href="#">Conditions de vente</a>
            <a href="#">Politique de confidentialité</a>
          </nav>
        </section>
        <section className="apropos">
          <h3>À propos de teeTIM</h3>
          <nav>
            <a href="#">La compagnie</a>
            <a href="#">L'équipe</a>
            <a href="#">Emplois</a>
          </nav>
        </section>
        <section className="coordonnees">
          <h3>Nous joindre</h3>
          <nav>
            <span>Sans frais : <b>1 866 888 6666</b></span>
            <span>Courriel : aide@teetim.ca</span>
          </nav>
        </section>
      </div>
      <p className="da">&copy; Tous droits réservés, teeTIM 2024</p>
    </footer>
  );
}

export default Pied2Page;