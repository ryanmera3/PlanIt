<template>
<form @submit.prevent="createProject">

  <div class="createproject">
    <div class="modal" tabindex="-1" id="createproj-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-primary lighten-25">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-primary lighten-25">
        <input
                    v-model="state.editable.name"
                    type="text"
                    class="form-text rounded tingy"
                    placeholder="Project Name .."
                    required="true"
                  />

        <input
                    v-model="state.editable.description"
                    type="text"
                    class="form-text rounded tingy"
                    placeholder="Project Description .."
                    required="true"
                  />
      </div>

      <div class="modal-footer" >
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-outline-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</form>
</template>


<script>
import { Modal } from "bootstrap"
import { useRouter } from "vue-router"
import { projectsService } from "../services/ProjectsService"
import { computed, reactive } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
export default {
  setup(){
    onMounted(() => {
      logger.log(state)
    })
    const state = reactive({ editable: {} })
    const router = useRouter()
    return {
      state,
      
      async createProject(id) {
        logger.log(state.editable)
        await projectsService.createProject(state.editable)
        state.editable = {}
        router.push({path: '/project/' + id})
      },
      projects: computed(()=> AppState.projects)
      
    }
  }}
</script>


<style lang="scss" scoped>

</style>