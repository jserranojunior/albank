<template>
  <div class="w-full">
    <!-- <router-link to="/" class="nav-btn">
      <span>Home</span>
    </router-link> -->
    <img
      class="img-fluid align-middle mx-auto mb-2"
      width="46"
      src="@/assets/img/logo_albank.jpeg"
      alt=""
    />
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
