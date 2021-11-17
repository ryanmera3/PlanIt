<template>

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#createtask-modal">
  Launch Edit Modal
</button>

  <div class="modal fade" id="createtask-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Create Task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body container-fluid">
        <div class="row">
          <div class="col-md-6">
            <h6>Task Name</h6>
            <input
                    
                    v-model="state.editable.name"
                    type="text"
                    class="form-text rounded tingy w-100 border-1 border-light "
                    placeholder="Task Name..."
                    required="true"
                  />
          </div>
          <div class="col-md-6">
            <h6>Task Weight</h6>
            <input
                    
                    v-model="state.editable.weight"
                    type="text"
                    class="form-text rounded tingy w-100 border-1 border-light "
                    placeholder="Task Weight..."
                    required="true"
                  />
          </div>
        </div>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { computed, reactive } from "@vue/reactivity"
import { AppState } from "../AppState"
import { useRouter } from "vue-router"
import {tasksService} from "../services/TasksService"
import { Modal } from "bootstrap"
export default {
  setup(){
    onMounted(() => {
      logger.log(state)
    })
    const state = reactive({ editable: {} })
    const router = useRouter()
    return {
      state,
      tasks: computed(()=> AppState.tasks),
      activeProject: computed(()=> AppState.activeProject),

      async createTask(){
        const res = await tasksService.createTask(state.editable)
        const modalElem = document.getElementById('createtask-modal')
        Modal.getOrCreateInstance(modalElem).toggle()
        state.editable = {}
      }

    }
  }}
</script>


<style lang="scss" scoped>

</style>