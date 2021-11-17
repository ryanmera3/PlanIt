<template>
  <div class="row">
    <div class="col-12">
      <h1>{{ Project.name }}</h1>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  setup() {
    return {
      Project: computed(() => AppState.activeProject)
    }
  },
}
</script>
<style scoped>
</style>