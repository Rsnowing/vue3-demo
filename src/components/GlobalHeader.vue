<template>
  <nav class="navbar bg-primary navbar-dark mb-4 justify-content-between">
    <a class="navbar-brand" href="#">必问</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">登录</a></li>
      <li class="list-inline-item"><a href="#" class="btn btn-outline-light my-2">注册</a></li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好 ${user.name}`">
          <DropdownItem> <a class="dropdown-item" href="#">新建文章</a></DropdownItem>
          <DropdownItem disabled> <a class="dropdown-item" href="#">修改资料</a></DropdownItem>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Dropdown from './Dropdown.vue';
import DropdownItem from './DropdownItem.vue';
export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}
export default defineComponent({
  name: 'GlobalHeader',
  components: { Dropdown, DropdownItem },
  props: {
    user: {
      required: true,
      type: Object as PropType<UserProps[]>
    }
  }
});
</script>

<style lang="scss" scoped></style>
