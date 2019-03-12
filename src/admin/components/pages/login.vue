<template lang="pug">
  .login
    .login__content
      form.login__form(@submit.prevent="login")
        .login__form-title Авторизация
        button.login__form-close
        .login__row
          app-input(
            title="Логин"
            icon="person"
            v-model="user.name"
          )
        .login__row
          app-input(
            title="Пароль"
            icon="person"
            v-model="user.password"
          )
        .login__btn
          button(type="submit").login__send-data Отправить
</template>

<script>
import { mapActions } from "vuex";
import {
  setTokenToLocalStorage,
  setAuthHttpHeaderToAxios
} from "@/helpers/token.js";
import axiosInstance from "@/requests.js";

export default {
  components: {
    appInput: () => import("components/input.vue")
  },
  data() {
    return {
      user: {
        name: "admin",
        password: "admin"
      }
    };
  },
  methods: {
    ...mapActions("user", ["loginUser"]),
    async login() {
      try {
        const response = await this.loginUser(this.user);
        const token = response.data.token;
        setTokenToLocalStorage(token);
        setAuthHttpHeaderToAxios(axiosInstance, token);

        this.$router.replace("/");
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>

<style lang="postcss">
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("~images/bg/admin.jpg") center center / cover no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $text-color;
  }
}

.login__content {
  position: relative;
}

.login__row {
  margin-bottom: 25px;
}

.login__btn {
  display: flex;
  width: 100%;
  padding: 0 5%;
  justify-content: center;
}

.login__send-data {
  width: 100%;
  padding: 27px;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-radius: 40px 0 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
}

.login__form {
  width: 600px;
  background: #fff;
  padding: 40px;
}
</style>


