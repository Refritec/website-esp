import { useEffect, useState } from "react";
import "./App.css";

import { GraficoTemp } from "./components/GraficoTemp";
import { GraficoHum } from "./components/GraficoHum";

import axios from "axios";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api-projeto-esp.vercel.app/dados"
        );
        console.log(response.data.dados);
        setData(response.data.dados);
      } catch (error) {
        console.log("Erro ao buscar os dados:", error);
      }
    };

    fetchData(); // Faz a primeira chamada imediatamente

    const interval = setInterval(fetchData, 60000); // Faz a chamada a cada 1 minuto (60000 ms)

    return () => {
      clearInterval(interval); // Limpa o intervalo quando o componente for desmontado
    };
  }, []);

  return (
    <>
      <div className="graficos">
        <GraficoTemp dados={data} />
        <GraficoHum dados={data} />
      </div>
    </>
  );
}

export default App;
