<script>
import VueHeader from '../components/Header.vue'
import VueFooter from '../components/Footer.vue'
import VueSidebar from '../components/Sidebar.vue'
import VueTable from '../components/Table.vue'
import Pagination from '../components/Pagination.vue'
import { mapActions, mapState, mapWritableState } from 'pinia'
import { useUsersStore } from '../stores'


export default {
  components: {
    VueHeader,
    VueFooter,
    VueSidebar,
    VueTable,
    Pagination
  },
  computed: {
    ...mapState(useUsersStore, ['totalUsers']),
  }
}
</script>

<template>
  <div class="d-flex">
    <VueSidebar />
    <div class="d-flex flex-column overflow-hidden min-vh-100 vh-100 w-100">
      <VueHeader />
      <div class="container-fluid align-middle">
        <div class="card text-center mb-3">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Imaginary Company</h5>
            <p class="card-text">Total Employers : {{ totalUsers }}</p>
            <button type="button" class="btn btn-primary">+ New User</button>
          </div>
          <div class="card-footer text-muted">
            -
          </div>
        </div>
        <VueTable />
        <Pagination />
      </div>
      <main role="main" class="flex-grow-1 overflow-auto">
      </main>
      <VueFooter />
    </div>
  </div>
</template>