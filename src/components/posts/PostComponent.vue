<template>
  <div class="posts">
    <div v-for="post in postFilters" :key="post.id" class="post">
      <div class="post-header">
        <div class="post-title">{{ postTitleHandler(post) }}</div>
        <div @click="changeFavoriteStatus(post)" class="post-favorite">
          {{ postsFavoritesHandler(post) }}
        </div>
      </div>
      <div class="post-body">
        Info:
        <div class="">
          {{ postUserIdHandler(post) }}
        </div>
        <div class="">
          {{ postStatusHandler(post) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["changeFavoriteStatus"]),
    postTitleHandler({ title, id }) {
      return id + ". " + title;
    },
    postStatusHandler({ completed }) {
      return `Status: ${completed ? "Completed" : "Uncompleted"}`;
    },
    postUserIdHandler({ userId }) {
      return `User id: ${userId}`;
    },
    postsFavoritesHandler({ favorites }) {
      return favorites ? "⭐️" : "☆";
    },
  },
  computed: {
    ...mapGetters(["posts", "filterTitleText"]),
    postFilters() {
      return this.posts.filter(
        (data) =>
          !this.filterTitleText ||
          data.title.toLowerCase().includes(this.filterTitleText.toLowerCase())
      );
    },
  },
};
</script>

<style></style>
