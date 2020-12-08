
<template>
<div class = "container">
 <MapSwitch @itemClick = "mapSwitchClick"></MapSwitch>

</div>

</template>

<script>
import MapSwitch from './MapSwitch.vue';
export default {
    components:{
        MapSwitch
    },
  data () {
    return {
    };
  },
  methods:{
    mapSwitchClick(item){
      console.log(item)
    }
  }
}

</script>
<style lang='less' scoped>
.container{
  display:flex;
  flex-direction: column;
}
</style>