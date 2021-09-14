<template>
  <div class="flex flex-wrap justify-center pt-40">
    <div class="w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6">
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center">
        <div class="w-auto text-center">
          <img class="img-fluid" width="150" src="@/assets/img/logo_albank.jpeg" alt="" />
        </div>
        <div class="w-full text-center">
          <div class="w-full text-center text-2xl text-white mt-12 font">
            Em desenvolvimento<br />
            Novidades em breve!
          </div>
        </div>

        <div class="w-full text-center">
          <div class="w-full text-center text-2xl text-white mt-12 font">
            <router-link to="/cadastro">
              <SBtn class="btn-warning-tail" value="Voltar" @click="Logout()"></SBtn>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const route = useRoute();
    const useAuth = inject("auth");
    const { Logout } = useAuth;

    watch(
      () => route.name,
      () => {
        console.log("Ta Rolando");
      }
    );

    return { Logout };
  },
};
</script>
