<template>
<div class ="sidebar">
<h2>Barra lateral</h2>
<ul>
<li><router-link to="/Contador">Contador</router-link></li>
<li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
<li><router-link to="/popos">Popos</router-link></li>
</ul>
</div>
</template>


<script>
</script>

<style scoped>
.sidebar{
    width: 200px;
    padding: 20px;
    background-color: #f1f1f1;
}
</style>