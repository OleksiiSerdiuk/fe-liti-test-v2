<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'
import {ROUTE_NAV} from "~/src/shared/config";

export default defineComponent({
  name: 'IndexPage',
  setup() {
    return {
      ROUTE_NAV
    }
  }
})
</script>

<template>
  <nav :class="$style.nav">
    <ul>
      <li v-for="(link, idx) in ROUTE_NAV.slice(1)" :key="idx">
        <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped module>
@import '~/assets/scss/variables';

.nav {
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    padding-left: 0;
    text-transform: capitalize;

    li > a {
      text-decoration: none;
      transition: all 0.3s;

      &:hover,
      &:focus {
        opacity: 0.7;
      }
    }

    li + li {
      margin-left: 15px;
    }
  }
}
</style>
