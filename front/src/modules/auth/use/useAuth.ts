import useHttpAuth from "./useHttpAuth";
import { datePtBrToUs, dateUsToPtBr } from "@/helpers/dates/helpersDates";

import { reactive, toRefs } from "vue";
// import { useRouter } from 'vue-router'
import router from "@/router/index";

const HttpAuth = new useHttpAuth();
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAuth = () => {
  const state = reactive({
    ola: "Ola",
    fields: { email: "", password: "" },
    auth: { erro: "", token: "", data: "" },
    erro: null,
    loginInputs: { email: "", password: "" },
    registerInputs: {
      type: "",
      email: "",
      password: "",
      cpf: "",
      birth_date: "",
      dtBirth: "",
    },
    admin: false,
    logged: false,
    userID: null,
  });

  async function Login() {
    state.auth.erro = "";
    state.auth.data = "";
    if (
      state.loginInputs &&
      state.loginInputs.email &&
      state.loginInputs.password
    ) {
      return await HttpAuth.login(state.loginInputs)
        .then((res) => {
          if (res && res.data) {
            state.auth.data = "Logado com sucesso!";
            state.logged = true;
            state.admin = true;
            console.log(res.data.token);
            setToken(res.data.token).then((response) => {
              if (response) {
                // console.log("fazendo redirect");
                router.push({ name: "Home" });
              }
            });
            console.log(state.auth.data);
          }
        })
        .catch((err) => {
          console.log("abaixo erro login");
          console.log(err.response.data.erro);
          state.auth.erro = err.response.data.erro;
          state.logged = false;
          state.admin = false;
        });
    } else {
      state.auth.erro = "Campos Vazios";
      setToken("");
    }
  }
  function clearMessages() {
    state.auth.erro = "";
    state.auth.data = "";
  }
  async function Register() {
    state.auth.erro = "";
    state.auth.data = "";
    if (
      state.registerInputs &&
      state.registerInputs.email &&
      state.registerInputs.password &&
      state.registerInputs.cpf
    ) {
      if (state.registerInputs.dtBirth) {
        state.registerInputs.birth_date = datePtBrToUs(
          state.registerInputs.dtBirth
        );
      }

      return await HttpAuth.register(state.registerInputs)
        .then((res) => {
          if (res && res.data) {
            state.auth.data = "Cadastrado com sucesso!";
            console.log(state.auth.data);
          }
        })
        .catch((err) => {
          console.log("abaixo erro 2");
          console.log(err.response.data.erro);
          state.auth.erro = err.response.data.erro;
        });
    } else {
      state.auth.erro = "Campos Vazios";
      if (state.registerInputs.birth_date) {
        state.registerInputs.birth_date = dateUsToPtBr(
          state.registerInputs.birth_date
        );
      }
      setToken("");
    }
  }
  async function isLogged() {
    if (localStorage.getItem("token") !== state.auth.token) {
      let token: string;
      if (
        localStorage.getItem("token") != "null" ||
        localStorage.getItem("token") != "undefined" ||
        localStorage.getItem("token") != null ||
        localStorage.getItem("token") != undefined
      ) {
        token = String(localStorage.getItem("token"));
        state.logged = true;
      } else {
        token = "";
        state.logged = false;
      }

      await setToken(token).then(() => {
        if (state.auth.token == "") {
          state.auth.erro = "Erro ao fazer login";
          return false;
        } else {
          return true;
        }
      });
    }
    if (
      !state.auth ||
      !state.auth.token ||
      state.auth.token == "" ||
      state.auth.token == undefined ||
      state.auth.token == "undefined" ||
      state.auth.token == "null" ||
      state.auth.token == null ||
      state.auth.token.length == 0
    ) {
      return false;
    } else if (state.auth && state.auth.token !== "") {
      return true;
    }
  }
  async function isAdmin() {
    return await isLogged().then(async (res) => {
      const userID = await getUserID();
      if (res) {
        if (userID == 2 || userID == 10) {
          state.admin = true;
          return true;
        } else {
          return false;
        }
      } else {
        false;
      }
    });
  }
  async function setToken(value: string) {
    localStorage.setItem("token", value);
    state.auth.token = value;
    if (value) {
      state.auth.erro = "";
      return true;
    } else {
      return false;
    }
  }
  function Logout() {
    setToken("").then(() => {
      state.admin = false;
      state.logged = false;
      router.push({ name: "Login" });
    });
  }
  async function getUserID() {
    return await HttpAuth.getUser()
      .then((res) => {
        if (res) {
          return res.data.data.ID;
        }
      })
      .catch((err) => {
        console.log("abaixo erro login");
        console.log(err.response.data.erro);
      });
  }
  return {
    ...toRefs(state),
    Logout,
    Login,
    isLogged,
    Register,
    clearMessages,
    isAdmin,
  };
};
