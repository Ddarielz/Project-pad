<template>
    <H3>Propiedades Computadas</H3>
    <input type="text" v-model="valor">
    {{ valorCalculado }}
    <ResultadoSection v-if="MostrarElemento" :resultado="valorCalculado"></ResultadoSection>
    <div v-else-if="isNaN(valor)">Debe ser un número para calcuar</div>
    <div v-else>Aqui no se muestra nada</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ResultadoSection from '../components/ResultadoSection.vue';
const valor = ref('');
const valorCalculado = computed(() => {
    return valor.value*3
});
const MostrarElemento = computed(() => {
    return valor.value > 10;
});
</script>

<style scoped></style>