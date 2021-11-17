<template>
  <div class="row">
    <div class="col-12">
      <div class="card p-3 elevation-2 m-1">
        <div class="card-text">
          <div class="row justify-content-between">
            <div class="col-8">
              <div class="row selectable d-flex align-items-center">
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
              <button class="btn btn-outline-primary" @click="addTask">
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
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import { sprintsService } from "../services/SprintsService"
import Pop from "../utils/Pop"
import { useRoute } from "vue-router"
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
      }
    }
  },
}
</script>
<style scoped>
</style>