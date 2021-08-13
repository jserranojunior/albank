<template>
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
        type="email"
        v-model="registerInputs.email"
        class="form-tail mt-2"
        placeholder="E-mail"
      />
      <input
        type="password"
        v-model="registerInputs.pass"
        class="form-tail mt-2"
        placeholder="Crie sua senha"
      />
      <input
        type="password"
        v-model="registerInputs.confirmPass"
        class="form-tail mt-2"
        placeholder="Confirme sua senha"
      />

      <div class="btn-warning-tail mt-4">Enviar</div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const useInstitucional = inject("institucional");
    const { registerInputs } = useInstitucional;

    return { registerInputs };
  },
};
</script>
