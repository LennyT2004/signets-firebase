import './Produit.scss';

function Produit({ id, nom, ventes, prix, panier, setPanier }) {

	function ajouterArticle() {
		// Obtenir une copie de la variable d'état panier
		let panierCopie = { ...panier };
		if (panierCopie[id]) {
			panierCopie[id].qte++;
		}
		else {
			panierCopie[id] = { qte: 1, prix: prix };
		}
		setPanier(panierCopie);
	}

	return (
		<div className="Produit" data-pid={id}>
			<span className="ventes">{ventes}</span>
			<span className="image">
				<img src={"produits/teeshirts/" + id + ".webp"} alt={nom} />
			</span>
			<div className="prd-info">
				<span className="nom">{nom}</span>
				<span className="prix">
					<span className="montant montant-fr">
						{prix.toFixed(2)}
					</span>
				</span>
			</div>
			<button onClick={ajouterArticle} className="btn-ajouter">Ajouter au panier</button>
		</div>
	);
}

export default Produit;