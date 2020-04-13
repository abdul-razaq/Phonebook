<template>
  <div class="container">
    <div class="row">
      <div class="container col-md-6 mt-4">
        <div class="card">
          <div class="card-body">
            <div
              class="alert alert-danger"
              v-if="getStatusAndMessage.status === 'Error' && showClose"
            >
              {{ getStatusAndMessage.message }}
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                @click="showClose = false"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="registerNewUser" novalidate>
              <div class="form-group">
                <label for="username">Username</label>
                <input
                  type="text"
                  class="form-control mb-3"
                  id="username"
                  v-model="username"
                  @blur="$v.username.$touch()"
                  :class="{ invalid: $v.username.$error }"
                />
                <div v-if="$v.username.$dirty">
                  <p
                    v-if="!$v.username.required"
                    :class="{ error: !$v.username.required}"
                  >Username is required</p>
                </div>
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="email"
                  @blur="$v.email.$touch()"
                  :class="{ invalid: $v.email.$error }"
                />
                <small
                  id="email"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
                <div v-if="$v.email.$dirty">
                  <p
                    v-if="!$v.email.required"
                    :class="{ error: !$v.email.required }"
                  >Email address is required</p>
                  <p
                    v-if="!$v.email.email"
                    :class="{ error: !$v.email.email }"
                  >Please enter a valid email address</p>
                </div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  @blur="$v.password.$touch()"
                  :class="{ invalid: $v.password.$error }"
                />
                <div v-if="$v.password.$dirty">
                  <p
                    v-if="!$v.password.required"
                    :class="{ error: !$v.password.requried }"
                  >Password is required</p>
                  <p
                    v-if="!$v.password.minLength"
                    :class="{ error: !$v.password.minLength }"
                  >Password must be {{ $v.password.$params.minLength.min }} characters or more</p>
                  <p
                    v-if="$v.password.containPassword"
                    :class="{ error: $v.password.containPassword }"
                  >Password cannot contain the word 'password'</p>
                </div>
              </div>
              <div class="form-group">
                <label for="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="confirmPassword"
                  v-model="confirmPassword"
                  @blur="$v.confirmPassword.$touch()"
                  :class="{ invalid: $v.confirmPassword.$error }"
                />
                <div v-if="!$v.confirmPassword.sameAsPassword">
                  <p
                    :class="{ error: !$v.confirmPassword.sameAsPassword }"
                    v-if="!$v.confirmPassword.sameAsPassword"
                  >Passwords do not match</p>
                </div>
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
                :disabled="$v.email.$error && $v.username.$error && $v.password.$error"
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
import { required, sameAs, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      showClose: false
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
      if (this.getStatusAndMessage.status === "Error") {
        this.showClose = true;
      }
    }
  },
  validations: {
    username: {
      required
    },
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
    },
    confirmPassword: {
      sameAsPassword: sameAs("password")
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
  &:hover,
  &:focus,
  &:active {
    background-color: indigo;
  }
}
.close {
  color: red;
  background-color: transparent;
  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
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
.invalid {
  border: 1px solid red;
}
.error {
  color: red;
}
</style>
