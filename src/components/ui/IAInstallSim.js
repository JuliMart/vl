import React, { useState } from "react";

const IAInstallSim = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [prompt, setPrompt] = useState("Una pantalla LED en una sala de reuniones moderna");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/HiDream-ai/HiDream-I1-Full",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );

      if (!response.ok) {
        throw new Error("La generación falló. El modelo puede estar dormido o sin recursos.");
      }

      const contentType = response.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        const json = await response.json();
        throw new Error(json.error || "Error al generar la imagen");
      }

      const blob = await response.blob();
      setResult(URL.createObjectURL(blob));
    } catch (err) {
      setError("No se pudo generar la imagen. Intenta más tarde.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white px-6 py-12 text-center">
      <h2 className="text-3xl font-bold text-cyan-700 mb-6">Simulá tu instalación con IA</h2>

      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Escribí qué querés simular..."
        className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded mb-4"
      />

      <div>
        <button
          onClick={handleSubmit}
          className="bg-cyan-600 text-white py-2 px-6 rounded hover:bg-cyan-700 transition"
          disabled={loading}
        >
          {loading ? "Generando..." : "Generar Simulación"}
        </button>
      </div>

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {result && (
        <div className="mt-6">
          <img
            src={result}
            alt="Resultado IA"
            className="max-w-full mx-auto rounded shadow-md"
          />
        </div>
      )}
    </section>
  );
};

export default IAInstallSim;
