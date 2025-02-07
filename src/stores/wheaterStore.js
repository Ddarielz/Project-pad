import {defineStore} from "pinia";
import {ref} from "vue";

export const useWheaterStore = defineStore("wheater", () => {  
    const temperatura = ref(0);
    const setTemperatura = (temperatura) => {this.temperatura = temperatura};
    return {temperatura, setTemperatura};
});