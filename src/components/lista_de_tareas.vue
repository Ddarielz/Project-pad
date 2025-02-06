<template>
<div>
    <h2>Lista de tareas
        <input type="text" v-model="nuevaTarea" @keyup.enter="addtarea">
        <ul>
            <li v-for="(tarea, index) in tareas" :key="index">
                {{ tarea }}
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
</script>
<style> 
</style>