<template>
  <div class="row">
    <div class="col-12">
      <div class="card p-3 elevation-2 m-1">
        <div class="card-text">
          <div class="row justify-content-between">
            <div class="col-8">
              <div
                class="
                  row
                  selectable
                  d-flex
                  align-items-center
                  accordian-button
                  colapsed
                "
                id="accordianFlushParent"
                data-bs-toggle="collapse"
                :data-bs-target="'#flush' + sprint.id"
              >
                <div class="col-1"></div>
                <div class="col-7">
                  <h3>
                    {{ sprint.name }}
                  </h3>
                </div>
                <div class="col-4">
                  <h4>Weight: 10</h4>
                </div>
              </div>
            </div>
            <div class="col-2 d-flex justify-content-end">
              <button
                class="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#createtask-modal"
              >
                Add Task
              </button>
            </div>
            <div class="col-1 d-flex justify-content-end">
              <button class="btn btn-outline-danger" @click="deleteSprint">
                <i class="mdi mdi-delete"></i>
              </button>
            </div>
          </div>
        </div>
        <Drawer :sprint="sprint" />
      </div>
      <CreateTaskModal :sprintId="sprint.id" />
    </div>
  </div>
</template>
<script>
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import { sprintsService } from "../services/SprintsService"
import Pop from "../utils/Pop"
import { useRoute } from "vue-router"
import { tasksService } from "../services/TasksService"
import { Modal } from "bootstrap"
export default {
  props: { sprint: { type: Object, required: true } },
  setup(props) {
    const route = useRoute()
    onMounted(() => {
      logger.log('prop', props.sprint)
    })
    return {
      deleteSprint() {
        sprintsService.deleteSprint(route.params.id, props.sprint.id)
        Pop.toast('Delted')
      },
    }
  },
}
</script>
<style scoped>
</style>