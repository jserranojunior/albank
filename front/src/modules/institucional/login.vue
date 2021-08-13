<template>
  <div class="text-white text-center">
    <div class="font-bold text-2xl mt-4">Login</div>
    <div class="mt-2">
      <input
        v-model="loginInputs.name"
        class="form-tail mt-2"
        placeholder="Telefone/Whatsapp ( ) 00000-0000"
      />
      <input
        v-model="loginInputs.password"
        class="form-tail mt-2"
        placeholder="Digite sua senha"
      />
      <p class="underline text-right text-sm">esqueci minha senha</p>

      <div class="btn-warning-tail mt-4">Entrar</div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const useInstitucional = inject("institucional");
    const { loginInputs } = useInstitucional;

    return { loginInputs };
  },
};
</script>
