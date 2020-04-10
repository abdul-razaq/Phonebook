<template>
  <div class="row mt-3">
    <div class="col-md-3">
      <router-link tag="button" to="/contacts/new" exact class="btn btn-success mb-2">Add Contact</router-link>
    </div>
    <div class="col-md-5">
      <input type="search" placeholder="Search Contact" class="form-control mb-2" />
    </div>
    <div class="col-md-4">
      <select name="relationship" class="custom-select" id="relationship">
        <option selected>Filter contacts by</option>
        <option value="friends">Friends</option>
        <option value="co-workers">Co-Workers</option>
        <option value="families">Families</option>
      </select>
    </div>
    <app-contact-list></app-contact-list>
  </div>
</template>

<script>
import ContactList from "../components/ContactList";

export default {
  components: {
    appContactList: ContactList
  }
};
</script>

<style lang="scss" scoped>
.btn-success {
  font-weight: 900;
}
</style>