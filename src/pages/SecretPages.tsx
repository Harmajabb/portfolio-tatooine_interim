import React from 'react';
import { Link } from "react-router";
import monImage from '../assets/bg-img-cantina.png'; 
import '../pages/SecretPages.css';

function SecretPage() {
  return (
    <div>
      <div className="image-container">
        <img src={monImage} alt="Tatooine" />
        <Link to="/Home" className="clickable-zone"></Link>
      </div>
    </div>
  );
}

export default SecretPage;