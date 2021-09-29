<template>
  <div class="dark:bg-gray-900 dark:text-gray-100">
    <nav
      class="font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-0 px-4 bg-albank-1 text-white sm:items-baseline w-full dark:bg-gray-800 dark:text-gray-100 shadow-md border-b border-blue-900 dark:border-gray-700 no-print"
      v-if="this.$slots.header"
    >
      <slot name="header"></slot>
    </nav>
    <div
      class="flex w-full h-screen bg-white text-dark dark:bg-gray-700 dark:text-gray-100"
    >
      <div
        class="sidebar w-64 z-10 absolute md:static text-dark p-1 dark:bg-gray-700 dark:text-gray-100 no-print bg-albank-1 border-r-2 border-blue-900"
        v-if="this.$slots.sidebar"
      >
        <div class="flex flex-wrap items-center p-1 text-sm">
          <slot name="sidebar"></slot>
        </div>
      </div>
      <!-- sm:w-8/12 md:w-10/12 lg:w-11/12 xl:w-11/12  -->
      <div
        class="w-full z-0 p-2 absolute md:static bg-albank-1 text-white dark:bg-gray-600 dark:text-gray-100"
        @click="closeSidebarBodyClick()"
      >
        <slot name="mainpage"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  /* eslint-disable @typescript-eslint/explicit-module-boundary-types */
  data() {
    return {};
  },
  methods: {
    closeSidebar() {
      if (document.querySelector(".sidebar")) {
        const sidebar = document.querySelector(".sidebar");
        const storageSidebar = localStorage.getItem("sidebar");

        if (storageSidebar === "sidebar-open" && sidebar) {
          localStorage.sidebar = "sidebar-close";
          sidebar.classList.remove("sidebar-open");
          sidebar.classList.add("sidebar-close");
        }
      }
    },
    closeSidebarBodyClick() {
      if (document.querySelector(".sidebar")) {
        const storageSidebar = localStorage.getItem("sidebar");
        if (window.screen.width < 768 && storageSidebar === "sidebar-open") {
          this.closeSidebar();
        }
      }
    },
  },
};
</script>
