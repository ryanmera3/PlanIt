<template>
  <div class="taskdetails-edit">
    <form>
      <div class="col-md-12">
        <div class="row my-3">
          <div class="col-md-11">
            <p class="p-0">Name</p>
            <input type="text" placeholder="Name" class="w-100 p-0">
          </div>
        </div>
        <div class="row my-3">
          <div class="col-md-3">
            <p class="mb-2">Weight<i class="mdi mdi-weight"></i></p>
            <input type="number" placeholder="1" min="1" class="w-75 ">
          </div>
          <div class="col-md-8">
            <div class="dropdown">
              <p class="mb-2">Sprint<i class="mdi mdi-walk"></i></p>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Dropdown button
              </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
          </div>
        </div>
      </div>
    </form>

  </div>
</template>


<script>
export default {
  setup(){
    return {}
  }}
</script>


<style lang="scss" scoped>

</style>