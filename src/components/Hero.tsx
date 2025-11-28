import "./Hero.css";

interface HeroProps {
    title: string; 
    subtitle?: string;
    background?: string;
}

function Hero ( {title, subtitle, background}: HeroProps) {
    return(
        <section className="hero"> 
        <img src={background} alt={title} className="hero-bg"/>
            <div className="hero-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </section>
    );
}

export default Hero;