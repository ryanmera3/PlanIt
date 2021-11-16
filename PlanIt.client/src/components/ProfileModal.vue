<template>
  <div class="modal" tabindex="-1">
    <form @submit.prevent="EditProfile">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit your account info</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-1"></div>
              <div class="col-10">
                <div class="p-1">
                  <h6 class="">Name:</h6>
                  <input
                    v-model="state.editable.name"
                    type="text"
                    class="form-text rounded tingy"
                    placeholder="What would you like your name to be on here ..."
                    required="true"
                  />
                </div>
                <div class="p-1">
                  <h6 class="">Profile Picture:</h6>
                  <input
                    v-model="state.editable.picture"
                    type="text"
                    class="form-text rounded tingy"
                    placeholder="Profile Picture .."
                    required="true"
                  />
                </div>
              </div>
              <div class="col-1"></div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { computed, reactive } from "@vue/reactivity"
import { AuthService } from "../services/AuthService"
import { profileService } from "../services/ProfileService"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"

export default {
  setup() {
    onMounted(() => {
      logger.log(state)
    })
    const state = reactive({ editable: {} })
    return {
      state,
      async EditProfile() {
        logger.log(state.editable)
        const res = await profileService.editProfile(state.editable)
      },
      User: computed(() => AppState.user)
    }
  },
}
</script>
<style scoped>
.tingy {
  width: 100%;
}
</style>