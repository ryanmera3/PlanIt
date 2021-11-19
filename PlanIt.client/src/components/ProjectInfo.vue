<template>
  <div class="row">
    <div class="col-12">
      <div class="card p-2 mt-2">
        <div class="card-body p-4">
          <h2>
            <b>{{ Project.name }}</b>
          </h2>
          <div class="d-flex justify-content-between">
            <h5>
              {{ Project.description }}
            </h5>
            <button
              class="btn btn-outline-primary"
              data-bs-target="#sprintModal"
              data-bs-toggle="modal"
            >
              Create Sprint
            </button>
          </div>
          <div class="container p-3">
            <div class="row" v-for="s in Sprints" :key="s.id">
              <div class="col-12">
                <Sprints :sprint="s" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { sprintsService } from "../services/SprintsService"
import Pop from "../utils/Pop"
import { useRoute } from "vue-router"
import { Modal } from "bootstrap"
import { logger } from "../utils/Logger"
export default {
  setup() {

    const route = useRoute()
    onMounted(async () => {
      try {
        await sprintsService.getSprints(route.params.id)
        logger.log('Sprints', AppState.sprints)
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      async createSprint() {
        try {
          Modal.getOrCreateInstance(document.getElementById(""))
        } catch (error) {
          Pop.toast(error)
        }
      },
      Sprints: computed(() => AppState.sprints),
      Project: computed(() => AppState.activeProject)
    }
  },
}
</script>
<style scoped>
</style>