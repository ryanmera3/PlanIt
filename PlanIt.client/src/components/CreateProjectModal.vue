<template>
  <div class="createproject">
    <div class="modal" tabindex="-1" id="createproj-modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-primary lighten-25">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body text-primary lighten-25">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer" >
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-outline-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>


<script>
import { Modal } from "bootstrap"
import { useRouter } from "vue-router"
export default {
  setup(){
    const router = useRouter()
    return {
      async createModal(){

        const modalElem = document.getElementById("createproj-modal")
        Modal.getOrCreateInstance(modalElem).toggle()
      }
      
    }
  }}
</script>


<style lang="scss" scoped>

</style>