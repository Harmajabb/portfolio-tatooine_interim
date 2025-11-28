import "./Testimonial.css";

export interface TestimonialItem {
  id: string | number;
  text: string;
  name: string;
  role: string;
  avatarSrc: string;
  avatarAlt: string;
}

interface TestimonialProps {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

function Testimonial({ title, subtitle = "", items }: TestimonialProps) {
  return (
    <section className="testimonial" aria-labelledby="testimonial-title">
      <div className="testimonial_header">
        <h2 id="testimonial-title" className="testimonial_heading">
          {title}
        </h2>
        {subtitle && <p className="testimonial_subtitle">{subtitle}</p>}
      </div>

      <ul className="testimonial_grid">
        {items.map((it) => (
          <li key={it.id} className="testimonial_card">
            <p className="testimonial_text">{it.text}</p>

            <div className="testimonial_person">
              {it.avatarSrc && (
                <div className="testimonial_avatar">
                  <img
                    src={it.avatarSrc}
                    alt={it.avatarAlt ?? ""}
                    loading="lazy"
                  />
                </div>
              )}

              <div className="testimonial_meta">
                <strong className="testimonial_name">{it.name}</strong>
                <span className="testimonial_role">{it.role}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Testimonial;
