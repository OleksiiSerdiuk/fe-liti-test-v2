<script lang="ts">
import {
  defineComponent, useContext,
} from '@nuxtjs/composition-api'
import { useUserStore } from "~/src/entities/app.userStore";

export default defineComponent({
  name: 'Secret',
  layout: 'with-header',
  setup() {
    const { redirect } = useContext();
    const userStore = useUserStore()
    const getUserEmail = userStore.userData.email;

    if (!userStore.userResponse.success) {
      redirect('/');
    }

    return {
      getUserEmail
    }
  }
})
</script>

<template>
  <div>
    <p>Secret</p>
    <h1>Email: {{ getUserEmail }}</h1>
  </div>
</template>
