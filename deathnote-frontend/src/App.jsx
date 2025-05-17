import React from "react";
import DeathForm from "./components/DeathForm";
import VictimList from "./components/VictimList";

export default function App() {
  
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/deathnote_bg1.jpg)' }}>
      <div className="bg-black bg-opacity-70 min-h-screen p-8 text-white font-deathnote">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-red-600">Death Note</h1>
          <p className="text-lg md:text-xl italic text-gray-300 mt-2">El poder de juzgar... en tus manos</p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DeathForm />
          <hr className="border-gray-800" />
          <VictimList />
        </main>
      </div>
    </div>
  );
}


