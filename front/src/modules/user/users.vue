<template>
  <SCard class="text-black">
    <template #header
      ><span class="font-bold text-center text-gray-600"> USÁRIOS CADASTRADOS</span>
    </template>
    <template #body>
      <div>
        <table class="table table-tail table-bordered">
          <thead class="text-left">
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Telefone</th>
              <th>Data de nascimento</th>
              <th>CPF</th>
              <th>E-mail</th>
            </tr>
          </thead>

          <tbody class="text-left">
            <tr v-for="user in users" :key="user.ID" @click="selectUser(user.ID)">
              <td>{{ user.ID }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.cellphone }}</td>
              <td>{{ dateUsToPtBr(user.birth_date) }}</td>
              <td>{{ user.cpf }}</td>
              <td>{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </SCard>
</template>
<script>
import { inject, onBeforeMount } from "vue";
import { dateUsToPtBr } from "@/helpers/dates/helpersDates";
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup() {
    const useUsers = inject("users");
    const { users, getAllUsers, selectUser } = useUsers;
    onBeforeMount(async () => {
      await getAllUsers();
    });
    return { users, dateUsToPtBr, selectUser };
  },
};
</script>
