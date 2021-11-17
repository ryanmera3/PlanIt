<template>
  <div class="project container">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <Thread />
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>


<script>
import { onMounted } from "@vue/runtime-core"
import { projectsService } from "../services/ProjectsService"
import { useRoute } from "vue-router"
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      projectsService.setActive(route.params.id)
    })
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>