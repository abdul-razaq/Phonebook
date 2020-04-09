<template>
  <div class="container">
    <div class="row">
      <div class="container col-md-6 mt-4">
        <div class="card mb-4">
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="firstname">Firstname</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstname"
                  :value="getContact.firstname"
                />
              </div>
              <div class="form-group">
                <label for="middlename">Middlename</label>
                <input
                  type="middlename"
                  class="form-control"
                  id="middlename"
                  :value="getContact.middlename"
                />
              </div>
              <div class="form-group">
                <label for="lastname">Lastname</label>
                <input
                  type="lastname"
                  class="form-control"
                  id="lastname"
                  :value="getContact.lastname"
                />
              </div>
              <div class="form-group">
                <label for="nickname">Nickname</label>
                <input
                  type="nickname"
                  class="form-control"
                  id="nickname"
                  :value="getContact.nickname"
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" :value="getContact.email" />
              </div>
              <div class="form-group">
                <label for="twitter">Twitter</label>
                <input
                  type="text"
                  class="form-control"
                  id="twitter"
                  :value="getContact.socialAccounts.twitter"
                />
              </div>
              <div class="form-group">
                <label for="facebook">Facebook</label>
                <input
                  type="text"
                  class="form-control"
                  id="facebook"
                  :value="getContact.socialAccounts.facebook"
                />
              </div>
              <div class="form-group">
                <label for="instagram">Instagram</label>
                <input
                  type="text"
                  class="form-control"
                  id="instagram"
                  :value="getContact.socialAccounts.instagram"
                />
              </div>
              <div class="form-group">
                <label for="linkedin">Linkedin</label>
                <input
                  type="text"
                  class="form-control"
                  id="linkedin"
                  :value="getContact.socialAccounts.linkedin"
                />
              </div>
              <div class="form-group">
                <label for="reddit">Reddit</label>
                <input
                  type="text"
                  class="form-control"
                  id="reddit"
                  :value="getContact.socialAccounts.reddit"
                />
              </div>
              <div class="form-group">
                <label for="home-phone">Phone number (Home)</label>
                <input
                  type="number"
                  class="form-control"
                  id="home-phone"
                  :value="getContact.phoneNumbers.home"
                />
              </div>
              <div class="form-group">
                <label for="work-phone">Phone number (Work)</label>
                <input
                  type="number"
                  class="form-control"
                  id="work-phone"
                  :value="getContact.phoneNumbers.work"
                />
              </div>
              <div class="form-group">
                <label for="address-home">Home Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address-home"
                  :value="getContact.addresses.home"
                />
              </div>
              <div class="form-group">
                <label for="address-office">Office Address</label>
                <input
                  type="text"
                  class="form-control"
                  id="address-office"
                  :value="getContact.addresses.work"
                />
              </div>
              <div class="form-group">
                <label for="relationship">Relationship</label>
                <select name="relationship" class="custom-select">
                  <option selected>Select a relationship with the contact</option>
                  <option value="friend">Friend</option>
                  <option value="family">Family</option>
                  <option value="co-worker">Co-worker</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    getContact() {
      return this.$store.getters.getContact(this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  background-color: indigo;
  border-color: indigo;
  font-weight: 900;
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
</style>
