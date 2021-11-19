<template>
  <div class="project-selector">
    <div
      class="offcanvas offcanvas-start w-25"
      tabindex="-1"
      id="proj-offcanvas"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div class="offcanvas-header">
        <h5
          class="offcanvas-title lighten-25 text-primary"
          id="project-offcanvas"
        >
          Projects
        </h5>
        <button
          type="button"
          class="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <h6 class="px-3">for {{ account.email }}</h6>
      <div class="offcanvas-body container-fluid">
        <div class="row mx-4 border-bottom border-2 mb-2">
          <div class="col-md-6 text-primary lighten-25">Name</div>
          <div class="col-md-6 text-end text-primary lighten-25">Started</div>
        </div>
        <div
          class="row my-1 selectable"
          v-for="p in projects"
          :key="p.id"
          @click="Push(p.id)"
        >
          <div class="col-md-6 ps-5">{{ p.name }}</div>
          <div class="col-md-6 text-end pe-5">
            {{ new Date(p.createdAt).toLocaleString().split(",")[0] }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <div
            class="button btn btn-outline-primary w-40 button-40"
            @click="createModal"
          >
            Create Project
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { Modal, Offcanvas } from "bootstrap"
import { router } from "../router"
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    return {
      Push(id) {
        const canvasElem = document.getElementById("proj-offcanvas")
        Offcanvas.getOrCreateInstance(canvasElem).hide()
        router.push({
          name: "Project",
          params: { id: id }
        })
      },
      async createModal() {
        const modalElem = document.getElementById("createproj-modal")
        Modal.getOrCreateInstance(modalElem).toggle()
      },
      account: computed(() => AppState.account),
      projects: computed(() => AppState.projects)
    }
  }
}
</script>


<style lang="scss" scoped>
.w-40 {
  width: 40% !important;
}

.button-40 {
  top: 80%;
  left: 30%;
  position: absolute;
}
</style>