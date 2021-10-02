<template>
  <SliferLayout>
    <template #header>
      <div class="w-full">
        <div class="flex justify-between">
          <div>
            <span class="text-white">
              <STogglesidebar class="text-white align-middle"></STogglesidebar
            ></span>
          </div>
          <div><i class="far fa-bell text-white align-middle"></i></div>
        </div>
      </div>
    </template>
    <template #sidebar>
      <Sidebar></Sidebar>
    </template>
    <template #mainpage>
      <div class="bg-albank-2 min-h-screen">
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
