<template>
  <div class="container">
    <div class="row">
      <div class="container col-md-6 mt-4">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control mb-3" id="email" v-model="email" />
                <small
                  id="email"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" />
              </div>
              <div class="card-footer mb-2">
                <p class="card-text text-center">
                  Don't have an account yet? Click
                  <router-link class="link" tag="a" to="/register" exact>here</router-link> to Register!
                </p>
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    loginUser() {
      const loginData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("login", loginData);
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
  &:hover {
    background-color: #5f099c;
    border-color: #5f099c;
  }
  &:active {
    background-color: #5f099c !important;
    border-color: #5f099c !important;
  }
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
