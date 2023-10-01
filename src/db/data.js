export const dados = [
  {
    humidity_sht30: 50.2,
    temp_ds18b20_1: 25.5,
    temp_ds18b20_2: 26.3,
    temp_sht30: 24.8,
  },
  {
    humidity_sht30: 45.1,
    temp_ds18b20_1: 24.7,
    temp_ds18b20_2: 25.9,
    temp_sht30: 23.6,
  },
  {
    humidity_sht30: 55.8,
    temp_ds18b20_1: 26.8,
    temp_ds18b20_2: 27.2,
    temp_sht30: 25.4,
  },
  {
    humidity_sht30: 48.9,
    temp_ds18b20_1: 24.3,
    temp_ds18b20_2: 26.1,
    temp_sht30: 23.9,
  },
  {
    humidity_sht30: 52.3,
    temp_ds18b20_1: 25.1,
    temp_ds18b20_2: 26.7,
    temp_sht30: 24.2,
  },
  {
    humidity_sht30: 47.6,
    temp_ds18b20_1: 24.8,
    temp_ds18b20_2: 25.5,
    temp_sht30: 23.8,
  },
  {
    humidity_sht30: 53.7,
    temp_ds18b20_1: 26.2,
    temp_ds18b20_2: 27.0,
    temp_sht30: 25.1,
  },
  {
    humidity_sht30: 49.5,
    temp_ds18b20_1: 24.5,
    temp_ds18b20_2: 26.3,
    temp_sht30: 24.0,
  },
  {
    humidity_sht30: 51.0,
    temp_ds18b20_1: 25.7,
    temp_ds18b20_2: 26.9,
    temp_sht30: 24.6,
  },
  {
    humidity_sht30: 54.2,
    temp_ds18b20_1: 26.5,
    temp_ds18b20_2: 27.3,
    temp_sht30: 25.3,
  },
];

const intervaloMinutos = 10;
const dataInicial = new Date(); // Use a data inicial desejada aqui


export const getDados = () => {
  dados.forEach((item, index) => {
    const timestamp = new Date(
      dataInicial.getTime() + index * intervaloMinutos * 60 * 1000
    );
    item.timestamp = timestamp;
  });
  dados.forEach((item) => {
    const timestamp = new Date(item.timestamp);
    const horas = timestamp.getHours().toString().padStart(2, '0'); // Obtenha as horas e formate com 2 dígitos
    const minutos = timestamp.getMinutes().toString().padStart(2, '0'); // Obtenha os minutos e formate com 2 dígitos
    item.hora = `${horas}:${minutos}`;
  });
  return dados;
};
