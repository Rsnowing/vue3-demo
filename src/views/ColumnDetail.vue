<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar && column.avatar.fitUrl" :alt="column.title" class="rounded-circle border w-100" />
      </div>
      <div class="col-9">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <PostList :list="list"></PostList>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { GlobalDataProps } from '../store';
import { useStore } from 'vuex';
import PostList from '@/components/PostList.vue';
export default defineComponent({
  name: 'ColumnDetail',
  components: { PostList },
  setup() {
    const route = useRoute();
    const store = useStore<GlobalDataProps>();
    const curId = +route.params.id;
    const column = computed(() => store.getters.getColumnById(curId));
    const list = computed(() => store.getters.getPostById(curId));
    console.log(column);
    return {
      column,
      list
    };
  }
});
</script>

<style lang="scss" scoped></style>
