import React from "react";

const VEHICLES = [
  {
    id: 1,
    name: "RENAULT Trafic",
    price: 15,
    km: "0.25€ / km",
    img: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=60"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#070607] text-white font-sans">
      
      {/* SECTION TEXTE D’ACCUEIL */}
      <section className="bg-black/40 border-b border-[#222] py-8 text-center px-6">
        <h1 className="text-4xl font-bold">Bienvenue chez Eygurande Auto Location</h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-3">
          Votre service de location de véhicules simple, rapide et au meilleur prix.
          Minibus, utilitaires, véhicules 9 places…  
          Aucun contrat compliqué : vous choisissez, vous réservez, vous partez.
        </p>
        <p className="text-[#C7A35A] font-semibold mt-4">
          Un service local — des véhicules entretenus — assistance immédiate
        </p>
      </section>

      {/* LISTE DES VÉHICULES */}
      <section id="vehicles" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-center">Nos véhicules</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {VEHICLES.map((v) => (
            <div key={v.id} className="rounded-lg bg-[#0d0d0d] border border-[#1f1f1f]">
              <img src={v.img} alt={v.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{v.name}</h3>
                <p className="text-[#C7A35A] mt-2 text-lg font-bold">{v.price}€/jour</p>
                <p className="text-gray-400 text-sm">{v.km}</p>
                <button className="mt-4 w-full bg-[#C7A35A] text-black py-2 rounded font-semibold">
                  Réserver
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-6 text-gray-400 border-t border-[#222]">
        © {new Date().getFullYear()} Eygurande Auto Location  
      </footer>
    </div>
  );
}
