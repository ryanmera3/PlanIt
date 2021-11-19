<template>
  <button
    class="btn-primary w-50 mt-4 h-10 border-0"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#proj-offcanvas"
    aria-controls="offcanvasExample"
    aria-label="sidebutton1"
    title="projects"
    @click="ProjectSelector"
  >
    P
  </button>
  <button
    class="btn-secondary w-50 mt-2 h-10 border-0"
    type="button"
    data-bs-toggle="editproj-modal"
    data-bs-target="#editproj-modal"
    aria-controls="offcanvasExample"
    aria-label="sidebutton2"
    title="edit-project"
    @click="editModal"
  >
    <i class="mdi mdi-cog text-primary"></i>
  </button>
</template>


<script>
import { Modal } from "bootstrap"
export default {
  setup() {
    return {
      async editModal() {
        const modalElem = document.getElementById("editproj-modal")
        Modal.getOrCreateInstance(modalElem).toggle()
      },
    }
  }
}
</script>


<style lang="scss" scoped>
.h-10 {
  height: 10%;
}
</style>