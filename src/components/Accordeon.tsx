import "./Accordeon.css";

import { useState } from "react";

function Accordeon() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggle = (index: any) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const items = [
		{
			id: 1,
			title: "Qui Sommes-Nous ?",
			content: `Fondée peu après la chute de l’Empire, notre unité opère depuis plus de vingt cycles standard dans les confins de la Bordure Extérieure. Ce qui n’était d’abord qu’un petit groupe d’anciens soldats clonés et de pilotes sans cause s’est transformé en une organisation redoutée, réputée pour sa précision et sa loyauté  envers le plus offrant`,
		},
		{
			id: 2,
			title: "Les missions",
			content: `Ciblage et Neutralisation (Assassinat) : L'élimination chirurgicale de cibles désignées, qu'il s'agisse de traîtres, de rivaux politiques ou de chefs de gangs, effectuée avec une précision qui garantit l'anonymat du client.
						Extraction et Enlèvement : Nous assurons l'enlèvement discret d'individus clés pour des interrogatoires ou des échanges, ou l'extraction rapide et sécurisée de VIP pris au piège dans des zones de conflit.

						Escorte et Protection rapprochée : Garantie de la sécurité des convois sensibles (armes, épices, données) ou protection personnelle de haut niveau pour des personnalités menacées par la Guilde des Chasseurs de Primes ou un Syndicat rival.

						Sabotage et Infiltration : Pénétration non autorisée d'installations (militaires, industrielles, de la pègre) pour des missions de destruction d'actifs, de piratage de données ou de perturbation de la chaîne de commandement ennemie.

						Récupération de Biens : Missions de "retrouvailles" complexes pour récupérer des biens volés, des artefacts, des vaisseaux ou des technologies de pointe, quelle que soit la force qui les détient.

						Chasse à la Prime (Morts ou Vifs) : Traque et capture des individus sous mandat, livrés selon les termes du contrat au client ou à la juridiction compétente.`,
		},
		{
			id: 3,
			title: "Arsenal et Expertise Opérationnelle",
			content: `Des outils à la hauteur de la Galaxie

						Notre succès n'est pas le fruit du hasard, mais celui d'une préparation méticuleuse et d'un équipement qui dépasse les standards du marché. Chaque contrat est approché avec une combinaison de puissance de feu brute et de technologies de pointe :

						Flotte Modifiée : Nos opérations reposent sur une flotte de vaisseaux légers et rapides de classe YT-2400 ou FireSpray (selon l'échelle de votre organisation), lourdement modifiés. Équipés de brouilleurs de signature et de canons laser à cadence de tir rapide, ils garantissent une arrivée discrète et un départ explosif si nécessaire.

						Armement Lourd : Nous ne faisons pas dans la dentelle. Notre arsenal comprend des blasters lourds DLT-19X, des lance-roquettes à tête chercheuse, et des munitions ioniques spécialisées pour la neutralisation de véhicules ou de droïdes.

						Expertise Multiple : Nos équipes sont composées d'anciens éclaireurs Impériaux, de contrebandiers maîtres-pilotes et de techniciens cybernétiques capables de déverrouiller n'importe quel terminal ou de neutraliser n'importe quel bouclier. Que ce soit pour une infiltration furtive ou un assaut frontal, nous avons l'expert qu'il vous faut.`,
		},
		{
			id: 4,
			title: "Termes et Conditions des Contrats",
			content: `Le Code du Mercenaire : Crédits et Conséquences

						La confiance s'achète, mais le risque se paie. Toute transaction avec notre entreprise est soumise à un code strict, non négociable :

						Tarification sur Risque : Le montant de nos services est indexé sur trois facteurs : le niveau de dangerosité du secteur (présence de l'Empire, du Cartel Hutt, ou de pirates), la sensibilité politique de la cible et le délai d'exécution. Les missions urgentes ou irréalisables par d'autres nécessitent une majoration conséquente.

						Acompte et Paiement : Un acompte obligatoire de 50 % du montant total est exigé avant le décollage du premier vaisseau. Cet acompte est non remboursable, quel que soit l'issue de la mission. Le solde est payable intégralement et immédiatement à la livraison (cible ou marchandise).

						Clause de Non-Interférence : Une fois le contrat validé, vous devez vous abstenir de toute ingérence dans nos méthodes opérationnelles. Si l'exécution de la mission est compromise par l'action du client, le contrat est considéré comme rempli, et le paiement total est dû.

						Affiliations : Nous n'acceptons pas de missions impliquant l'Empire, la Nouvelle République ou le Premier Ordre dans le cadre d'opérations idéologiques. Nous sommes apolitiques. Nous servons uniquement les intérêts de nos clients, dans la limite de nos capacités techniques.`,
		},
	];

	return (
		<div className="accordion-container">
			{items.map((item, i) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<details
					key={item.id}
					open={openIndex === i}
					onClick={(e) => {
						e.preventDefault();
						toggle(i);
					}}
					className="accordion-item"
				>
					<summary className="accordion-summary">
						<span className="accordion-title">{item.title}</span>
						<span
							className={`accordion-arrow ${openIndex === i ? "open" : ""}`}
						>
							›
						</span>
					</summary>

					<div className="accordion-content">
						<p>{item.content}</p>
					</div>
				</details>
			))}
		</div>
	);
}

// function Accordeon() {
// 	return (
// 		<div>
// 			<h3>blablabla</h3>
// 			<p>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sequi
// 				ea ab quam vel architecto. Dolorum repellat non corporis optio libero
// 				suscipit praesentium vitae aspernatur veritatis. Sit eum qui minima.
// 			</p>
// 			<div className="accordeon">
// 				<details className="accordeon1">
// 					<summary> Depuis quand on est là </summary>
// 					<p>
// 						{" "}
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
// 						harum sint, quis impedit suscipit tempore perspiciatis aperiam atque
// 						laudantium esse, dignissimos cum sunt cumque reiciendis! Rerum enim
// 						nemo numquam tempore?
// 					</p>
// 				</details>

// 				<details className="accordeon2">
// 					<summary> Les missions </summary>
// 					<p>
// 						{" "}
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
// 						harum sint, quis impedit suscipit tempore perspiciatis aperiam atque
// 						laudantium esse, dignissimos cum sunt cumque reiciendis! Rerum enim
// 						nemo numquam tempore?
// 					</p>
// 				</details>

// 				<details className="accordeon3">
// 					<summary> Présentation rapide de l’entreprise </summary>
// 					<p>
// 						{" "}
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
// 						harum sint, quis impedit suscipit tempore perspiciatis aperiam atque
// 						laudantium esse, dignissimos cum sunt cumque reiciendis! Rerum enim
// 						nemo numquam tempore?
// 					</p>
// 				</details>

// 				<details className="accordeon4">
// 					<summary> Question libre service </summary>
// 					<p>
// 						{" "}
// 						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam,
// 						harum sint, quis impedit suscipit tempore perspiciatis aperiam atque
// 						laudantium esse, dignissimos cum sunt cumque reiciendis! Rerum enim
// 						nemo numquam tempore?
// 					</p>
// 				</details>
// 			</div>
// 		</div>
// 	);
// }
export default Accordeon;
