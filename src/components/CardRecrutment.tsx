import "./CardRecrutment.css";
import { useNavigate } from "react-router";

interface dataCardPrezI {
	titreh2: string;
	imgSrc: string;
	imgAlt: string;
	titreh3: string;
	paragraphe: string;
	buttonLink: string;
	buttonText: string;
	reverse: boolean;
}

interface CardRecrutmentI {
	dataCardPrez: dataCardPrezI;
	display:boolean;
}

function CardRecrutment({ dataCardPrez, display }: CardRecrutmentI) {
	const {
		titreh2,
		imgSrc,
		imgAlt,
		titreh3,
		paragraphe,
		buttonLink,
		buttonText,
		reverse,
	} = dataCardPrez;

	const navigate = useNavigate();

	return (
		<div className="card-recruitment">
			<h2 className="title2-card-recruitment">{titreh2} </h2>
			<section
				className={`section-card-recruitment ${reverse ? "reverse" : ""}`}
			>
				<img src={imgSrc} alt={imgAlt} />
				<article className="article-card-recruitment">
					<h3>{titreh3}</h3>
					<p>{paragraphe}</p>

					<button className={display ? "" : "button-none"}  onClick={() => navigate(buttonLink)} type="button">
						{buttonText}
					</button>
				</article>
			</section>
		</div>
	);
}

export default CardRecrutment;
