<!--  -->
<template>
  <div class="main-home">
  <HomeHeader/>
  <MapboxMap :mapOpts="mapOpts" @mapload="mapload">
 
  </MapboxMap>
  <div class="side-menu">
      <SideMenuControl/>
  </div>

  </div>
</template>

<script>
 
  import  HomeHeader  from "@/components/HomeHeader/HomeHeader.vue";
  import MapboxMap from '@/components/MapboxMap/MapboxMap.vue';
  import SideMenuControl from '@/components/SideMenu/SideMenuControl.vue'
  import {baseMapUrl} from '../config';
 
export default {
 components: {
    HomeHeader,
    MapboxMap,
    SideMenuControl
  },
  data () {
    return {
      mapOpts:{
      container: "mapboxele", // container id
      style: (baseMapUrl ==""? 'mapbox://styles/mapbox/dark-v10':baseMapUrl),  // style URL
      center: [121, 31], // starting position [lng, lat]
      zoom: 9 // starting zoom
    }
    };
  },
  methods:{
      mapload(mapboxmap) {
        console.log(mapboxmap.version);
    },
  }

}

</script>
<style lang='less' scoped>
  .main-home{
    width: 100%;
    height: 100%;
  }
  .side-menu{
    position: absolute;
    top: 80px;
    left: 20px;
    width: 300px ;
    max-height:calc(100% - 100px) ;
    background: #000c17;
    overflow: auto;
  }

</style>

 
 