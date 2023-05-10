<script>
import { useUsersStore } from '../stores'
import { mapActions, mapState, mapWritableState } from 'pinia'


export default {
  computed: {
    ...mapState(useUsersStore, ['userLists', 'totalUsers']),
  },
  methods: {
    ...mapActions(useUsersStore, ['getAllUser', 'deleteUser']),
    changePage(page) {
      this.getAllUser(10*(page - 1))
    },
  },
  async created() {
    this.getAllUser()
  },
}

</script>

<template>
  <table class="table table-hover ">
    <thead class="table-light">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">Department</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in userLists" :key="index">
        <th scope="row">{{ ++index }}</th>
        <td>{{ `${item.firstName} ${item.lastName}` }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.company.department }}</td>
        <td>
          <button type="button" class="btn btn-primary btn-sm">Edit</button>
          <button @click="deleteUser(item.id)" type="button" class="btn btn-secondary btn-sm mx-2">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
