<template>
  <div class="container px-0">
    <global-header :user="user"></global-header>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">账号</label>
        {{ email }}
        <ValidateInput :rules="rules" v-model="email" placeholder="jdskhfnsl"></ValidateInput>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
    </form>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, { ColumnProps } from './components/ColumnList.vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue';
import ValidateInput, { RulesProp } from './components/ValidateInput.vue';
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'hahh',
    description: 'dshdkjsvd后端加'
  },
  {
    id: 2,
    title: 'hahh',
    avatar:
      'https://lh3.googleusercontent.com/QZata3XV8o_Ds74jV9_PsaHBNom7w04fqVGqM12OEJdDsAKLuli-RvTUamUr2dkSyXuHRqTDkZ4=w128-h128-e365-rj-sc0x00ffffff',
    description: 'dshdkjsvd后端加'
  }
];
const user: UserProps = {
  isLogin: true,
  name: '何必问'
};

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const rules: RulesProp = [
      { type: 'required', message: '请输入邮箱地址' },
      { type: 'email', message: '请输入正确的邮箱地址' }
    ];
    const email = ref('');
    return {
      list: testData,
      user,
      rules,
      email
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
