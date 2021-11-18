<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <CreateProjectModal />
    <ProjectSelector />
    <EditProjectModal />
  </main>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from './AppState'
import { projectsService } from "./services/ProjectsService"
import { logger } from "./utils/Logger"
export default {
  name: 'App',
  setup() {
    onMounted(async () => {
      try {
        await projectsService.getProjects()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
