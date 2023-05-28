<template>
  <div class="filters">
    <div class="filters-block">
      <div class="filters-title">Фильтры</div>

      <div class="mt-1">
        <form @submit.prevent="submit">
          <div>
            <label for="title">Title:</label>
            <input v-model="filterTitle" type="text" name="title" />
          </div>
          <div class="mt-1">
            <label for="status">Статус:</label>
            <select v-model="form.status" name="status">
              <option
                v-for="option in statusOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <div class="mt-1">
            <label for="user_id">User id:</label>
            <select v-model="form.userId" name="user_id">
              <option
                v-for="option in postsUserId"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </select>
          </div>
          <button class="mt-1" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {},
  data() {
    return {
      statusOptions: [
        {
          value: 0,
          label: "All",
        },
        {
          value: "true",
          label: "Completed",
        },
        {
          value: "false",
          label: "Uncompleted",
        },
        {
          value: 3,
          label: "Favorites",
        },
      ],
      form: {
        status: "0",
        userId: "all",
      },
    };
  },
  methods: {
    ...mapActions(["getPosts"]),
    ...mapMutations(["filterTitleTextEdit"]),
    async submit() {
      this.getPosts(this.form);
    },
  },
  computed: {
    ...mapGetters(["posts", "filterTitleText"]),
    postsUserId() {
      const tmpArray = [];
      const usersId = this.posts
        .filter(({ userId }) => {
          if (tmpArray.indexOf(userId) === -1) {
            tmpArray.push(userId);
            return true;
          }
          return false;
        })
        .map(({ userId }) => ({
          value: userId,
          label: userId,
        }));

      return [
        {
          value: "all",
          label: "All Users",
        },
        ...usersId,
      ];
    },
    filterTitle: {
      get() {
        return this.filterTitleText;
      },
      set(val) {
        this.filterTitleTextEdit(val);
      },
    },
  },
};
</script>

<style></style>
