<template>
    <h1>Hello World</h1>
    {{ Contador }}
    <button @click="incrementar">Incrementar</button>
    <button @click="Contador--">Decrementar</button>
</template>


<script setup>
import { ref } from 'vue';
const Contador = ref(0);
const incrementar = () => {
    Contador.value++;
}
const decrementar = () => {
    Contador.value--;
}

</script>
<style scoped>
p{
    color: red;
}
</style>