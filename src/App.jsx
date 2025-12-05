import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070607] text-white font-sans">

      {/* TITRE PRINCIPAL */}
      <section className="text-center py-14 px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Louez votre voiture en quelques clics
        </h1>
      </section>

      {/* FORMULAIRE (Lieu de retrait supprimé) */}
      <section className="max-w-4xl mx-auto bg-[#0f0f0f] border border-[#2b2b2b] rounded-lg p-6 mt-4">
        <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">

          {/* DATE DEBUT */}
          <div>
            <label className="text-xs text-gray-400">Date début</label>
            <input
              type="date"
              className="mt-1 w-full rounded bg-[#0b0b0b] border border-[#2b2b2b] px-3 py-2 text-sm"
            />
          </div>

          {/* DATE FIN */}
          <div>
            <label className="text-xs text-gray-400">Date fin</label>
            <input
              type="date"
              className="mt-1 w-full rounded bg-[#0b0b0b] border border-[#2b2b2b] px-3 py-2 text-sm"
            />
          </div>

          {/* BOUTON */}
          <div className="flex justify-end md:justify-start">
            <button
              type="button"
              className="bg-[#C7A35A] text-black font-semibold px-5 py-2 rounded w-full md:w-auto"
            >
              Rechercher
            </button>
          </div>
        </form>
      </section>

      {/* SECTION VEHICULES POPULAIRES (inchangée pour l’instant) */}
      <section id="vehicles" className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-semibold text-center">Nos véhicules populaires</h2>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-400 border-t border-[#222]">
        © {new Date().getFullYear()} Eygurande Auto Location
      </footer>

    </div>
  );
}
