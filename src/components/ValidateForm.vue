<template>
  <form class="validate-form-contauber">
    <slot name="default"></slot>
    <div class="submit-area">
      <slot name="submit">
        <button type="submit" class="btn btn-primary" @click.prevent="submitForm">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import mitt from 'mitt';
export const emitter = mitt();
type ValidateFunc = () => boolean;

export default defineComponent({
  name: 'ValidateForm',
  emits: ['submit'],
  setup(props, context) {
    let funcArr: ValidateFunc[] = [];

    const submitForm = () => {
      const res = funcArr.map(item => item()).every(result => result);
      context.emit('submit', res);
    };

    const callback = (func?: ValidateFunc) => {
      func && funcArr.push(func);
    };

    emitter.on('form-item-validate', callback);

    onUnmounted(() => {
      emitter.off('form-item-validate', callback);
      funcArr = [];
    });

    return {
      submitForm
    };
  }
});
</script>

<style lang="scss" scoped></style>
