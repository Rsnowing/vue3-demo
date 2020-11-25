<template>
  <div class="container px-0">
    <global-header :user="user"></global-header>
    <ValidateForm @submit="submitForm">
      <div class="form-group">
        <label class="form-label">账号</label>
        <ValidateInput :rules="accountRules" v-model="email" placeholder="账号" type="text"></ValidateInput>
      </div>
      <div class="form-group">
        <label class="form-label">密码</label>
        <ValidateInput :rules="passwordRules" v-model="password" placeholder="密码" type="password"></ValidateInput>
      </div>
    </ValidateForm>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, { ColumnProps } from './components/ColumnList.vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue';
import ValidateInput, { RulesProp } from './components/ValidateInput.vue';
import ValidateForm from './components/ValidateForm.vue';

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
    ValidateInput,
    ValidateForm
  },
  setup() {
    const accountRules: RulesProp = [
      { type: 'required', message: '请输入邮箱地址' },
      { type: 'email', message: '请输入正确的邮箱地址' }
    ];
    const passwordRules: RulesProp = [{ type: 'required', message: '请输入密码' }];
    const email = ref('');
    const password = ref('');

    const submitForm = (val: boolean) => {
      console.log(val);
    };
    return {
      list: testData,
      user,
      accountRules,
      passwordRules,
      email,
      submitForm,
      password
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
