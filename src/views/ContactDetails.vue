<template>
  <div class="col-md-5 container">
    <h3
      class="mt-4 text-center mb-4"
    >{{ getContact.firstname + ' ' + getContact.lastname }}'s Contact Details</h3>
    <p class="text-muted text-center">Date Added: {{ getContact.dateAdded | convertToUTCTime }}</p>
    <div class="list-group mb-2">
      <div class="list-group-item" v-if="getContact.firstname">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Firstname</h4>
          <p class="h4">{{ getContact.firstname }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.lastname">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Lastname</h4>
          <p class="h4">{{ getContact.lastname }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.email">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Email</h4>
          <p class="h4">{{ getContact.email }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.nickname">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Nickname</h4>
          <p class="h4">{{ getContact.nickname }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.phoneNumbers.home">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Phone (Home)</h4>
          <p class="h4">{{ getContact.phoneNumbers.home }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.phoneNumbers.work">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Phone (Work)</h4>
          <p class="h4">{{ getContact.phoneNumbers.work }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.socialAccounts.twitter">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Twitter</h4>
          <p class="h4">{{ getContact.socialAccounts.twitter }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.socialAccounts.facebook">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Facebook</h4>
          <p class="h4">{{ getContact.socialAccounts.facebook }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.socialAccounts.instagram">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Instagram</h4>
          <p class="h4">{{ getContact.socialAccounts.instagram }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.socialAccounts.linkedin">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">LinkedIn</h4>
          <p class="h4">{{ getContact.socialAccounts.linkedin }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.socialAccounts.reddit">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Reddit</h4>
          <p class="h4">{{ getContact.socialAccounts.reddit }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.addresses.home">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Address (Home)</h4>
          <p class="h4">{{ getContact.addresses.home }}</p>
        </div>
      </div>
      <div class="list-group-item mt-2" v-if="getContact.addresses.work">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">Address (Work)</h4>
          <p class="h4">{{ getContact.addresses.work }}</p>
        </div>
      </div>
    </div>
    <button
      class="btn btn-danger mb-4"
      @click="deleteContact(id)"
    >Delete {{ getContact.firstname + ' ' + getContact.lastname }}</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    getContact() {
      return this.$store.getters.getContact(this.id);
    }
  },
  methods: {
    deleteContact(contactId) {
      this.$store.dispatch("deleteContact", contactId);
      this.$router.replace('/');
    }
  },
  filters: {
    convertToUTCTime(value) {
      return new Date(value).toUTCString();
    }
  }
};
</script>

<style scoped lang="scss">
.list-group-item:nth-child(even) {
  background-color: indigo;
  color: #fff;
}
button,
button:hover,
button:active {
  background-color: red;
}
</style>