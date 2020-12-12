import Vue from 'vue';
import './styles/main.css';
import App from './app.vue';
import router from './router';
// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from './store/store'

Vue.config.productionTip = false;
// Vue.use(Antd);
import { Form, Input, Icon, Button, message } from 'ant-design-vue';
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Button);
Vue.prototype.$message = message;


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');