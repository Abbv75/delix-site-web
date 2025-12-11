
export default () => {
    return (
        <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-secondary mb-12">Notre Équipe</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                        <img
                            src={`https://picsum.photos/200/200?random=${i}`}
                            alt="Team Member"
                            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-md object-cover"
                        />
                        <h4 className="text-xl font-bold text-gray-800">Membre {i}</h4>
                        <p className="text-primary font-medium">Poste Clé</p>
                    </div>
                ))}
            </div>
        </div>
    )
}