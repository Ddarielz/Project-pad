<template>
<div class ="sidebar">
<h2>BIENVENIDO</h2>
<h3>Nombre:{{registrarStore.nombre }}</h3>
<h3>Email:{{ registrarStore.email }}</h3>
<ul>
<li><router-link to="/Contador">Contador</router-link></li>
<li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
<li><router-link to="/popos">Popos</router-link></li>
<li><router-link to="/calcular">Calcular</router-link></li>
</ul>
</div>
</template>


<script setup>
import {useRegistrarStore} from '@/modules/registro/stores/registrarStore';
import {ref, watch} from 'vue';

const registrarStore = useRegistrarStore();

</script>

<style scoped>
.sidebar{
    width: 250px;
    padding: 60px;
    background-color: #f1f1f1;
}
</style>