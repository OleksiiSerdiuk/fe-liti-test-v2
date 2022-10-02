<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api';
import LoginForm from "~/src/widgets/login/LoginForm.vue";

export default defineComponent({
  name: 'Login',
  components: {LoginForm},
})
</script>

<template>
  <div>
    <h1>Login</h1>
    <LoginForm />
  </div>
</template>
