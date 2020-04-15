<template>
  <div class="container">
    <h5 class="mt-2">Total Contacts: {{ getTotalContacts }}</h5>
    <p
      v-if="!getAllContacts.length"
      class="text-center lead alert alert-info mt-4"
    >You do not have any contact yet!</p>
    <app-contact-item
      v-else
      v-for="contact in getAllContacts"
      :key="contact._id"
      :fullname="contact.firstname + ' ' + contact.lastname"
      :contactId="contact._id"
    ></app-contact-item>
  </div>
</template>

<script>
import ContactItem from "../components/ContactItem";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getAllContacts", "getTotalContacts"])
  },
  data() {
    return {};
  },
  components: {
    appContactItem: ContactItem
  },
  created() {
    this.$store.dispatch("getAllContacts");
  }
};
</script>

<style lang="scss" scoped>
.alert {
  color: #fff;
  background-color: #5f099c;
}
</style>
