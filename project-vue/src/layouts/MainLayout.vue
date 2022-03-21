<template>
  <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>
    <NavBar @click="isOpen=!isOpen" />
    <SideBar v-model="isOpen"/>
    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue'
import SideBar from '@/components/Sidebar.vue'
export default {
  name: 'main-layout',
  data: () => ({
    isOpen: true,
  }),
  components: {
    NavBar, SideBar
  }
}
</script>
