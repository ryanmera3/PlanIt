<template>
  <div class="container-fluid">
    <ProfileHeader />
  </div>
  <ProfileModal id="Profile-Modal" />
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {

    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
