<template>
  <div class="project container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10 flex-column">
        <ProjectInfo />
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <SprintModal />
</template>


<script>
import { onMounted } from "@vue/runtime-core"
import { projectsService } from "../services/ProjectsService"
import { useRoute } from "vue-router"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
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