 
<template>
<div id="mapboxele"></div>
</template>

<script>
import   {createMap} from "./maputil.js";

export default {
  props: {
    mapOpts: null
  },
  data() {
    return {
      mapboxmap: null
    };
  },

  mounted() {
  
    if(!this.mapboxmap && this.mapOpts){
       this.mapboxmap =  createMap(this.mapOpts);
       this.mapboxmap.on('load',(e)=>{
           this.$emit('mapload',this.mapboxmap);
       })
    }
    
  }
 
};
</script>
<style lang='less' scoped>

  


</style>