<template>
  <div class="home">
    <div class="filters">1</div>

    <PostComponent />
    <div class="info">3</div>
  </div>
</template>

<script>
import PostComponent from "../components/posts/PostComponent.vue";
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
  },
};
</script>
