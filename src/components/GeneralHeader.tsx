import { NavLink } from "react-router";

import "./GeneralHeader.css";

function GeneralHeader() {
	return (
		<header className="site-header">
			<div className="container-header">
				<NavLink to="/" className="logo-header-link">
					<img src="../src/assets/logv2.png" alt="" className="logo-header" />
				</NavLink>
				<nav className="navbar-header">
					<NavLink to="/Home">Accueil</NavLink>
					<NavLink to="/pages/Mercenaries">Mercenaires</NavLink>
					<NavLink to="/pages/NosMissions">Missions</NavLink>
					<NavLink to="/pages/Recrutment">Recrutement</NavLink>
					<NavLink to="/pages/About">Nous</NavLink>
					<NavLink to="/pages/Contact">Contact</NavLink>
				</nav>
			</div>
		</header>
	);
}

export default GeneralHeader;
