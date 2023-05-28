<template>
  <div class="login">
    <div class="login-block">
      <div class="login-block__header">Log in</div>
      <form class="login-form" @submit.prevent="submit">
        <div>
          <input
            placeholder="Username"
            type="text"
            v-model="form.username"
            pattern="[a-zA-Z]+"
          />
        </div>
        <div>
          <input placeholder="Phone number" v-model="form.phone" />
        </div>
        <button class="login-form__btn" type="submit">Login</button>
        <div v-if="showError" id="error">login error</div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  components: {},
  data() {
    return {
      form: {
        username: "",
        phone: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["login"]),
    async submit() {
      try {
        await this.login(this.form);
        this.$router.push("/");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style></style>
