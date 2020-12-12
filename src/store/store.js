import Vue from "vue";
import Vuex from "vuex";
import SideMenuData from "@/config/menu.config.json";
import SpecialList from "@/config/special.list.json";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mapboxmap: null, // 地图对象
    mapFirstLoaded: false, // 初次load完成，在此之后可以向地图中加载数据
    SideMenuData: SideMenuData,
    SpecialList: SpecialList,
  },
  // 推荐使用mutations变更数据
  mutations: {
    setMap(state, mapboxmap) {
      state.mapboxmap = mapboxmap;
    },
    setMapLoadedStatue(state) {
      state.mapFirstLoaded = true;
    },
  },
  actions: {
    // addAsync(contest,step){
    //     setTimeout(()=>{
    //         contest.commit('increment',step)
    //     },1000)
    // }
  },
});
