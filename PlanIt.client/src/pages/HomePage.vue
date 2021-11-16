<template>
  <div class="container-fluid roboto">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10 text-center">
        <div class="card mt-5 elevation-3">
          <div class="card-body">
            <div class="row justify-content-between">
              <div class="col-md-4 text-start mx-4 text-primary lighten-25">
                  <h3>Projects</h3>
                  <p>a list of all the projects for</p>
              </div>
              <div class="col-md-4 text-end mx-4">
                <button class="btn btn-outline-primary lighten-25" @click="createModal">Create Project</button>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-10 pt-3">
                <div class="row ">
                  <div class="col-md-4 text-primary lighten-25 border-bottom border-2">NAME
                    </div>
                  <div class="col-md-4 text-primary lighten-25 border-bottom border-2">MEMBERS
                  </div>
                  <div class="col-md-4 text-primary lighten-25 border-bottom border-2">STARTED
                    <div class="div">
                    </div>
                  </div>
                </div>
                <div class="row py-3" v-for="p in projects" :key="p.name">
                  <div class="col-md-4 text-primary lighten-25" >
                    <p>{{p.name}}</p>
                    </div>
                  <div class="col-md-4 text-primary lighten-25">
                    <img class="rounded-circle img-fluid w-25" :src="p.creator?.picture" alt="">
                  </div>
                  <div class="col-md-4 text-primary lighten-25 ">
                    <h6>{{new Date(p.createdAt).toLocaleString()}}</h6>
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
  setup(){
    const router = useRouter()
    onMounted(async ()=> {
      try {
        await projectsService.getProjects()
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message)
      }
    })
    return {
      name: "Home",
      async createModal(){
        const modalElem = document.getElementById("createproj-modal")
        Modal.getOrCreateInstance(modalElem).toggle()
      },
      projects: computed(()=> AppState.projects),
      user: computed(()=> AppState.user)
      
    }
  }}
</script>


<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
.roboto{
  font-family: 'Roboto', sans-serif;
}
</style>
