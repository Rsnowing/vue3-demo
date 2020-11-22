<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, {ColumnProps} from './components/ColumnList.vue';
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'hahh',
    // avatar: 'https://lh3.googleusercontent.com/QZata3XV8o_Ds74jV9_PsaHBNom7w04fqVGqM12OEJdDsAKLuli-RvTUamUr2dkSyXuHRqTDkZ4=w128-h128-e365-rj-sc0x00ffffff',
    description: 'dshdkjsvd后端加'
  },
  {
    id: 2,
    title: 'hahh',
    avatar: 'https://lh3.googleusercontent.com/QZata3XV8o_Ds74jV9_PsaHBNom7w04fqVGqM12OEJdDsAKLuli-RvTUamUr2dkSyXuHRqTDkZ4=w128-h128-e365-rj-sc0x00ffffff',
    description: 'dshdkjsvd后端加'
  }
]
export default defineComponent({
  name: 'App',
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData
    }
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
  margin-top: 60px;
}
</style>
