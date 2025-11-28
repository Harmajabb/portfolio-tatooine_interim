{/* import composant */}
import BentoGrid from "../components/BentoGrid";
import Hero from "../components/Hero";
import CardRecrutment from "../components/CardRecrutment";
{/* import css */}
import "./Home.css";
{/* import img */}
import bgHome from "../assets/bgHome.jpg"

const nosServices = {
	titreh2: "Services",
	imgSrc:
		"https://external-preview.redd.it/OcgNppsJSiMIAwfb9Y4rP1vxGYMlWizxP54nRgaVRp4.jpg?width=640&crop=smart&auto=webp&s=b9fe4eb210cd24a2dda0df04ff5b261b8cf1c3dc",
	imgAlt: "Stomrptooper",
	titreh3: "Nos services",
	paragraphe:
		"L'agence de recrutement la plus dangereuse de la galaxie. Sélectionne ton mercenaire, paie en crédits impériaux, et prie pour ta survie.",
	buttonText: "a propos",
	buttonLink: "",
	reverse: false,
};

function Home() {
	return (
		<>
		<Hero 
		title="Tatooine Interim"
		subtitle="Une mandale ou rien"
		background={bgHome}/>

	<h2>About stuff</h2>
	<BentoGrid />
	<CardRecrutment display={true} dataCardPrez={nosServices} />

	</>);
}

export default Home;