import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display font-bold text-secondary mb-8">Politique de Confidentialité</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="mb-4">Dernière mise à jour : 24 Mai 2024</p>
        
        <p className="mb-4">
            Chez Delix, nous accordons une grande importance à la confidentialité de vos données. Cette politique explique comment nous collectons, utilisons et protégeons vos informations personnelles.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Collecte des données</h2>
        <p className="mb-4">
          Nous collectons les informations suivantes lorsque vous utilisez notre application :
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Informations d'identité (Nom, Prénom).</li>
            <li>Coordonnées (Email, Numéro de téléphone, Adresse de livraison).</li>
            <li>Données de localisation (pour le suivi de la livraison).</li>
            <li>Historique des commandes.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Utilisation des données</h2>
        <p className="mb-4">
          Vos données sont utilisées pour :
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Traiter et livrer vos commandes.</li>
            <li>Communiquer avec vous concernant le statut de votre commande.</li>
            <li>Améliorer nos services et notre logistique.</li>
            <li>Vous envoyer des offres promotionnelles (avec votre consentement).</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. Partage des données</h2>
        <p className="mb-4">
          Nous partageons certaines données nécessaires avec :
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Les restaurants et commerces partenaires (pour la préparation).</li>
            <li>Les livreurs (pour l'acheminement).</li>
            <li>Les prestataires de paiement.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. Sécurité</h2>
        <p className="mb-4">
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">5. Vos droits</h2>
        <p className="mb-4">
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Contactez-nous à privacy@delix.com pour exercer ces droits.
        </p>
      </div>
    </div>
  );
};

export default Privacy;