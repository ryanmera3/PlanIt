<template>
  <div class="row">
    <div class="col-1"></div>
    <div class="col-10">
      <div class="card m-3 elevation-2 p-3">
        <div class="card-title p-2">
          <div class="d-flex align-items-center pb-2">
            <img class="profilepic" :src="User.picture" alt="Profile Picture" />
            <h2 class="ps-2">- {{ User.nickname }}</h2>
            <i
              class="ps-2 mdi mdi-account-check mdi-24px"
              v-if="User.email_verified"
            ></i>
          </div>
          <h6>
            {{ User.name }}
          </h6>
        </div>
        <div class="card-body">
          <h6>
            <b>Email:</b>
            {{ User.email }}
          </h6>
          <div class="d-flex justify-content-end">
            <button class="btn btn-outline-danger" @click="OpenModal()">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import { Modal } from "bootstrap"
export default {
  setup() {
    onMounted(() => {
      logger.log(AppState.user)
    })

    return {
      async OpenModal() {
        const modal = Modal.getOrCreateInstance(document.getElementById('Profile-Modal'))
        modal.show()
      },
      User: computed(() => AppState.user)
    }
  },
}
</script>

<style scoped>
.profilepic {
  height: 75px;
  width: 75px;
}
.checkedoff {
  height: 20px;
  width: 20px;
}
</style>