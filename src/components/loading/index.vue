<template>
  <teleport to="#loading">
    <div
      class="d-flex justify-content-center align-items-center h-100 w-100 loading-container"
      :style="{ backgroundColor: background || '' }"
    >
      <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">{{ text || 'loading' }}</span>
        </div>
        <p v-if="text" class="text-primary small">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useDomCreate from '@/hooks/useDomCreate';
export default defineComponent({
  name: 'Loading',
  props: {
    text: String,
    background: String
  },

  setup() {
    useDomCreate('loading');
  }
});
</script>

<style lang="scss" scoped>
.loading-container {
  background: rgba(255, 255, 255, 0.5);
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
