import useHttpUsers from "./useHttpUsers";

import { reactive, toRefs } from "vue";
import router from "@/router/index";

const HttpUsers = new useHttpUsers();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useUsers = () => {
  const state = reactive({
    users: {},
    idUserSelected: -0,
    updateInputs: {
      type: "",
      email: "",
      password: "",
      cpf: "",
      birth_date: "",
      dtBirth: "",
    },
  });

  async function selectUser(id: number) {
    // PUXAR USUARIO AQUI
    state.idUserSelected = id;
    state.updateInputs = {
      type: "",
      email: "",
      password: "",
      cpf: "",
      birth_date: "",
      dtBirth: "",
    };
    router.push({ name: "EditUser" });
  }

  async function getAllUsers() {
    return await HttpUsers.getAllUsers()
      .then((res) => {
        if (res) {
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
    selectUser,
  };
};
