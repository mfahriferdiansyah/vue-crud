<script>
import { useUsersStore } from '../stores'
import { mapActions, mapState, mapWritableState } from 'pinia'


export default {
  computed: {
    ...mapState(useUsersStore, ['userLists', 'totalUsers', 'totalSKip']),
  },
  methods: {
    ...mapActions(useUsersStore, ['getAllUser']),
    changePage(page) {
      this.getAllUser(10*(page))
    }
  },
  async created() {
    this.getAllUser()
  },
}
</script>

<template>
  <div class="m-3">
    <nav>
      <div>
        <ul class="pagination justify-content-end">
          <li class="page-item">
            <a class="page-link" href="#" tabindex="-1">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
