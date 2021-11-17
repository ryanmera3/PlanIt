<template>
  <div class="modal cut" id="sprintModal">
    <form @submit.prevent="createSprint()">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create Sprint</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10 d-flex">
                <h6><b>Sprint Name</b></h6>
                <input
                  type="text"
                  class="w-100"
                  v-model="state.editable.name"
                  placeholder="Sprint Name ..."
                />
              </div>
              <div class="col-1"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">Create Sprint</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity"
import { sprintsService } from "../services/SprintsService"
import Pop from "../utils/Pop";
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import { Modal } from "bootstrap";
export default {
  setup() {
    const route = useRoute()
    const state = reactive({ editable: {} });
    return {
      state,
      async createSprint() {
        try {
          await sprintsService.createSprint(route.params.id, state.editable)
          state.editable = {}
          Modal.getOrCreateInstance(document.getElementById("sprintModal")).toggle()
        } catch (error) {
          Pop.toast(error)
        }
      }
    }
  },
}
</script>
<style scoped>
</style>