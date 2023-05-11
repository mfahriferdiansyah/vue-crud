<script>
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useUsersStore } from '../stores'


export default {
  computed: {
    ...mapState(useUsersStore, ['totalUsers']),
    ...mapWritableState(useUsersStore, ['userFirstName', 'userLastName', 'userDepartment', 'userAge', 'isEdit'])
  },
  methods: {
    ...mapActions(useUsersStore, ['addUser'])
  }
}
</script>

<template>
  <form @submit.prevent="addUser" class="container-sm my-5">
    <div class="form-group my-2">
      <label for="firstName">First Name</label>
      <input v-model="userFirstName" type="text" class="form-control" id="firstName" placeholder="Enter first name">
    </div>
    <div class="form-group my-2">
      <label for="lastName">Last Name</label>
      <input v-model="userLastName" type="text" class="form-control" id="lastName" placeholder="Enter last name">
      <small id="lastNameHelp" class="form-text text-muted">Don't worry we'll masking your last name.</small>
    </div>
    <div class="form-group my-2">
      <label for="userAge">Age</label>
      <input v-model="userAge" type="number" class="form-control" id="userAge" placeholder="Enter age">
    </div>
    <div class="form-group my-2 mb-3">
      <label for="department">Department</label>
      <input v-model="userDepartment" type="text" class="form-control" id="department"
        placeholder="Enter department name">
    </div>
    <router-link to="/" type="button" class="btn btn-secondary">Cancel</router-link>
    <button v-if="userDepartment && userFirstName && userLastName && userAge" type="submit"
      class="btn btn-primary mx-2">Submit</button>
    <button v-else type="submit" class="btn btn-primary mx-2" disabled>Submit</button>
  </form>
</template>
