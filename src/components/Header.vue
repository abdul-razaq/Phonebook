<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <router-link tag="a" class="navbar-brand text-light" to="/" exact>Phonebook</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link
            tag="a"
            class="nav-link text-light"
            to="/register"
            exact
            active-class="active"
          >Register</router-link>
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link
            tag="a"
            class="nav-link text-light"
            to="/login"
            exact
            active-class="active"
          >Login</router-link>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <button class="logout-btn nav-link text-light" @click.prevent="logoutUser">Logout</button>
        </li>
        <li class="nav-item dropdown" v-if="isLoggedIn">
          <a
            class="nav-link dropdown-toggle text-light"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >Account</a>
          <div class="dropdown-menu text-light" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link
            tag="a"
            class="nav-link text-light"
            to="/about"
            exact
            active-class="active"
          >About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    ...mapActions({
      logoutUser: "logout"
    })
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: indigo;
}
.active {
  color: burlywood !important;
}
.logout-btn {
  border: none;
  background-color: transparent;
  outline: none;
}
</style>
