<template>
  <div class="flex flex-wrap justify-center mt-20">
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
      <Login></Login>
      <Cadastro></Cadastro>

      <div class="flex flex-wrap row-space justify-center mt-4">
        <div class="w-auto text-center mr-8">
          <div class="icon-social text-primary text-3xl text-white">
            <a target="_blank" :href="linkWhatsApp">
              <h5>
                <i class="bg-white-social fab fa-whatsapp"></i>
              </h5>
            </a>
          </div>
        </div>
        <div class="w-auto text-center mr-8">
          <div class="icon-social text-primary text-3xl text-white">
            <a target="_blank" :href="linkWhatsApp">
              <h5>
                <i class="bg-white-social fab fa-facebook-f"></i>
              </h5>
            </a>
          </div>
        </div>
        <div class="w-auto text-center mr-8">
          <div class="icon-social text-primary text-3xl text-white">
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
import { inject, onBeforeMount } from "vue";
import Cadastro from "./cadastro.vue";
import Login from "./login.vue";
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  components: {
    Cadastro,
    Login,
  },
  setup() {
    const useInstitucional = inject("institucional");
    const { bgImagem, mobile, linkWhatsApp, isMobile } = useInstitucional;

    onBeforeMount(() => {
      isMobile();
      document.body.style.background =
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,42,120,1) 35%, rgba(0,56,161,1) 100%)";
      document.body.style.height = window.innerHeight;
      console.log(window.innerHeight);
    });

    return { bgImagem, mobile, linkWhatsApp, isMobile };
  },
};
</script>
