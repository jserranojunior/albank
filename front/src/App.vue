<template>
  <SliferLayout>
    <template #header>
      <img class="img-fluid" width="30" src="@/assets/img/logo_albank.jpeg" alt="" />
      <STogglesidebar
    /></template>
    <template #sidebar>
      <Sidebar></Sidebar>
    </template>
    <template #mainpage>
      <div class="bg-albank-1 min-h-screen">
        <router-view></router-view>
      </div>
    </template>
  </SliferLayout>
</template>

<script>
import SliferLayout from "./views/layouts/SliferLayout.vue";
import { Provides } from "./provides/index";
import Sidebar from "./views/layouts/Sidebar.vue";
export default {
  name: "App",
  components: {
    SliferLayout,
    Sidebar,
  },

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    Provides();
  },
};
</script>
<style>
@import "../node_modules/slifer/src/assets/styles/slifer-style.css";
</style>
