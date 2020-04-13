<template>
  <div class="container">
    <div class="row">
      <div class="container col-md-6 mt-4">
        <div class="card">
          <div class="card-body">
            <div
              class="alert alert-danger"
              v-if="getStatusAndMessage.status === 'Error' && showAlert"
            >
              {{ getStatusAndMessage.message }}
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
                @click="showAlert = false"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form @submit.prevent="loginUser" novalidate>
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
                <div v-if="$v.email.$dirty">
                  <p
                    v-if="!$v.email.email"
                    :class="{'error': !$v.email.email}"
                  >Please provide a valid email address</p>
                  <p
                    v-if="!$v.email.required"
                    :class="{ 'error': !$v.email.required }"
                  >Email field cannot be empty</p>
                </div>
                <small
                  id="email"
                  class="form-text text-muted"
                >We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="password"
                  @blur="$v.password.$touch()"
                  :class="{invalid: $v.password.$error}"
                />
              </div>
              <div v-if="$v.password.$dirty">
                <p
                  v-if="!$v.password.required"
                  :class="{ error: !$v.password.required}"
                >Password field cannot be empty</p>
                <p
                  v-if="!$v.password.minLength"
                  :class="{ error: !$v.password.minLength}"
                >Password must be {{ $v.password.$params.minLength.min }} characters or more</p>
                <p
                  v-if="$v.password.containPassword"
                  :class="{ error: $v.password.containPassword }"
                >Password cannot contain the word 'password'</p>
              </div>
              <div class="card-footer mb-2">
                <p class="card-text text-center">
                  Don't have an account yet? Click
                  <router-link class="link" tag="a" to="/register" exact>here</router-link> to Register!
                </p>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                :disabled="$v.email.$error && $v.password.$error"
              >Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      showAlert: false
    };
  },
  computed: {
    ...mapGetters(["getStatusAndMessage"])
  },
  watch: {
    showAlert: function() {
      setTimeout(() => {
        this.showAlert = false;
      }, 5000);
    }
  },
  methods: {
    loginUser() {
      const loginData = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("login", loginData);
      if (this.getStatusAndMessage.status === "Error") {
        this.showAlert = true;
      }
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
.error {
  color: red;
}
.invalid {
  border: 1px solid red;
  transition: all 0.4s ease-out;
}
</style>
