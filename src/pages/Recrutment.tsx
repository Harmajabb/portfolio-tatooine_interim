import CardRecrutment from "../components/CardRecrutment";
import Hero from "../components/Hero";

const dataCardPrez = {
	titreh2: "Recruitment",
	imgSrc:
		"https://www.okiwoki.com/images/produits/parodies-cinema/i-want-you-pull-enfant-noir-h-11-12-ans_2.jpg",
	imgAlt: "Darth Vador",
	titreh3: "Vous souhaitez nous rejoindre ?",
	paragraphe:
		"Chez Tatooine Intérim, on ne cherche pas des héros... juste des gens qui savent tirer droit (ou presque). Si tu as survécu à une cantina un vendredi soir, tu as déjà l’expérience requise. Blaster rouillé, droïde grincheux ou sabre laser d’occasion ? Pas de souci, on recrute tout ce qui respire — ou bippe. Rejoins notre équipe et gagne plus de crédits qu’un contrebandier chanceux !",
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: false,
};

const dataCardPrez2 = {
	titreh2: "Carrière",
	imgSrc:
		"https://cdnph.upi.com/sv/ph/og/i/7291480971867/2016/1/14809720545897/v1.5/Texas-police-try-to-teach-Stormtrooper-to-shoot-in-recruitment-video.jpg",
	imgAlt: "Storm trooper",
	titreh3: "L'évolution professionnel chez Tatooine Interim",
	paragraphe:
		"Chez Tatooine Intérim, ton avenir ne se limite pas à tirer sur des Jawas pour quelques crédits. Commence simple, avec un blaster d’occasion, et grimpe les échelons jusqu’à chef d’escouade interstellaire — ou maître du café, selon ton destin. Grâce à notre programme de formation express, tu apprendras à viser, négocier et survivre aux réunions avec des Hutts. Alors, prêt à transformer ton job de mercenaire en véritable légende galactique ?",
	buttonText: "Contactez-nous",
	buttonLink: "/pages/Contact",
	reverse: true,
};

function Recrutment() {
	return (
		<div>
			<Hero
				title="Rejoignez-nous!"
				subtitle="Une mandale ou rien"
				background="../src/assets/bgHome.jpg"
			/>
			<CardRecrutment display={true} dataCardPrez={dataCardPrez} />
			<CardRecrutment display={true} dataCardPrez={dataCardPrez2} />
		</div>
	);
}

export default Recrutment;
