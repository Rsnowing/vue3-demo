<template>
  <ValidateForm @submit="confirm">
    <div class="form-group">
      <label class="form-label">账号</label>
      <ValidateInput :rules="accountRules" v-model="email" placeholder="账号" type="text"></ValidateInput>
    </div>
    <div class="form-group">
      <label class="form-label">密码</label>
      <ValidateInput :rules="passwordRules" v-model="password" placeholder="密码" type="password"></ValidateInput>
    </div>
  </ValidateForm>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ValidateInput, { RulesProp } from '@/components/ValidateInput.vue';
import ValidateForm from '@/components/ValidateForm.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const accountRules: RulesProp = [
      { type: 'required', message: '请输入邮箱地址' },
      { type: 'email', message: '请输入正确的邮箱地址' }
    ];
    const passwordRules: RulesProp = [{ type: 'required', message: '请输入密码' }];
    const email = ref('');
    const password = ref('');

    const confirm = (valid: boolean) => {
      if (valid) {
        router.push({ path: '/' });
        store.commit('login');
      }
    };
    return {
      accountRules,
      passwordRules,
      email,
      confirm,
      password
    };
  }
});
</script>

<style lang="scss" scoped></style>
