<template>
  <div class="flex flex-wrap justify-center pt-4">
    <div class="w-full">
      <div class="w-full text-center text-blue-700">EM DESENVOLVIMENTO</div>
    </div>
    <div class="w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto px-6">
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center">
        <div class="w-full text-center">
          <div class="w-full text-center t text-white mt-12 font">
            SEU SALDO<br />
            R$ <span class="text-2xl font-bold">0</span>,00
            <i class="ml-4 far fa-eye"></i>
          </div>
          <div class="w-full md:w-1/3 mt-4 mx-auto">
            <SBtn
              class="bg-success-tail bg-white rounded-md text-black"
              value="Ver extrato"
            ></SBtn>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center mt-10">
        <div class="w-full md:w-auto text-center">
          <span class="font-bold">R$ 0,00</span><br />
          em dinheiro
        </div>
        <div class="bg-white pt-4 md:pt-0 px-0.5 mx-4 hidden md:block"></div>
        <div class="w-full md:w-auto text-center">
          <span class="font-bold">R$ 0,00</span><br />
          em bônus
        </div>
      </div>
      <div class="flex flex-wrap mt-10 border-">
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/1.png" alt="" />
        </div>
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/2.png" alt="" />
        </div>
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/3.png" alt="" />
        </div>
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/4.png" alt="" />
        </div>

        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/5.png" alt="" />
        </div>
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/6.png" alt="" />
        </div>
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/7.png" alt="" />
        </div>
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/8.png" alt="" />
        </div>

        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/9.png" alt="" />
        </div>
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/10.png" alt="" />
        </div>
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/11.png" alt="" />
        </div>
        <div class="w-1/4 mt-4 p-1">
          <img class="img-fluid" width="100" src="@/assets/img/btns/12.png" alt="" />
        </div>
      </div>
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center">
        <div class="w-full md:w-auto text-center">
          <div class="w-full text-center text-2xl text-white mt-6 font">
            <router-link to="/cadastro">
              <SBtn
                class="btn-primary-tail rounded-md text-white"
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
