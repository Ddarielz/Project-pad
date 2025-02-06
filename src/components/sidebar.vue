<template>
<div class ="sidebar">
<h2>BIENVENIDO</h2>
<h3>Nombre:{{ nombre }}</h3>
<h3>Email:{{ email }}</h3>
<ul>
<li><router-link to="/Contador">Contador</router-link></li>
<li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
<li><router-link to="/popos">Popos</router-link></li>
</ul>
</div>
</template>


<script setup>
import {useRegistrarStore} from '@/modules/registro/stores/registrarStore';
import {ref, watch} from 'vue';

const registrarStore = useRegistrarStore();

const nombre = ref(registrarStore.nombre);

const email = ref(registrarStore.email);

watch(() => registrarStore.nombre, (newNombre) => {
    nombre.value = newNombre;
})
watch(() => registrarStore.email, (newEmail) => {
    email.value = newEmail;
})
</script>

<style scoped>
.sidebar{
    width: 250px;
    padding: 60px;
    background-color: #f1f1f1;
}
</style>