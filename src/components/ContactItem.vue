<template>
  <div>
    <div class="card mt-3 p-2">
      <div class="row no-gutters">
        <div class="col-md-9">
          <p class="card-text ml-sm-5 mt-md-2 ml-md-4">{{ fullname }}</p>
        </div>
        <div class="col-md-3">
          <router-link
            tag="button"
            exact
            :to="{name: 'ContactDetails', params: { id: contactId }}"
            class="btn btn-info mr-3"
          >View</router-link>
          <router-link
            tag="button"
            exact
            :to="{name: 'EditContact', params: { id: contactId }}"
            class="btn btn-secondary mr-3"
          >Edit</router-link>
          <button type="button" class="btn btn-danger mr-3" @click="deleteContact(contactId)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fullname", "contactId"],
  methods: {
    deleteContact(contactId) {
      this.$store.dispatch("deleteContact", contactId);
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 2px 2px 3px #8f8e8e;
}
.card-text {
  font-weight: 500;
}
.btn-danger {
  color: fff;
  font-weight: 900;
  background-color: red;
}
.btn-secondary,
.btn-info {
  color: fff;
  font-weight: 900;
}
</style>
