<template>
  <div class="row">
    <div class="col-12">
      <div class="card p-2 mt-2">
        <div class="card-body p-4">
          <div class="">
            <h2>
              <b>{{ Project.name }}</b>
            </h2>
            <h5>
              {{ Project.description }}
            </h5>
          </div>
          <div class="container p-3">
            <Sprints :v-for="s in Sprints" key="s.id" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { sprintsService } from "../services/SprintsService"
import Pop from "../utils/Pop"
export default {
  setup() {
    onMounted(async () => {
      try {
        await sprintsService.getSprints()
      } catch (error) {
        Pop.toast(error)
      }
    })
    return {
      Sprints: computed(() => AppState.sprints),
      Project: computed(() => AppState.activeProject)
    }
  },
}
</script>
<style scoped>
</style>