<template>
  <teleport to="#message">
    <div
      class="alert message-info fixed-top w-50 mx-auto d-flex justify-content-between mt-2"
      :class="classObject"
      v-if="visible"
    >
      <span>{{ message }}</span>
      <span type="button" class="close" @click.prevent="close">&times;</span>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
export type MessageType = 'success' | 'error' | 'default';
import useDomCreate from '@/hooks/useDomCreate';
export default defineComponent({
  name: 'Message',
  props: {
    message: {
      type: String,
      default: '错误'
    },
    type: {
      type: String as PropType<MessageType>,
      default: 'default'
    }
  },
  emits: ['close'],
  setup(props, context) {
    useDomCreate('message');
    const visible = ref(true);
    const classObject = {
      'alert-success': props.type === 'success',
      'alert-danger': props.type === 'error',
      'alert-primary': props.type === 'default'
    };

    const close = () => {
      visible.value = false;
      context.emit('close');
    };

    return {
      visible,
      classObject,
      close
    };
  }
});
</script>

<style lang="scss" scoped></style>
