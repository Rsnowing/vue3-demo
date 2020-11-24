<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn btn-outline-light my-2 dropdown-toggle" @click="handleToggle">{{ title }}</a>
    <ul class="dropdown-menu" style="display: block" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import UseClickOutside from '@/hooks/useClickOutside';
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      required: true,
      type: String
    }
  },
  setup() {
    const isOpen = ref(false);

    const handleToggle = () => {
      isOpen.value = !isOpen.value;
    };

    const dropdownRef = ref<null | HTMLElement>(null);
    const isClickOutside = UseClickOutside(dropdownRef);
    watch(isClickOutside, val => {
      console.log(val, isClickOutside);
      if (isOpen.value && val) {
        isOpen.value = false;
      }
    });

    return {
      isOpen,
      handleToggle,
      dropdownRef // 返回的字段值需要与dom上设置的ref的值一样
    };
  }
});
</script>

<style lang="scss" scoped></style>
