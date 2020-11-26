<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <validate-form @submit="confirm">
      <div class="mb-3">
        <label class="form-label">文章标题：</label>
        <validate-input
          :rules="[{ type: 'required', message: '请输入标题' }]"
          v-model="title"
          placeholder="请输入文章标题"
          type="text"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情：</label>
        <validate-input
          rows="10"
          tag="textarea"
          placeholder="请输入文章详情"
          :rules="[{ type: 'required', message: '请输入文章详情' }]"
          v-model="content"
        />
      </div>
      <template #submit>
        <div class="btn btn-primary btn-large">创建文章</div>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { GlobalDataProps } from '../store';
import ValidateInput from '@/components/ValidateInput.vue';
import ValidateForm from '@/components/ValidateForm.vue';
export default defineComponent({
  name: 'CreatePost',
  components: { ValidateInput, ValidateForm },
  setup() {
    const store = useStore<GlobalDataProps>();
    const router = useRouter();
    const title = ref('');
    const content = ref('');
    const confirm = (valid: boolean) => {
      if (valid) {
        store.commit('createPost', 1);
        router.push('/');
      }
    };

    return {
      title,
      content,
      confirm
    };
  }
});
</script>

<style>
.create-post-page .file-upload-container {
  height: 200px;
  cursor: pointer;
  overflow: hidden;
}
.create-post-page .file-upload-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.uploaded-area {
  position: relative;
}
.uploaded-area:hover h3 {
  display: block;
}
.uploaded-area h3 {
  display: none;
  position: absolute;
  color: #999;
  text-align: center;
  width: 100%;
  top: 50%;
}
</style>
