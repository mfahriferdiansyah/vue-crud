<script>
import VueHeader from '../components/Header.vue'
import VueFooter from '../components/Footer.vue'
import VueSidebar from '../components/Sidebar.vue'
export default {
  components: {
    VueHeader,
    VueFooter,
    VueSidebar
  }
}
</script>

<template>
  <div class="d-flex">
    <VueSidebar />
    <div class="d-flex flex-column overflow-hidden min-vh-100 vh-100 w-100">
      <VueHeader />
      <div class="container">

      </div>
      <main role="main" class="flex-grow-1 overflow-auto">
      </main>
      <VueFooter />
    </div>
  </div>
</template>