<script setup lang="ts">

import { performLoginRequest } from '@/api/login';
import { Password } from 'primevue';
import { reactive } from 'vue';

const initialValues = reactive({
    username: 'КП-181',
    password: 'Secret Password'
});

const resolver = ({ values }) => {
    const errors = {};

    if (!values.username) {
        errors.username = [{ message: 'Username is required.' }];
    }
    if (!values.password) {
        errors.password = [{ message: 'Password is required.' }];
    }

    return {
        errors
    };
};

const chooseGroup = (e) => {
    if (e.valid) {
        let values = e.states;
        let result = performLoginRequest(
            values.username,
            values.password
        )
        console.log(result);
    }
};

</script>

<template>
    <Form v-slot="$form" :initialValues :resolver @submit="chooseGroup" class="flex flex-col gap-4 w-full sm:w-56">
        <div class="flex flex-col gap-1">
            <InputText name="username" type="text" :placeholder="initialValues.username" fluid />
            <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{
                $form.username.error?.message }}</Message>
        </div>
        <div>
            <Password name="password" :placeholder="initialValues.password" :feedback="false" toggleMask fluid />
            <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">{{
                $form.password.error?.message }}</Message>
        </div>
        <Button type="submit" severity="secondary" label="Submit" />
    </Form>
</template>