<script lang="ts">
import AppHeader from "~/src/widgets/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
  setup() {
  }
}
</script>

<template>
  <div>
    <app-header />
    <main>
      <Nuxt />
    </main>
  </div>
</template>
