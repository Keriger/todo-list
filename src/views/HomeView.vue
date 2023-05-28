<template>
  <div class="home">
    <PostsFilters />
    <PostComponent />
    <AddPost />
  </div>
</template>

<script>
import PostComponent from "../components/posts//PostComponent.vue";
import PostsFilters from "../components/posts/filters/PostsFilters.vue";
import AddPost from "../components/posts//AddPost.vue";

import { mapActions } from "vuex";
export default {
  name: "HomeView",
  methods: {
    ...mapActions(["getPosts"]),
  },
  mounted() {
    this.getPosts();
  },
  components: {
    PostComponent,
    PostsFilters,
    AddPost,
  },
};
</script>
