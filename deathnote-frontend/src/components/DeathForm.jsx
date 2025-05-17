import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DeathForm() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [cause, setCause] = useState("");
  const [details, setDetails] = useState("");
  const [startTime, setStartTime] = useState(null);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const baseUrl = "http://localhost:8000/people"


  const handleSubmit = async (e) => {
    e.preventDefault();

/*     if (!name || !photo) {
      setError("El nombre completo y la foto del rostro son obligatorios.");
      return;
    } */
const body = {
  name, photo
}
    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", photo);
let result = {}

    try {
     result =  await axios.post(baseUrl, body);
      setSuccess("Víctima registrada con éxito.");
      setError("");
      setName("");
      setPhoto(null);
      setCause("");
      setDetails("");
      setStartTime(null);
      

    } catch (err) {
      setError("Error al registrar la víctima.");
      console.error(err);
    }

 await axios.post("http://localhost:8000/kills/"+ result.data.person_id , {
});
 
  };
  

  useEffect(() => {
    if (name && !startTime) setStartTime(Date.now());
  }, [name]);

  const getTimeElapsed = () => {
    if (!startTime) return 0;
    return (Date.now() - startTime) / 1000;
  };

  const disableCause = getTimeElapsed() > 40;
  const disableDetails = getTimeElapsed() > 40 + 400;

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-900 shadow-lg shadow-black rounded-2xl p-6 space-y-4 border border-zinc-700"
    >
      <h2 className="text-2xl font-bold text-red-500">Registrar nueva víctima</h2>
      {error && <p className="text-red-400">{error}</p>}
      {success && <p className="text-green-400">{success}</p>}

      <div>
        <label className="block text-sm text-gray-400">Nombre completo</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400">Foto del rostro</label>
        <input
          type="text"
          onChange={(e) => setPhoto(e.target.value)}
          className="block text-sm text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400">Causa de muerte</label>
        <input
          type="text"
          value={cause}
          onChange={(e) => setCause(e.target.value)}
          disabled={disableCause}
          className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700 disabled:opacity-50"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400">Detalles específicos</label>
        <textarea
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          disabled={disableDetails}
          className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700 disabled:opacity-50"
        />
      </div>

      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-lg shadow"
      >
        Escribir en la Death Note
      </button>
    </form>
  );
}