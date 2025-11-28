import Hero from "../components/Hero";
import bgHome from "../assets/bgHome.jpg";
import React, { useState } from 'react';
import "../pages/Contact.css";

function Contact() {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [secretcode, setSecretcode] = useState('');
	const [message, setMessage] = useState('');
	const [credit, setCredit] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalMessage, setModalMessage] = useState('');

    async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);

    if (!nom || !email || !message) {
        setModalMessage("Veuillez remplir tous les champs obligatoires.");
        setIsModalOpen(true);
        setIsSubmitting(false);
        return;
    }

    try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        const messageSucces = 
		`
		Nom : ${nom}
		Email : ${email}
		Téléphone : ${phone}
		Code secret : ${secretcode}
		Crédit : ${credit} 
		Message : ${message}`;
        setModalMessage(messageSucces);
        setIsModalOpen(true);
    } catch (error) {
        console.error('Erreur lors de la soumission:', error);
        setModalMessage("Une erreur est survenue lors de la soumission.");
        setIsModalOpen(true);
    } finally {
        setIsSubmitting(false);
    }
}

    return (
        <>
            <Hero
                title="Contactez-nous !"
                subtitle="Préparer votre mission !"
                background={bgHome}/>
            <div className="detail-form">
				<section>
				<p>Pour toute demande de service (protection, sabotage, 'négociation') ou pour déposer votre candidature de 'consultant', détaillez votre requête ici. Les transmissions sont (relativement) sécurisées.<br/><br/>N'oubliez pas de verser le 'tribut' initial pour activer la mission. Les tarifs ne sont pas négociables, et la seule monnaie locale qu'on accepte, c'est le Crédit.</p>
                </section>
				<form className="form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nom">
                            Nom :
                            <input 
								className="form-input"
                                id="nom"
                                type="text" 
                                value={nom} 
                                onChange={(e) => setNom(e.target.value)}
                                disabled={isSubmitting}
                                aria-required="true"
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="email">
                            Email :
                            <input 
								className="form-input"
                                id="email"
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSubmitting}
                                aria-required="true"
                            />
                        </label>
                    </div>
					<div>
                        <label htmlFor="phone">
                            Téléphone :
                            <input
								className="form-input"
                                id="phone"
                                type="tel" 
                                value={phone} 
                                onChange={(e) => setPhone(e.target.value)}
                                disabled={isSubmitting}
                                aria-required="true"
                            />
                        </label>
                    </div>
					<div>
                        <label htmlFor="secretcode">
                            Code secret :
                            <input
								className="form-input"
                                id="secretcode"
                                type="text" 
                                value={secretcode} 
                                onChange={(e) => setSecretcode(e.target.value)}
                                disabled={isSubmitting}
                                aria-required="true"
                            />
                        </label>
                    </div>
					<div>
                        <label htmlFor="Credit">
                            Crédit :
                            <input
								className="form-input"
								id="credit"
								value={credit} 
                                onChange={(e) => setCredit(e.target.value)}
                                disabled={isSubmitting}
                                aria-required="true"
                            />
                        </label>
                    </div>
					<div>
                        <label htmlFor="Message">
                            Message :
                            <textarea 
								className="form-input"
								id="message"
								value={message} 
                                onChange={(e) => setMessage(e.target.value)}
                                disabled={isSubmitting}
                                aria-required="true"
                            />
                        </label>
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
					{isModalOpen && (
  					<div className="modal-overlay">
    				<div className="modal-content">
      				<h3 className="titre-modal">TRANSMISSION COMPLETE !</h3>
      				<pre>{modalMessage}</pre>
      				<button onClick={() => setIsModalOpen(false)}>
        				Fermer
      						</button>
    					</div>
 				 </div>
				)}
                </form>
            </div>
        </>
    );
}

export default Contact;
