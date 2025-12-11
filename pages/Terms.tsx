import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-display font-bold text-secondary mb-8">Conditions d'Utilisation</h1>
      <div className="prose prose-blue max-w-none text-gray-600">
        <p className="mb-4">Dernière mise à jour : 24 Mai 2024</p>
        
        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">1. Acceptation des conditions</h2>
        <p className="mb-4">
          En téléchargeant ou en utilisant l'application Delix, ces conditions s'appliquent automatiquement à vous – vous devez donc vous assurer de les lire attentivement avant d'utiliser l'application.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">2. Services proposés</h2>
        <p className="mb-4">
          Delix est une plateforme technologique mettant en relation des clients avec des partenaires (restaurants, supermarchés) et des livreurs indépendants. Nous ne préparons pas la nourriture et ne sommes pas responsables de la qualité des produits vendus par les Partenaires.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">3. Commandes et Paiements</h2>
        <p className="mb-4">
          Toute commande passée via l'application est considérée comme une offre d'achat. Le paiement est traité de manière sécurisée via nos prestataires de paiement tiers.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">4. Annulation et Remboursement</h2>
        <p className="mb-4">
          Vous pouvez annuler une commande tant que le restaurant ou le commerce ne l'a pas acceptée. Une fois la préparation commencée, l'annulation peut ne pas être remboursable.
        </p>
        
        <h2 className="text-xl font-bold text-gray-800 mt-6 mb-3">5. Responsabilité</h2>
        <p className="mb-4">
          Delix s'efforce d'assurer la disponibilité des services 24h/24 et 7j/7, mais ne peut être tenu responsable en cas d'interruption pour maintenance ou force majeure.
        </p>
      </div>
    </div>
  );
};

export default Terms;