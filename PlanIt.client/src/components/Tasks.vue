<template>
  <div class="card p-3 mt-2">
    <div class="card-body">
      <div class="row">
        <div class="col-1">
          <div class="form-check form-switch">
            <input
              type="checkbox"
              class="form-check-input border-primary"
              :checked="task.isComplete"
              @click="checkTask"
            />
          </div>
        </div>
        <div class="col-8">
          <h4 v-if="!task.isComplete">
            {{ task.name }}
          </h4>
          <h4 style="text-decoration: line-through" v-else>
            {{ task.name }}
          </h4>
        </div>
        <div class="col-1"></div>
        <div class="col-1 d-flex">
          <button
            class="btn-primary border-0"
            type="button"
            data-bs-toggle="offcanvas"
            :data-bs-target="'#task-details-' + `${task.id}`"
            aria-controls="offcanvasExample"
            @click="TaskCanvas"
          >
            Edit Task
          </button>
        </div>
        <div class="col-1">
          <button class="btn btn-outline-danger" @click="deleteTask">
            <i class="mdi mdi-delete" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <TaskDetails :task="task" />
</template>
<script>
import { onMounted } from "@vue/runtime-core"
import { useRoute } from "vue-router"
import { tasksService } from "../services/TasksService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { notesService } from "../services/NotesService"
export default {
  props: { task: { type: Object, required: true } },
  setup(props) {
    onMounted(async () => {
      await notesService.getNotes(route.params.id)
    })
    const route = useRoute()
    return {
      async deleteTask() {
        if (window.confirm('are you sure')) {
          await tasksService.deleteTask(props.task.id, route.params.id)
        } else {
          return
        }
      },
      async checkTask() {
        await tasksService.checkTask(props.task, route.params.id)
      }

    }

  },
}
</script>