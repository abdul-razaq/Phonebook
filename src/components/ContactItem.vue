<template>
  <div>
    <div class="card mt-3 p-2">
      <div class="row no-gutters">
        <div class="col-md-9">
          <p class="card-text ml-sm-5 mt-md-2 ml-md-4">AbdulRazaq Suleiman</p>
        </div>
        <div class="col-md-3">
          <router-link tag="button" exact to="/" class="btn btn-info mr-3">View</router-link>
          <router-link tag="button" exact to="/" class="btn btn-secondary mr-3">Edit</router-link>
          <router-link tag="button" exact to="/" class="btn btn-danger mr-3">Delete</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card-text {
  font-weight: 900;
}
.btn-danger {
  color: fff;
  font-weight: 900;
  background-color: red;
}
.btn-secondary {
  color: fff;
  font-weight: 900;
}
.btn-info {
  color: fff;
  font-weight: 900;
}
</style>
