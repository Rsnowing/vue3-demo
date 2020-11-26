import { createStore } from 'vuex';
import { testData, testPosts, ColumnProps, PostProps } from './testData';

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
}

export interface GlobalDataProps {
  user: UserProps;
  columns: ColumnProps[];
  posts: PostProps[];
}

const store = createStore<GlobalDataProps>({
  state: {
    user: {
      isLogin: false
    },
    columns: testData,
    posts: testPosts
  },

  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'llhe' };
    },

    createPost(state, columnId) {
      state.posts.push({
        id: new Date().getTime(),
        title: '这是我的第n篇文章',
        content:
          '"this is a new post you Very often we will need to map routes with the given pattern to the same component. For example we may have a User component which should be rendered for all users but with dif..."',
        image:
          'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee1980819f4ae08ac78d458.png?x-oss-process=image/resize,m_fill,m_pad,w_200,h_110',
        createdAt: new Date().toLocaleString(),
        columnId
      });
    }
  },

  actions: {},

  getters: {
    getColumnById: state => {
      return (id: number) => {
        return state.columns.find(item => item.id === id);
      };
    },

    getPostById: state => {
      return (id: number) => {
        return state.posts.filter(item => item.columnId === id);
      };
    }
  }
});

export default store;
