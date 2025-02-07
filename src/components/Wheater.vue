<template>
    <h3>la temperatura es:{{ wheaterStore.temperatura }}°C</h3>
</template>

<script setup>
import { useWheather } from '@/compasables/useWheather';
import { onMounted } from 'vue';
import { useWheaterStore } from '../stores/wheaterStore';

const wheaterStore = useWheaterStore();

onMounted(() => {
    useWheather();
});
</script>

<style scoped>

</style>