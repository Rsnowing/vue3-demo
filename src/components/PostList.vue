<template>
  <div class="post-list">
    <article v-for="post in posts" :key="post._id" class="card mb-3 shadow-sm">
      <div class="card-body">
        <h4>
          <router-link :to="`/posts/${post._id}/`">{{ post.title }}</router-link>
        </h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-4">
            <img :src="post.image.url" :alt="post.title" class="rounded-lg w-100" />
          </div>
          <!-- <p :class="{ 'col-8': post.image }" class="text-muted">{{ post.excerpt }}</p> -->
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string;
  fitUrl?: string;
}
export interface PostProps {
  _id: number;
  title: string;
  content: string;
  image?: ImageProps;
  createdAt: string;
  columnId: number;
}
export default defineComponent({
  name: 'PostList',
  props: {
    list: {
      required: true,
      type: Array as PropType<PostProps[]>
    }
  },
  setup(props) {
    const postList = computed(() => {
      return (
        props.list &&
        props.list.map(post => {
          post.image = {
            url: post.image && post.image.url
          };
          return post;
        })
      );
    });

    return {
      posts: postList
    };
  }
});
</script>

<style scoped>
.post-list h4 a {
  text-decoration: none;
  color: #1a1a1a;
}
.post-list h4 a:hover {
  color: #0d6efd;
}
</style>
