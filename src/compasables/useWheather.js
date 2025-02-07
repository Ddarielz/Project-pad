import {useWheaterStore} from "../stores/wheaterStore.js";
import {getTemperatura} from "../helpers/getWheater.js";

export const useWheather = async () => {
    const temperatura = await getTemperatura();
    const wheaterStore = useWheaterStore();
    wheaterStore.temperatura = temperatura;
}