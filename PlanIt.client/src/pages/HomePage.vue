<template>
  <div class="container-fluid roboto">
    <div class="row">
      <div class="col-1 p-0 d-flex flex-column">
        <SideButtons />
      </div>
      <div class="col-10 text-center">
        <div class="card mt-5 elevation-3">
          <div class="card-body">
            <div class="row justify-content-between">
              <div class="col-md-4 text-start mx-4 text-primary lighten-25">
                <h1>Projects</h1>
                <p>a list of all the projects for</p>
              </div>
              <div class="col-md-4 text-end mx-4">
                <button
                  class="btn btn-outline-primary lighten-25"
                  @click="createModal()"
                >
                  Create Project
                </button>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-10 pt-3">
                <div class="row">
                  <div
                    class="
                      col-md-4
                      text-primary
                      lighten-25
                      border-bottom border-2
                    "
                  >
                    NAME
                  </div>
                  <div
                    class="
                      col-md-4
                      text-primary
                      lighten-25
                      border-bottom border-2
                    "
                  >
                    MEMBERS
                  </div>
                  <div
                    class="
                      col-md-4
                      text-primary
                      lighten-25
                      border-bottom border-2
                    "
                  >
                    STARTED
                    <div class="div"></div>
                  </div>
                </div>
                <div
                  class="row py-3 align-items-center"
                  v-for="p in projects"
                  :key="p.name"
                >
                  <div
                    class="col-md-4 text-primary lighten-25 selectable"
                    @click="Push(p.id)"
                  >
                    <p>{{ p.name }}</p>
                  </div>
                  <div class="col-md-4 text-primary lighten-25">
                    <img
                      class="rounded-circle img-fluid w-25"
                      :src="p.creator?.picture"
                      alt=""
                    />
                  </div>
                  <div
                    class="
                      col-md-4
                      text-primary
                      lighten-25
                      d-flex
                      justify-content-center
                      align-items-middle
                    "
                  >
                    <p class="align-self-end d-flex mx-3">
                      {{ new Date(p.createdAt).toLocaleString() }}
                    </p>
                    <button
                      class="btn btn-outline-danger mdi mdi-delete selectable"
                      aria-label="homepagedelete"
                      title="deleteproject"
                      @click="removeProject(p.id)"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap"
import { useRouter } from "vue-router"
import { AppState } from "../AppState"
import { computed } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import { logger } from "../utils/Logger"
import { projectsService } from "../services/ProjectsService"
import Pop from "../utils/Pop"
export default {
  setup() {
    const router = useRouter()
    return {
      name: "Home",
      Push(id) {
        router.push({
          name: "Project",
          params: { id: id }
        })
      },
      async editModal() {
        const modalElem = document.getElementById("editproj-modal")
        Modal.getOrCreateInstance(modalElem).toggle()
      },
      async createModal() {
        const modalElem = document.getElementById("createproj-modal")
        Modal.getOrCreateInstance(modalElem).toggle()
      },
      async selectorCanvas() {
        const canvasElem = document.getElementById('proj-offcanvas')
        Modal.getOrCreateInstance(canvasElem).toggle()
      },
      async taskCanvas() {
        const canvasElem = document.getElementById('task-details')
        Modal.getOrCreateInstance(canvasElem).toggle()
      },
      async removeProject(id) {
        try {
          if (window.confirm('Are you sure you want to delete this')) {

            await projectsService.removeProject(id)
          }
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message)
        }
      },
      projects: computed(() => AppState.projects),
      user: computed(() => AppState.user)

    }
  }
}
</script>


<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.h-10 {
  height: 10%;
}
.roboto {
  font-family: "Roboto", sans-serif;
}
</style>
