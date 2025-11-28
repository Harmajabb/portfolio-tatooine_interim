import "./Footer.css"

interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer = ({ companyName = "Tatooine Interim", year = 2026 } : FooterProps) => {
  return (
    <footer className = "footer">
      {companyName} © {year} - Tous droits réservés.
    </footer>
  );
};

export default Footer;