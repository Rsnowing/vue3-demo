<template>
  <div class="home-page">
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <img src="../assets/callout.svg" alt="callout" class="w-50" />
          <h2 class="font-weight-light">随心写作，自由表达</h2>
          <p><router-link to="/create" class="btn btn-primary my-2">开始写文章</router-link></p>
        </div>
      </div>
    </section>
    <h4 class="font-weight-bold text-center">发现精彩</h4>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
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
export default defineComponent({
  name: 'Home',
  components: { ColumnList },
  setup() {
    return {
      list: testData
    };
  }
});
</script>

<style lang="scss" scoped></style>
