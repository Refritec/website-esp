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

export function GraficoTemp({ dados }) {
  const formatName = (name) => {
    return name.substr(5).toUpperCase();
  };

  const formatValue = (value) => {
    return `${value} C°`;
  };

  return (
    <div className="containerGrafico">
      <LineChart width={600} height={300} data={dados}>
        <Line type="monotone" dataKey="temp_sht30" stroke="#342f83" />
        <Line type="monotone" dataKey="temp_ds18b20_1" stroke="#91363a" />
        <Line type="monotone" dataKey="temp_ds18b20_2" stroke="#60862e" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="hora">
          <Label value="Hora" offset={-5} position="insideBottomLeft" />
        </XAxis>
        <YAxis>
          <Label value="C°" offset={0} position="insideBottom" />
        </YAxis>
        <Tooltip
          formatter={(valor, name) => [formatValue(valor), formatName(name)]}
        />
      </LineChart>
      <div className="cards">
        <div className="card">
          <h4>SHT30</h4>
          <p className="sht">{dados && dados[dados.length - 1].temp_sht30} C°</p>
        </div>
        <div className="card">
          <h4>DS18B20 1</h4>
          <p className="ds1">{dados && dados[dados.length - 1].temp_ds18b20_1} C°</p>
        </div>
        <div className="card">
          <h4>DS18B20 2</h4>
          <p className="ds2">{dados && dados[dados.length - 1].temp_ds18b20_2} C°</p>
        </div>
      </div>
    </div>
  );
}
