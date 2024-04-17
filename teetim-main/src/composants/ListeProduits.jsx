import './ListeProduits.scss';
import teeshirts from '../data/teeshirts.json';
import Produit from './Produit';

function ListeProduits({ panier, filtre, setPanier, tri }) {

	return (
		<article className="ListeProduits">
			{/* Début : UN produit */}
			{
				teeshirts
					.filter(({categorie}) => {
						return filtre == categorie || filtre == "";
					})
					.sort(fctsDeComparaison[tri])
					.map((tee) => {
						return <Produit
							panier={panier}
							setPanier={setPanier}
							key={tee.id}
							id={tee.id}
							nom={tee.nom}
							prix={tee.prix}
							ventes={tee.ventes}
						/>
					})
			}
		</article>
	);
}

const fctsDeComparaison = {
	alea: (a, b) => Math.random() - 0.5,
	prixASC: (a, b) => a.prix - b.prix,
	prixDESC: (a, b) => b.prix - a.prix,
	nomASC: (a, b) => a.nom.localeCompare(b.nom, "fr"),
	nomDESC: (a, b) => b.nom.localeCompare(a.nom, "fr"),
	dacDESC: (a, b) => b.dac.localeCompare(a.dac),
	ventesDESC: (a, b) => b.ventes - a.ventes
}

export default ListeProduits;