<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center" v-if="column">
      <div class="col-3 text-center">
        <img :src="column.avatar && column.avatar.url" :alt="column.title" class="rounded-circle border w-100" />
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
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { GlobalDataProps } from '../store';
import { useStore } from 'vuex';
import PostList from '@/components/PostList.vue';
import { getPostList, getColumnDetail } from '@/api/column';
import { ColumnProps } from '@/components/ColumnList.vue';
export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number;
}
export default defineComponent({
  name: 'ColumnDetail',
  components: { PostList },
  setup() {
    const route = useRoute();
    // const store = useStore<GlobalDataProps>();
    // const column = computed(() => store.getters.getColumnById(curId));
    // const list = computed(() => store.getters.getPostById(curId));
    const column = ref<ColumnProps>();
    const list = ref<PostProps[]>();
    const curId = route.params.id as string;
    const getList = async () => {
      try {
        const res = await getPostList({ id: curId, currentPage: 1, pageSize: 10 });
        list.value = res.data.list;
        console.log(list);
      } catch (e) {
        console.error(e);
      }
    };

    const getDetail = async () => {
      try {
        const res = await getColumnDetail({ id: curId });
        column.value = res.data;
      } catch (e) {
        console.error(e);
      }
    };
    onMounted(async () => {
      getList();
      getDetail();
    });

    return {
      column,
      list
    };
  }
});
</script>

<style lang="scss" scoped></style>
