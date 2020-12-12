<!--  -->
<template>
  <div class="main-home">
    <HomeHeader />
    <MapboxMap :mapOpts="mapOpts" @createMap="createMap"> </MapboxMap>
    <div class="side-menu">
      <SideMenuControl />
    </div>
    <div class="switch-menu">
      <MapSwitchControl></MapSwitchControl>
    </div>
    <div class="child-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader/HomeHeader.vue";
import MapboxMap from "@/components/MapboxMap/MapboxMap.vue";
import SideMenuControl from "@/components/SideMenu/SideMenuControl.vue";
import MapSwitchControl from "@/components/MapSwitch/MapSwitchControl.vue";
import { baseMapUrl } from "../config";

export default {
  components: {
    HomeHeader,
    MapboxMap,
    SideMenuControl,
    MapSwitchControl,
  },
  data() {
    return {
      mapOpts: {
        container: "mapboxele", // container id
        style:
          baseMapUrl == "" ? "mapbox://styles/mapbox/dark-v10" : baseMapUrl, // style URL
        center: [121, 31], // starting position [lng, lat]
        zoom: 9, // starting zoom
      },
    };
  },
  methods: {
    createMap(mapboxmap) {
      this.$store.commit("setMap", mapboxmap);
      mapboxmap.on("load", () => {
        this.$store.commit("setMapLoadedStatue");
      });
    },
    storeTest() {
      // 处罚mutation
      //	this.$store.commit('increment',12);
    },
    storeTest2() {
      // 触发action
      // this.$store.dispatch('addAsync',12);
    },
  },
};
</script>
<style lang="less" scoped>
.main-home {
  width: 100%;
  height: 100%;
  position: relative;
  .side-menu {
    position: absolute;
    top: 80px;
    left: 20px;
    width: 300px;
    height: calc(100% - 100px);
  }
  .switch-menu {
    position: absolute;
    top: 80px;
    right: 20px;
  }
  .child-view {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: calc(100% - 60);
    pointer-events: none;
  }
}
</style>
