<template>
    <div>
        <h2>Formulario de registro</h2>
        <Form :validation-schema=" schema" @submit="onSubmit">
            <div class="form">
                <label for="nombre" >Nombre:</label>
                <Field type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                <ErrorMessage name="nombre" class="error"></ErrorMessage>
            </div>
            <div class="form">
                <label for="email">Email:</label>
                <Field type="email" name="email" id="email" placeholder="Ingrese su Email"/>
                <ErrorMessage name="email" class="error"></ErrorMessage>
            </div>
    <div class="form">
        <button type="submit">Registrar</button>
    </div>
    </Form>
    </div>
</template>
<script setup>

import {Form, Field, ErrorMessage} from 'vee-validate';
import { schema } from '../schemas/validationschema';


const onSubmit = () => {
    console.log('formulario enviado');
}

</script>

<style scoped>
.Form{
    margin-bottom: 10px;
}
</style>