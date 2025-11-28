import CardRecrutment from "../components/CardRecrutment";
import Hero from "../components/Hero";
import "./NosMissions.css";

const dataCardPrez = {
	titreh2: "Protection rapprochée",
	imgSrc:
		"https://i.ytimg.com/vi/_GcOJLuaAM0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAXWGjCqT7K0r-GN2ea4TdIhwjs-g",
	imgAlt: "Mandalorian protecting Baby Yoda",
	paragraphe: `Suivi de Présence Prioritaire,
	Accompagnement Opérationnel Dédié,
	Supervision de Zone Restreinte,
	Maintien de Proximité Sécurisée`,
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: false,
};

const dataCardPrez2 = {
	titreh2: "Pilotes privés & Transferts",
	imgSrc:
		"https://static0.srcdn.com/wordpress/wp-content/uploads/Oscar-Isaac-as-Poe-Dameron-in-Star-Wars-7.jpg",
	imgAlt: "Pilot",
	paragraphe: `Relocalisation Stratégique
	Réalignement Sectoriel
	Éloignement Temporaire
	Coordination de Trajectoire`,
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: false,
};

const dataCardPrez3 = {
	titreh2: "Missions Diplomatiques",
	imgSrc:
		"https://lumiere-a.akamaihd.net/v1/images/galactic-senate-history-3_42298755.jpeg",
	imgAlt: "Diplomat senator in Star Wars",
	paragraphe: `Mandat de gestion des parties prenantes,
	Stabilisation de factions antagonistes,
	Harmonisation des Intérêts Sectoriels,
	Médiation de Transition Opérationnelle`,
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: false,
};

const dataCardPrez4 = {
	titreh2: "Opérations à confidentialité renforcée",
	imgSrc:
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi8ceS-DXswgrNLncjaiMf3CCet3a_1sVBBg&s",
	imgAlt: "Storm trooper",
	paragraphe: `réaffectation d'actifs et de valeurs,
	Audit de Réassignation Sélective,
	Réaffectation Temporaire ou définitive de Ressources Humaines,
	Transfert Prioritaire de Personnel,
	Programme de Déploiement Hors-Réseau,
	Dossier de Mise en Quarantaine Contractuelle,
	Mandat de Réorganisation de Présence Individuelle,
	Opération de Relocalisation Confidentielle,
	Intervention de Réévaluation Stratégique des Effectifs`,
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: false,
};

function NosMissions() {
	return (
		<div>
			<Hero
				title="Nos Missions"
				subtitle="Une mandale ou rien"
				background="../src/assets/bgHome.jpg"
			/>
			<CardRecrutment display={false} dataCardPrez={dataCardPrez} />
			<CardRecrutment display={false} dataCardPrez={dataCardPrez2} />
			<CardRecrutment display={false} dataCardPrez={dataCardPrez3} />
			<CardRecrutment display={false} dataCardPrez={dataCardPrez4} />
		</div>
	);
}

export default NosMissions;
