import { useContext, useState } from "react";
import { Link } from "react-router";
import DataContext from "../contexts/DataContext";
import Hero from "../components/Hero";

import "./Mercenaries.css";

function Mercenaries() {
	const { data } = useContext(DataContext);
	const [searchTerm, setSearchTerm] = useState("");
	const [speciesFilter, setSpeciesFilter] = useState("");
	const [worldFilter, setWorldFilter] = useState("");
	const [selectedMercenary, setSelectedMercenary] = useState(null);

	const uniqueSpecies = [...new Set(data.map((m) => m.species))];
	const uniqueWorlds = [...new Set(data.map((m) => m.homeworld))];

	const filteredMercenaries = data.filter((mercenary) => {
		const matchesSearch = mercenary.name
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		const matchesSpecies =
			!speciesFilter || mercenary.species === speciesFilter;
		const matchesWorld = !worldFilter || mercenary.homeworld === worldFilter;
		return matchesSearch && matchesSpecies && matchesWorld;
	});

	const openModal = (mercenary) => {
		setSelectedMercenary(mercenary);
	};

	const closeModal = () => {
		setSelectedMercenary(null);
	};

	return (
		<>
			<Hero
				title="Mercenaires"
				subtitle="Une mandale ou rien"
				background="../src/assets/bgHome.jpg"
			/>
			<section className="mercenaries-section">
				<h2>Registre des Mercenaires</h2>
				<div className="search-section">
					<div className="search-filters">
						<input
							type="text"
							placeholder="Recherchez votre prochain héros (ou voyou)..."
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className="search-input"
						/>
						<select
							value={speciesFilter}
							onChange={(e) => setSpeciesFilter(e.target.value)}
							className="filter-select"
						>
							<option value="">Toutes les espèces</option>
							{uniqueSpecies.map((species) => (
								<option key={species} value={species}>
									{species}
								</option>
							))}
						</select>
						<select
							value={worldFilter}
							onChange={(e) => setWorldFilter(e.target.value)}
							className="filter-select"
						>
							<option value="">Tous les mondes</option>
							{uniqueWorlds.map((world) => (
								<option key={world} value={world}>
									{world}
								</option>
							))}
						</select>
						<button
							onClick={() => {
								setSearchTerm("");
								setSpeciesFilter("");
								setWorldFilter("");
							}}
							className="reset-button"
						>
							Réinitialiser
						</button>
					</div>
				</div>

				<div className="mercenaries-general">
					{filteredMercenaries.map((mercenary) => (
						<article key={mercenary.id} className="mercenary-GlobalCard">
							<img
								src={mercenary.image}
								alt={`Portrait de ${mercenary.name}`}
							/>
							<h2>{mercenary.name}</h2>
							<p>
								👽 {mercenary.species} &nbsp; 🌍 {mercenary.homeworld}
							</p>
							<button
								type="button"
								className="mercenary-btn"
								onClick={() => openModal(mercenary)}
							>
								Fiche du Mandale
							</button>
						</article>
					))}
				</div>
			</section>
			{selectedMercenary && (
				<div className="modal-overlay" onClick={closeModal}>
					<div className="modal-content" onClick={(e) => e.stopPropagation()}>
						<button className="modal-close" onClick={closeModal}>
							×
						</button>
						<h2>Demander plus d'informations sur le recrutement</h2>
						<p className="modal-mercenary-name">{selectedMercenary.name}</p>
						<p>Vous souhaitez en savoir plus sur ce mercenaire ?</p>
						<div className="modal-actions">
							<Link to="/pages/Contact" className="modal-btn modal-btn-primary">
								Contacter le recruteur
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Mercenaries;
