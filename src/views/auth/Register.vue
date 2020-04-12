<template>
  <div class="container">
    <div class="row">
      <div class="container col-md-6 mt-4">
        <div class="card">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control mb-3" id="username" v-model="username" />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email" />
                <small
                  id="email"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" />
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  v-model="confirmPassword"
                />
              </div>
              <div class="card-footer mb-2">
                <p class="card-text text-center">
                  Already have an account? Click
                  <router-link class="link" tag="a" to="/login" exact>here</router-link> to Login!
                </p>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                @click.prevent="registerNewUser"
              >Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  },
  computed: {
    ...mapGetters(["getStatusAndMessage"])
  },
  methods: {
    registerNewUser() {
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password,
        confirm_password: this.confirmPassword
      };
      this.$store.dispatch("register", formData);
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  background-color: indigo;
  border-color: indigo;
  font-weight: 900;
  display: block;
  margin: 0 auto;
}
.card {
  box-shadow: 2px 2px 4px #8f8e8e;
}
.card-footer {
  background-color: inherit;
  border: none;
}
.link {
  text-decoration: none;
  color: #5f099c;
}
</style>
