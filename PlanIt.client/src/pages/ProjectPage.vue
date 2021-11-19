<template>
  <div class="project container-fluid">
    <div class="row">
      <div class="col-1 p-0 d-flex flex-column">
        <SideButtons />
      </div>
      <div class="col-10 flex-column">
        <ProjectInfo />
      </div>
      <div class="col-1"></div>
    </div>
  </div>
  <SprintModal />
</template>


<script>
import { computed, onMounted } from "@vue/runtime-core"
import { projectsService } from "../services/ProjectsService"
import { useRoute, useRouter } from "vue-router"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { tasksService } from "../services/TasksService"
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      projectsService.setActive(route.params.id)
      tasksService.getTasks(route.params.id)
    })
    return {
      tasks: computed(() => AppState.tasks),
      projects: computed(() => AppState.projects),
      sprints: computed(() => AppState.sprints),
      notes: computed(() => AppState.notes),
      activeProject: computed(() => AppState.activeProject)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>