/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";
import "./styleGrafico.css";

export function GraficoHum({ dados }) {
  const formatValue = (value) => {
    return `${value}%`;
  };

  return (
    <div className="containerGrafico">
      <LineChart width={600} height={200} data={dados}>
        <Line type="monotone" dataKey="humidity_sht30" stroke="#f2a900" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="hora">
          <Label value="Hora" offset={-5} position="insideBottomLeft" />
        </XAxis>
        <YAxis>
          <Label value="%" offset={0} position="insideBottom" />
        </YAxis>
        <Tooltip
          formatter={(valor, name) => [formatValue(valor), "Humidade"]}
        />
      </LineChart>
      <div className="cards">
        <div className="card">
          <h4>Humidade</h4>
          <p className="hum">{dados && dados[dados.length - 1].humidity_sht30} %</p>
        </div>
      </div>
    </div>
  );
}
