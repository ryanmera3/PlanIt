<template>
  <div class="card mt-1">
    <div class="card-body">
      <div class="row">
        <div class="col-6">
          <img class="imgting" :src="note.creator.picture" alt="" />
          <h6>{{ note.creator.name }}</h6>
        </div>
        <div class="col-5">
          <h5>
            {{ note.body }}
          </h5>
        </div>
        <div class="col-1">
          <button
            class="btn btn-outline-danger"
            @click="deleteTask"
            title="deleteNote"
          >
            <i class="mdi mdi-delete" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { notesService } from "../services/NotesService"
import { useRoute } from "vue-router"
export default {
  props: { note: { type: Object, required: true } },
  setup(props) {
    const route = useRoute()
    onMounted(async () => {
      logger.log('notes', AppState.notes)
    })
    return {
      async deleteTask() {
        notesService.deleteNotes(route.params.id, props.note.id)
      }
    }
  },
}
</script>
<style scoped>
.imgting {
  height: 50px;
  width: 50px;
}
</style>