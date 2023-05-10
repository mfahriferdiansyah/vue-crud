<script>
import VueHeader from '../components/Header.vue'
import VueFooter from '../components/Footer.vue'
export default {
  components: {
    VueHeader,
    VueFooter
  }
}
</script>

<template>
  <div class="d-flex flex-column overflow-hidden min-vh-100 vh-100">
    <VueHeader />
    <main role="main" class="flex-grow-1 overflow-auto">
   </main>
    <VueFooter />
  </div>
</template>