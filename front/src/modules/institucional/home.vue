<template>
  <div class="flex flex-wrap justify-center pt-4">
    <div class="w-full">
      <div class="w-full text-center text-yellow-300">EM DESENVOLVIMENTO</div>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto px-6">
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center">
        <div class="w-full text-center">
          <div class="w-full text-center t text-white mt-12 font">
            SEU SALDO<br />
            R$ <span class="text-2xl font-bold">0</span>,00
            <i class="ml-4 far fa-eye"></i>
          </div>
          <div class="w-1/3 mt-4 mx-auto">
            <SBtn
              class="bg-success-tail bg-white rounded-md text-black"
              value="Ver extrato"
            ></SBtn>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center mt-10">
        <div class="w-auto text-center">
          <span class="font-bold">R$ 0,00</span><br />
          em dinheiro
        </div>
        <div class="bg-white px-0.5 mx-4"></div>
        <div class="w-auto text-center">
          <span class="font-bold">R$ 0,00</span><br />
          em bônus
        </div>
      </div>
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center">
        <div class="w-1/3 text-center">
          <div class="w-full text-center text-2xl text-white mt-6 font">
            <router-link to="/cadastro">
              <SBtn
                class="btn-warning-tail rounded-md text-white"
                value="Voltar"
                @click="Logout()"
              ></SBtn>

              <!-- <SBtn class="btn-warning-tail" value="Voltar" @click="Logout()"></SBtn> -->
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
