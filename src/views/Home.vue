<!--  -->
<template>
  <div>
  <HomeHeader/>
  <MapboxMap :mapOpts="mapOpts" @mapload="mapload">
 
  </MapboxMap>
 
  </div>
</template>

<script>
 
  import  HomeHeader  from "../components/HomeHeader/HomeHeader.vue";
  import MapboxMap from '../components/MapboxMap/MapboxMap.vue';
  import {baseMapUrl} from '../config';
 
export default {
 components: {
    HomeHeader,
    MapboxMap
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

  #mapboxele{
        width: 100%;
        height: calc(100vh - 60px);
    }
</style>

 
 