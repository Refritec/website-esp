import "./App.css";
import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";

import { GraficoTemp } from "./components/GraficoTemp";
import { GraficoHum } from "./components/GraficoHum";

import { db } from "./service/getData";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const q = query(collection(db, "dados"));
    const subscribe = onSnapshot(q, (querySnapshot) => {
      const dados = [];
      querySnapshot.forEach((doc) => {
        dados.push(doc.data());
      });
      if (dados.lenght > 0) setData(dados);
    });

    return () => subscribe();
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
