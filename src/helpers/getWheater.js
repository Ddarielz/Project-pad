import axios from "axios";
const API_URL ='https://api.open-meteo.com/v1/forecast?latitude=29.1026&longitude=-110.9773&current=temperature_2m&timezone=auto&forecast_days=1';

export const getTemperatura = async () => {
    const Respuesta = await axios.get(API_URL);
    const nuevaTemperatura = Respuesta.data.current.temperature_2m;
    return nuevaTemperatura
}