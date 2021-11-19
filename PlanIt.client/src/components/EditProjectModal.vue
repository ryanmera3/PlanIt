<template>
  <form @submit.prevent="editProject">
    <div class="editproj">
      <div class="modal" tabindex="-1" id="editproj-modal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-primary lighten-25">Edit Project</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="my-2">
                <h5>Name</h5>
                <input
                  v-model="state.editable.name"
                  type="text"
                  class="form-text rounded tingy w-100 border-1 border-light"
                  placeholder="Project Name.."
                  required="true"
                  aria-label="name"
                />
              </div>
              <h5>Description</h5>
              <input
                v-model="state.editable.description"
                type="text"
                class="form-text rounded tingy w-100 border-1 border-light"
                placeholder="Project Description.."
                required="true"
                aria-label="description"
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-outline-secondary"
                data-bs-dismiss="modal"
                aria-label="close"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-outline-primary"
                aria-label="save"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>


<script>
import { Modal, Offcanvas } from "bootstrap"
import { useRouter } from "vue-router"
import { projectsService } from "../services/ProjectsService"
import { computed, reactive } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
export default {
  setup() {
    onMounted(() => {
      logger.log(state)
    })
    const state = reactive({ editable: {} })
    const router = useRouter()
    return {

      state,

      async editProject() {
        const res = await projectsService.editProject(state.editable)
        const modalElem = document.getElementById('editproject-modal')
        Modal.getOrCreateInstance(modalElem).toggle()
        state.editable = {}
        router.push({
          name: "Project",
          params: { id: res.id }
        })
      },
      projects: computed(() => AppState.projects),
      activeProject: computed(() => AppState.activeProject)

    }
  }
}
</script>


<style lang="scss" scoped>
</style>