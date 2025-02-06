<template>
<div>
    <h2>Lista de tareas
        <input type="text" v-model="nuevaTarea" @keyup.enter="addtarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
                <button @click="borartarea(index)">Borrar</button>
            </li>
        </ul>
    </h2>
</div>
</template>
<script setup>
import { ref } from 'vue';
const tareas = ref([]);
const nuevaTarea = ref('');
const addtarea = () => {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
}
const borartarea = (index) => {
    tareas.value.splice(index, 1);
}
</script>
<style> 
</style>