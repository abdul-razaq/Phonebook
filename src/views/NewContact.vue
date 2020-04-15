<template>
  <div class="container">
    <div class="row">
      <div class="container col-md-6 mt-4">
        <div class="card mb-4">
          <div class="card-body">
            <form @submit.prevent="addNewContact">
              <div class="form-group">
                <label for="firstname">Firstname</label>
                <input type="text" class="form-control" id="firstname" v-model="firstname" />
              </div>
              <div class="form-group">
                <label for="middlename">Middlename</label>
                <input type="middlename" class="form-control" id="middlename" v-model="middlename" />
              </div>
              <div class="form-group">
                <label for="lastname">Lastname</label>
                <input type="lastname" class="form-control" id="lastname" v-model="lastname" />
              </div>
              <div class="form-group">
                <label for="nickname">Nickname</label>
                <input type="nickname" class="form-control" id="nickname" v-model="nickname" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="email" />
              </div>
              <div class="form-group">
                <label for="facebook">Facebook</label>
                <input type="text" class="form-control" id="facebook" v-model="facebook" />
              </div>
              <div class="form-group">
                <label for="twitter">Twitter</label>
                <input type="text" class="form-control" id="twitter" v-model="twitter" />
              </div>
              <div class="form-group">
                <label for="instagram">Instagram</label>
                <input type="text" class="form-control" id="instagram" v-model="instagram" />
              </div>
              <div class="form-group">
                <label for="linkedin">Linkedin</label>
                <input type="text" class="form-control" id="linkedin" v-model="linkedin" />
              </div>
              <div class="form-group">
                <label for="reddit">Reddit</label>
                <input type="text" class="form-control" id="reddit" v-model="reddit" />
              </div>
              <div class="form-group">
                <label for="home-phone">Phone number (Home)</label>
                <input type="number" class="form-control" id="home-phone" v-model="homePhone" />
              </div>
              <div class="form-group">
                <label for="work-phone">Phone number (Work)</label>
                <input type="number" class="form-control" id="work-phone" v-model="workPhone" />
              </div>
              <div class="form-group">
                <label for="address-home">Home Address</label>
                <input type="text" class="form-control" id="address-home" v-model="homeAddress" />
              </div>
              <div class="form-group">
                <label for="address-office">Office Address</label>
                <input type="text" class="form-control" id="address-office" v-model="workAddress" />
              </div>
              <div class="form-group">
                <label for="relationship">Relationship</label>
                <select name="relationship" class="custom-select" v-model="relationship">
                  <option selected>Select a relationship with the contact</option>
                  <option value="friend">Friend</option>
                  <option value="family">Family</option>
                  <option value="co-worker">Co-worker</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">Add Contact</button>
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
      firstname: "",
      middlename: "",
      lastname: "",
      nickname: "",
      email: "",
      twitter: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      reddit: "",
      homePhone: null,
      workPhone: null,
      homeAddress: "",
      workAddress: "",
      relationship: ""
    };
  },
  methods: {
    addNewContact() {
      const newContactData = {
        firstname: this.firstname,
        middlename: this.middlename,
        lastname: this.lastname,
        nickname: this.nickname,
        email: this.email,
        socialAccounts: {
          twitter: this.twitter,
          facebook: this.facebook,
          instagram: this.instagram,
          linkedin: this.linkedin,
          reddit: this.reddit
        },
        phoneNumbers: {
          home: this.homePhone,
          work: this.workPhone
        },
        addresses: {
          home: this.homeAddress,
          work: this.workAddress
        },
        relationship: this.relationship
      };
      this.$store.dispatch("addNewContact", newContactData);
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
