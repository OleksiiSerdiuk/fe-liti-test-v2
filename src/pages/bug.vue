<script lang="ts">
  import {
    defineComponent,
    onMounted,
    reactive,
    useRoute,
  } from '@nuxtjs/composition-api'
  import { useAppStore } from '@/src/entities/app.store'

  export default defineComponent({
    name: 'BugPage',
    layout: 'with-header',
    setup() {
      const route = useRoute()
      const appStore = useAppStore()
      const state = reactive({
        name: '',
      })

      function onShowName() {
        state.name = route.value.name || ''
      }

      onMounted(() => {
        appStore.loading = true
      })

      return {
        state,
        onShowName,
      }
    },
  })
  </script>

  <template>
    <div :class="$style.page">
      <div>
        Route name: "<strong>{{ state.name }}</strong>"
      </div>
      <button @click="onShowName()">Show Name</button>
    </div>
  </template>

  <style lang="scss" scoped module>
  @import '~/assets/scss/variables';

  .page {
    $self: &;

    // Desktop
    @media screen and (min-width: 1024) {
      width: 300px;
      margin: auto;
    }
  }
  </style>
