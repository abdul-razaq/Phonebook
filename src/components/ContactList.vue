<template>
  <div class="container">
    <h5 class="mt-2">Total Contacts: 4</h5>
    <app-contact-item v-for="(item, index) in 4" :key="index"></app-contact-item>
  </div>
</template>

<script>
import ContactItem from "../components/ContactItem";

export default {
  data() {
    return {};
  },
  components: {
    appContactItem: ContactItem
  }
};
</script>

<style>
</style>