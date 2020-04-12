<template>
  <div class="container">
    <div class="row">
      <div class="container col-md-6 mt-4">
        <div class="card">
          <div class="card-body">
            <form @submit.prevent="loginUser">
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  :class="{invalid: $v.email.$error}"
                  type="email"
                  class="form-control mb-3"
                  id="email"
                  v-model="email"
                  @blur="$v.email.$touch()"
                />
                <p
                  v-if="!$v.email.email"
                  :class="{'error': !$v.email.email}"
                >Please provide a valid email address</p>
                <p
                  v-if="!$v.email.required"
                  :class="{ 'error': !$v.email.required }"
                >Email field cannot be empty</p>
                <small
                  id="email"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" v-model="password" @blur="$v.password.$touch()" :class="{invalid: $v.password.$error}" />
              </div>
              <p v-if="!$v.password.required" :class="{ error: !$v.password.required}">Password field cannot be empty</p>
              <p v-if="!$v.password.minLength" :class="{ error: !$v.password.minLength}">Password must be {{ $v.password.$params.minLength.min }} characters or more</p>
              <p v-if="$v.password.containPassword" :class="{ error: $v.password.containPassword }">Password cannot contain the word 'password'</p>
              <div class="card-footer mb-2">
                <p class="card-text text-center">
                  Don't have an account yet? Click
                  <router-link class="link" tag="a" to="/register" exact>here</router-link> to Register!
                </p>
              </div>
              <button type="submit" class="btn btn-primary" :disabled="$v.email.error || $v.password.$error">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";

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
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8),
      containPassword(value) {
        return value.includes("password");
      }
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
.error {
  color: red;
}
.invalid {
  border: 1px solid red;
  transition: all .4s ease-out;
}
</style>
