<template>
  <div>
    <div class="add-post">
      <div class="add-post-block">
        <div class="add-post-block__title">Add Element</div>

        <div class="mt-1">
          <form @submit.prevent="submit">
            <div>
              <label for="title">User id:</label>
              <input
                v-model="form.userId"
                :min="1"
                type="number"
                name="title"
              />
            </div>
            <div>
              <label for="title">Title:</label>
              <input v-model="form.title" type="text" name="title" />
            </div>

            <button class="mt-1" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div class="logout" style="">
      <button @click="logOut" class="logout-btn">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        userId: 1,
        title: "",
        favorites: false,
      },
    };
  },
  methods: {
    ...mapActions(["createPost", "logout"]),
    logOut() {
      this.logout();
      this.$router.push("/login");
    },
    submit() {
      this.createPost(this.form);
    },
  },
};
</script>

<style></style>
