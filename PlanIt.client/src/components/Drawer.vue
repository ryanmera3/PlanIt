<template>
  <div
    :id="'flush' + sprint.id"
    class="accordion-collapse collapse"
    data-bs-parent="#accordianFlushParent"
  >
    <div class="accordian-body">
      <div class="row" v-for="t in Tasks" :key="t.id">
        <div class="col-12">
          <Tasks :task="t" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, onMounted } from "@vue/runtime-core"
import { tasksService } from "../services/TasksService"
import { AppState } from "../AppState"
import { useRoute } from "vue-router"
export default {
  props: { sprint: { type: Object, required: true } },
  setup(props) {
    const route = useRoute()
    onMounted(async () => {
      tasksService.getTasks(route.params.id)
    })
    return {
      route,
      Tasks: computed(() => AppState.tasks.filter(t => t.sprintId == props.sprint.id)),

    }
  },
}
</script>