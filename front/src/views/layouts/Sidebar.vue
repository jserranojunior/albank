<template>
  <div class="w-full">
    <!-- <router-link to="/" class="nav-btn">
      <span>Home</span>
    </router-link> -->
    <router-link to="/login" class="nav-btn">
      <span>Login</span>
    </router-link>
    <router-link to="/cadastro" class="nav-btn">
      <span>Cadastro</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      sidebarHeight: 0,
    };
  },
};
</script>
