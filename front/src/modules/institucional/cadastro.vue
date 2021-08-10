<template>
  <div class="mt-60">
    <div class="flex justify-center">
      <div class="w-auto text-center">
        <img
          class="img-fluid"
          width="100"
          src="../../assets/img/logo_albank.jpeg"
          alt=""
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-center mt-2">
      <div class="w-1/4 painel">
        <div class="painel-header font-bold">CADASTRO INICIAL</div>
        <div class="painel-body">
          <input
            v-model="registerInputs.name"
            class="form-tail mt-1"
            placeholder="Nome"
          />
          <input
            v-model="registerInputs.middlename"
            class="form-tail mt-1"
            placeholder="Sobrenome"
          />
          <input
            v-model="registerInputs.cellphone"
            class="form-tail mt-1"
            placeholder="Celular"
          />
          <select v-model="registerInputs.type" class="form-tail mt-1 cursor-pointer">
            <option disabled value="">Quero ser</option>
            <option value="1">Cliente</option>
            <option value="2">Sócio</option>
            <option value="3">Agente de negócios</option>
          </select>
          <div class="btn-warning-tail mt-1">Enviar</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, onBeforeMount } from "vue";
export default {
  setup() {
    const useInstitucional = inject("institucional");
    const { registerInputs } = useInstitucional;

    return { registerInputs };
  },
};
</script>
