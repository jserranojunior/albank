<template>
  <div class="flex flex-wrap justify-center mt-16">
    <div class="w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6">
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center">
        <div class="w-auto text-center">
          <img class="img-fluid" width="150" src="@/assets/img/logo_albank.jpeg" alt="" />
        </div>
      </div>
      <div class="text-white text-center">
        <div class="font-bold text-2xl mt-6">Login</div>
        <div class="mt-2">
          <input
            v-model="loginInputs.cellphone"
            v-maska="'(##) #####-####'"
            class="form-tail mt-2"
            placeholder="Telefone/Whatsapp ( ) 00000-0000"
          />
          <input
            v-model="loginInputs.password"
            type="password"
            class="form-tail mt-2"
            placeholder="Digite sua senha"
          />
          <p class="underline text-right text-sm">esqueci minha senha</p>

          <div class="btn-warning-tail mt-6">Entrar</div>
        </div>
      </div>
    </div>
    <div class="w-full text-center text-white">
      <h3 class="text-xl my-7 font-bold">
        Não possui uma conta?
        <router-link to="/cadastro">
          <span class="text-yellow-500 underline cursor-pointer">Cadastre-se</span>
        </router-link>
      </h3>
    </div>
    <div class="w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6">
      <div class="flex flex-wrap row-space justify-center mt-2">
        <div class="w-auto text-center mr-8">
          <div class="icon-social text-primary text-2xl text-white">
            <a target="_blank" :href="linkWhatsApp">
              <h5>
                <i class="bg-white-social fab fa-whatsapp"></i>
              </h5>
            </a>
          </div>
        </div>
        <div class="w-auto text-center mr-8">
          <div class="icon-social text-primary text-2xl text-white">
            <a target="_blank" :href="linkWhatsApp">
              <h5>
                <i class="bg-white-social fab fa-facebook-f"></i>
              </h5>
            </a>
          </div>
        </div>
        <div class="w-auto text-center mr-8">
          <div class="icon-social text-primary text-2xl text-white">
            <a target="_blank" :href="linkWhatsApp">
              <h5>
                <i class="bg-white-social fas fa-map-marker-alt"></i>
              </h5>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useInstitucional = inject("institucional");
    const { linkWhatsApp } = useInstitucional;

    const useAuth = inject("auth");
    const { loginInputs, auth, Login } = useAuth;

    return { loginInputs, auth, Login, linkWhatsApp };
  },
};
</script>
