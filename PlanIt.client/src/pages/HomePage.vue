<template>
  <div class="container-fluid roboto">
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10 text-center">
        <div class="card mt-5 elevation-3">
          <div class="card-body">
            <div class="row justify-content-between">
              <div class="col-md-5 text-start mx-4 text-primary lighten-25">
                  <h3>Projects</h3>
                  <p>a list of all the projects for</p>
              </div>
              <div class="col-md-5 text-end mx-4">
                <button class="btn btn-outline-primary ">Create Project</button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 pt-3">
                <div class="row">
                  <div class="col-md-4 text-primary lighten-25">NAME</div>
                  <div class="col-md-4 text-primary lighten-25">MEMBERS</div>
                  <div class="col-md-4 text-primary lighten-25">STARTED</div>
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
export default {
  name: 'Home'
}
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
