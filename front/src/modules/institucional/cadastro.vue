<template>
  <div class="flex flex-wrap justify-center mt-16">
    <div class="w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6">
      <div class="flex flex-wrap margin-bottom-4 margin-topo justify-center">
        <div class="w-auto text-center">
          <img
            class="img-fluid"
            width="150"
            src="../../assets/img/logo_albank.jpeg"
            alt=""
          />
        </div>
      </div>
      <div class="text-white text-center">
        <div class="font-bold text-2xl mt-4">Cadastre-se</div>
        <div class="mt-2">
          <input
            v-model="registerInputs.name"
            class="form-tail mt-1"
            placeholder="Nome Completo"
          />

          <input
            v-model="registerInputs.cellphone"
            class="form-tail mt-2"
            placeholder="Telefone/Whatsapp ( ) 00000-0000"
          />
          <input
            v-model="registerInputs.dtnascimento"
            class="form-tail mt-2"
            placeholder="Data de nascimento    /  /"
          />
          <input
            v-model="registerInputs.email"
            type="email"
            class="form-tail mt-2"
            placeholder="E-mail"
          />
          <input
            v-model="registerInputs.pass"
            type="password"
            class="form-tail mt-2"
            placeholder="Crie sua senha"
          />
          <div class="btn-warning-tail mt-4">Enviar</div>
        </div>
      </div>
    </div>
    <div class="w-full text-center text-white">
      <h3 class="text-xl my-7 font-bold">
        Já possui uma conta?
        <router-link to="/">
          <span class="text-yellow-500 underline cursor-pointer">Faça Login</span>
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
    const { registerInputs } = useInstitucional;

    return { registerInputs };
  },
};
</script>
