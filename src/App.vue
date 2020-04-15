<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    appHeader: Header
  }
};
</script>

<style lang="scss">
body {
  background-color: #d8d8d8;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-size: 18px;
}
.form-control:focus,
.custom-select:focus {
  border: 1px solid #5f099c;
  outline: none;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: all 0.4s ease-out;
}
.btn:focus,
.btn:active,
.btn:disabled {
  outline: none !important;
  box-shadow: none !important;
  background-color: #5f099c;
  border-color: #5f099c;
}
.btn:disabled {
  cursor: not-allowed;
}
</style>
