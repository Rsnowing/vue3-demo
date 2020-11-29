<template>
  <div class="row">
    <div v-for="column in columnList" :key="column._id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar && column.avatar.url"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text test-left description">{{ column.description }}</p>
          <router-link class="btn btn-outline-primary" :to="`/column/${column._id}`">进入专栏</router-link>
        </div>
      </div>
    </div>
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

export interface ColumnProps {
  _id: number;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export default defineComponent({
  name: '',
  props: {
    list: {
      required: true,
      type: Array as PropType<ColumnProps[]>,
      default: () => []
    }
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        column.avatar = {
          url: column.avatar && column.avatar.url
        };
        return column;
      });
    });
    return {
      columnList
    };
  }
});
</script>

<style lang="scss" scoped>
.description {
  line-height: 20px;
  height: 60px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: break-all;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
