import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filePopup from '@/components/picUpl/filePopup'
import articleList from '@/components/Article/articleList'
import adarticleList from '@/components/Article/adarticleList'
import myarticleList from '@/components/Article/myarticleList'
import articleList2 from '@/components/Article/articleList2'
import searchList from '@/components/Article/searchList'
import adList from '@/components/Article/adList'
// import axios from 'axios';
// import VueAxios from 'vue-axios'

import Vant from 'vant';
import 'vant/lib/index.less';

Vue.use(Vant);
// Vue.use(VueAxios, axios);
Vue.config.productionTip = false

Vue.component("filePopup", filePopup);
Vue.component("articleList", articleList);
Vue.component("adarticleList", adarticleList);
Vue.component("myarticleList", myarticleList);
Vue.component("articleList2", articleList2);
Vue.component("searchList", searchList);
Vue.component("adList", adList);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
