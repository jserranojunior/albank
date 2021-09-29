import useHttpUsers from "./useHttpUsers";

import { reactive, toRefs } from "vue";
// import { useRouter } from 'vue-router'

const HttpUsers = new useHttpUsers();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUsers = () => {
  const state = reactive({
    users: {},
  });

  async function getAllUsers() {
    console.log("Fazendo get");
    return await HttpUsers.getAllUsers()
      .then((res) => {
        if (res) {
          console.log("Puxou algo");
          console.log(res.data.data);
          state.users = res.data.data;
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  return {
    ...toRefs(state),
    getAllUsers,
  };
};
