<template>
  <div class="container px-0">
    {{ name }}
    <global-header :user="user"></global-header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader from '@/components/GlobalHeader.vue';
import Footer from './components/Footer.vue';
import { useStore } from 'vuex';
import { GlobalDataProps } from './store';
import { getColumnList } from '@/api/column';

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Footer
  },
  setup() {
    const store = useStore<GlobalDataProps>(); // 让返回值变成GlobalDataProps泛型
    const user = computed(() => store.state.user);
    const getList = async () => {
      try {
        const res = await getColumnList({ currentPage: 1, pageSize: 10 });
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    getList();
    return {
      user
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
