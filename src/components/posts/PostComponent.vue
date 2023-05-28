<template>
  <div class="posts">
    <div v-for="post in posts" :key="post.id" class="post">
      <div class="post-header">
        <div class="post-title">{{ postTitleHandler(post) }}</div>
        <div class="post-favorite">{{ post.userId }}</div>
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
import { mapGetters } from "vuex";
export default {
  methods: {
    postTitleHandler({ title, id }) {
      return id + ". " + title;
    },
    postStatusHandler({ completed }) {
      return `Status: ${completed ? "Completed" : "Uncompleted"}`;
    },
    postUserIdHandler({ userId }) {
      return `User id: ${userId}`;
    },
  },
  computed: {
    ...mapGetters(["posts"]),
  },
};
</script>

<style></style>
