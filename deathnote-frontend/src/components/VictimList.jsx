import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VictimList = () => {
  const [victims, setVictims] = useState([]);

  useEffect(() => {
    const fetchVictims = async () => {
      const res = await axios.get('http://localhost:8000/kills');
      setVictims(res.data);
    };
    fetchVictims();
  }, []);

  return (
    <div className="p-6 bg-gray-900 text-white max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Víctimas Registradas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {victims.map((v) => (
          <div key={v.id} className="bg-gray-800 p-4 rounded shadow-md">
            <img src={v.foto_url} alt={v.nombre} className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="text-lg font-semibold">{v.nombre}</h3>
            <p><strong>Causa:</strong> {v.causa || 'Ataque al corazón'}</p>
            <p><strong>Detalles:</strong> {v.detalles || 'No especificado'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VictimList;

