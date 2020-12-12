 
<template>
  <div id="mapboxele"></div>
</template>

<script>
import { createMap } from "./maputil.js";

export default {
  props: {
    mapOpts: null,
  },
  data() {
    return {
      mapboxmap: null,
    };
  },

  mounted() {
    if (!this.mapboxmap) {
      this.mapboxmap = createMap(this.mapOpts);
    }
    this.$emit("createMap", this.mapboxmap);
  },
};
</script>
<style lang='less' scoped>
#mapboxele {
  width: 100%;
  height: calc(100vh - 60px);
}
</style>