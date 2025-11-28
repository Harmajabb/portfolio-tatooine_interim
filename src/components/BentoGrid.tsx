import "./BentoGrid.css";
import heroRight from "../assets/hero-right.png";
import heroLeft from "../assets/hero-left.png";
import { Link } from "react-router";

function BentoGrid() {
    return (
        <section className="bento" aria-label="bento grid">
        {/* A */}
            <article className="bento_item a">
                <div className="card column-card">
                    <h3 className="card_title">Prestations</h3>
                    <p className="card_text">Besoin d'eliminer une certaine personne ? Nous sommes la. Besoin d'aller de point A a B sans vous faire tuer ? On est toujours la pour cela.</p>
                    <Link to="/pages/about" className="card_cta">Nos Prestations</Link>

                <div className="card_media" aria-hidden="true">
                    <img src="https://images.pexels.com/photos/11988626/pexels-photo-11988626.jpeg" alt="" loading="lazy" />
                </div>
                </div>
            </article>
      
      {/* C */}
            <article className="bento_item c">
                    <img className="bento_img" src={heroRight} alt="" loading="lazy" />
            </article>

      {/* D */}
            <article className="bento_item d">
                    <img className="bento_img" src={heroLeft} alt="" loading="lazy" />
            </article>

      {/* E */}
            <article className="bento_item e">
                <div className="card card-noMedia">
                    <h3 className="card_title">nous contacter</h3>
                    <p className="card_text">Besoin d'un petit depannage? On est la.</p>
                    <Link to="/pages/Contact" className="card_cta">Nous contacter</Link>
                </div>
            </article>

      {/* F */}
            <article className="bento_item f">
                <div className="card column-card">
                    <h3 className="card_title">mercenaires</h3>
                    <p className="card_text">Les plus forts au plus impitoyables, tous sont appates par l'argent (ou presque)</p>
                    <Link to="/pages/Mercenaries" className="card_cta">Nos mercenaires</Link>
                <div className="card_media" aria-hidden="true">
                    <img src="https://images.pexels.com/photos/12493995/pexels-photo-12493995.jpeg" alt="" loading="lazy" />
                </div>
                </div>
            </article>
        </section>
  );
}
export default BentoGrid;
