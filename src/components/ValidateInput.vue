<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="handleInput"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error">{{ inputRef.message }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from 'vue';
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
interface RuleProp {
  type: 'required' | 'email';
  message: string;
}
export type RulesProp = RuleProp[];
// v-model 实现： 接收modelValue prop, 修改的时候触发update:modelValue方法
// vue3 v-model 支持多个动态绑定
export default defineComponent({
  name: 'ValidateInput',
  inheritAttrs: false,
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    });

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case 'required':
              passed = !!inputRef.val.trim();
              break;
            case 'email':
              passed = emailReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
      }
    };

    const handleInput = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      context.emit('update:modelValue', targetValue);
    };

    return {
      validateInput,
      inputRef,
      handleInput
    };
  }
});
</script>

<style lang="scss" scoped></style>
