<template>
  <div class="my-2">
    <div class="flex flex-wrap justify-center pt-4">
      <div class="w-full sm:w-full md:w-1/2 lg:w-1/2 mx-auto px-6">
        <span class="text-blue-600 font-bold text-center mb-4">Em desenvolvimento</span>
        <SCard>
          <template #header> <span class="text-black"> Editando </span></template>
          <template #body>
            <div class="mt-2">
              <input
                v-model="updateInputs.name"
                class="form-tail mt-1"
                placeholder="Nome Completo"
              />

              <input
                v-model="updateInputs.cellphone"
                v-maska="'(##) #####-####'"
                class="form-tail mt-2"
                placeholder="Telefone/Whatsapp ( ) 00000-0000"
              />
              <input
                v-model="updateInputs.dtBirth"
                v-maska="'##/##/####'"
                type="text"
                class="form-tail mt-2"
                placeholder="Data de nascimento    /  /"
              />
              <input
                v-model="updateInputs.cpf"
                v-maska="'###.###.###-##'"
                type="text"
                class="form-tail mt-2"
                placeholder="CPF"
              />
              <input
                v-model="updateInputs.email"
                type="email"
                class="form-tail mt-2"
                placeholder="E-mail"
              />
              <input
                v-model="updateInputs.password"
                type="password"
                class="form-tail mt-2"
                placeholder="Crie sua senha"
              />
              <div class="flex">
                <div class="w-full md:w-1/2 px-1">
                  <router-link :to="{ name: 'Users' }">
                    <div class="btn-warning-tail mt-4">Voltar</div>
                  </router-link>
                </div>
                <div class="w-full md:w-1/2 px-1">
                  <div class="btn-primary-tail mt-4" @click="update()">Enviar</div>
                </div>
              </div>
            </div>
          </template>
        </SCard>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    function update() {
      alert("Em desenvolvimento");
    }
    const useAuth = inject("users");
    const { updateInputs } = useAuth;
    return { updateInputs, update };
  },
};
</script>
