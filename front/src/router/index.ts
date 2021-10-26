// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { createRouter, createWebHistory } from "vue-router";

import { AuthMiddleware } from "./middlewares/AuthMiddleware";
import { adminAuthMiddleware } from "./middlewares/adminAuthMiddleware";

import { colorMiddleware } from "./middlewares/colorMiddleware";
const { auth } = AuthMiddleware();

const { authadmin } = adminAuthMiddleware();

const { changeColor } = colorMiddleware();

// import Home from "@/modules/institucional/home.vue";
import Cadastro from "@/modules/clientes/auth/pages/cadastro.vue";
// import FinanceiroIndex from "@/modules/financeiro/pages/FinanceiroIndex.vue";
// import AdicionarConta from "@/modules/financeiro/pages/AdicionarConta.vue";
// import EditarConta from "@/modules/financeiro/pages/EditarConta.vue";
import NotFound from "@/views/layouts/NotFound.vue";
import Login from "@/modules/clientes/auth/pages/login.vue";
import Home from "@/modules/clientes/institucional/home.vue";
import Homeadm from "@/modules/admin/Homeadm.vue";

import Users from "@/modules/admin/user/pages/users.vue";
import EditUser from "@/modules/admin/user/components/editUser.vue";
import LoginAdm from "@/modules/admin/authadm/pages/loginadm.vue";

import EmailResetPassword from "@/modules/clientes/resetpassword/EmailResetPassword.vue";
import ResetPasswordWithToken from "@/modules/clientes/resetpassword/ResetPasswordWithToken.vue";
const routes = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: [auth, changeColor],
  },
  {
    path: "/admin/users",
    name: "Users",
    component: Users,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin/users/edit",
    name: "EditUser",
    component: EditUser,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin",
    name: "Admin",
    component: Homeadm,
    beforeEnter: [authadmin],
  },
  {
    path: "/admin/login",
    name: "LoginAdm",
    component: LoginAdm,
    beforeEnter: [authadmin],
  },

  {
    path: "/inicio",
    name: "Inicio",
    component: Home,
  },
  {
    path: "/cadastro",
    name: "Cadastro",
    component: Cadastro,
    beforeEnter: [changeColor],
  },
  {
    path: "/maquininha",
    name: "Maquininha",
    component: Cadastro,
    beforeEnter: [changeColor],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: [auth, changeColor],
  },

  {
    path: "/resetarsenha",
    name: "Resetarsenha",
    component: EmailResetPassword,
  },

  {
    path: "/resetarsenha/:token",
    name: "ResetarsenhaToken",
    component: ResetPasswordWithToken,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
