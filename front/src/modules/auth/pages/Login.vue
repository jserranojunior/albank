<template>
  <div class="wallpaper">
    <span>LOGIN</span>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useAuth = inject("auth");
    const { fields, auth, Login } = useAuth;

    return { fields, auth, Login };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
};
</script>
