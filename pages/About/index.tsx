import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Award, Users, TrendingUp } from 'lucide-react';
import TeamZone from './TeamZone';

const data = [
  { name: 'Jan', Livraisons: 4000, Partenaires: 24 },
  { name: 'Fév', Livraisons: 3000, Partenaires: 13 },
  { name: 'Mar', Livraisons: 2000, Partenaires: 38 },
  { name: 'Avr', Livraisons: 2780, Partenaires: 39 },
  { name: 'Mai', Livraisons: 1890, Partenaires: 48 },
  { name: 'Juin', Livraisons: 2390, Partenaires: 58 },
  { name: 'Juil', Livraisons: 3490, Partenaires: 73 },
];

export default () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">À Propos de Delix</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Nous redéfinissons la logistique urbaine pour rapprocher les commerçants de leurs clients.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold text-secondary">Notre Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Née de la volonté de simplifier le quotidien, <strong>Delix</strong> est une plateforme technologique connectant les utilisateurs aux meilleurs commerces de leur ville.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Que ce soit pour un repas, des courses hebdomadaires ou l'envoi urgent d'un colis, notre logistique réactive et notre réseau de partenaires garantissent une fiabilité à toute épreuve.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col items-center p-4 bg-orange-50 rounded-xl w-32">
                <Award className="text-primary w-8 h-8 mb-2" />
                <span className="font-bold text-gray-800">Qualité</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-orange-50 rounded-xl w-32">
                <Users className="text-primary w-8 h-8 mb-2" />
                <span className="font-bold text-gray-800">Proximité</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-orange-50 rounded-xl w-32">
                <TrendingUp className="text-primary w-8 h-8 mb-2" />
                <span className="font-bold text-gray-800">Vitesse</span>
              </div>
            </div>
          </div>
          <div className="relative h-80 lg:h-96 w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
            <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">Croissance de nos activités</h3>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend />
                <Bar dataKey="Livraisons" fill="#F97316" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Partenaires" fill="#1E40AF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Team Section Placeholder */}
        {/* <TeamZone /> */}
      </div>
    </div>
  );
};
