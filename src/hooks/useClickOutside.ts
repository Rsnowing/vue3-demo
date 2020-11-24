import { ref, onMounted, onUnmounted, Ref } from 'vue';
/**
 * @description 是否点击元素外的区域
 * @param elementRef
 */
// 泛型
export default function useClickOutside(elementRef: Ref<null | HTMLElement>) {
  const isClickOutside = ref(false);

  const handler = (e: MouseEvent) => {
    const dom = elementRef.value;
    if (dom) {
      // 类型断言
      if (dom.contains(e.target as HTMLElement)) {
        isClickOutside.value = false;
      } else {
        isClickOutside.value = true;
      }
    }
  };

  onMounted(() => {
    document.addEventListener('click', handler);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });

  return isClickOutside;
}
