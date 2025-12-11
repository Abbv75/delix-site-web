import { Mail, Phone, MapPin } from 'lucide-react';

export default () => {
    return (
        <div className="bg-secondary text-white rounded-2xl p-8 lg:p-12 shadow-xl h-full flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-display font-bold mb-8">Informations</h2>
                <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                        <div className="bg-blue-700 p-3 rounded-lg">
                            <Phone className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <p className="text-blue-200 text-sm">Téléphone</p>
                            <p className="font-medium text-lg">+223 66 03 53 00</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="bg-blue-700 p-3 rounded-lg">
                            <Mail className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <p className="text-blue-200 text-sm">Email</p>
                            <p className="font-medium text-lg">bore.younous59@gmail.com</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="bg-blue-700 p-3 rounded-lg">
                            <MapPin className="w-6 h-6 text-orange-400" />
                        </div>
                        <div>
                            <p className="text-blue-200 text-sm">Adresse</p>
                            <p className="font-medium text-lg">Bamako, Mali<br />Sotuba vers le Mali lait</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="mt-12">
                <div className="w-full h-48 bg-blue-800 rounded-xl opacity-50 flex items-center justify-center">
                    <span className="text-sm">Carte Google Maps Integration</span>
                </div>
            </div>
        </div>
    )
}
