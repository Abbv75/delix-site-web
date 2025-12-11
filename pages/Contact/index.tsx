import React, { useState } from 'react';
import { Send } from 'lucide-react';
import InfoCard from './InfoCard';

export default () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-secondary mb-4">Contactez-nous</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vous êtes un restaurant, un commerce, ou un utilisateur ? Notre équipe est à votre écoute pour répondre à toutes vos questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card */}
          <InfoCard />

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h2 className="text-2xl font-display font-bold text-gray-800 mb-6">Envoyez un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="jean@exemple.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="partnership">Devenir partenaire</option>
                  <option value="support">Support client</option>
                  <option value="jobs">Recrutement</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
                >
                  <Send size={18} />
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};