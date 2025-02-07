<template>
    <div class="header">
        {{ mensajeRecibido }}<wheater></wheater>
    </div>
</template>
<script setup>
import wheater from './Wheater.vue';
import { defineProps, ref, watch } from 'vue';

const props = defineProps([
    'mensaje'
])
const mensajeRecibido = ref(props.mensaje);
watch(() => props.mensaje, (newValue) => {
    mensajeRecibido.value = props.mensaje
})
</script>

<style scoped>
.header{
    display: flex;
    justify-content: center;
    align-items: center;
    padding : 10px 20px;

    top: 0 ;
    left: 0;
    right : 0;
    background-color: #333;
    color: white
}
h3{
    margin: 0;
}
</style>