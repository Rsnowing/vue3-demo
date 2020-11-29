<template>
  <div>
    <Loading v-if="isLoading"></Loading>
    <!-- <Message></Message> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Loading from '@/components/loading/index.vue';
// import Message from '@/components/message/index.vue';
import message from '@/components/message';
export default defineComponent({
  name: 'Test',
  components: { Loading },
  setup() {
    const isLoading = ref(true);
    onMounted(() => {
      setTimeout(() => {
        isLoading.value = false;
      }, 2000);

      message({ message: '我是一条信息', type: 'error' });
    });
    return {
      isLoading
    };
  }
});
</script>

<style lang="scss" scoped></style>
