<template>
  <div>建筑用途</div>
</template>

<script>
import { mapState } from "vuex";
import { getSpecialItemsByPath } from "@/utils/menuUtil";
export default {
  data() {
    return {};
  },
  mounted() {
    let path = this.$route.path;
    let items = getSpecialItemsByPath(
      path,
      this.SideMenuData,
      this.SpecialList.spelist
    );
    if (this.mapFirstLoaded) {
      // 直接交互地图
      this.initSpecialLayers(items, this.mapboxmap);
    } else {
      this.mapboxmap.on("load", () => {
        this.initSpecialLayers(items, this.mapboxmap);
      });
    }
  },
  methods: {
    initSpecialLayers(dlist, mapboxmap) {
      console.log(dlist);
      if (Array.isArray(dlist)) {
        dlist.forEach((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((data) => {
              mapboxmap.addMapStyle(data, {
                styleid: "special-map",
              });
            })
            .catch((e) => console.log("Oops, error", e));
        });
      }
    },
  },
  computed: {
    ...mapState(["mapFirstLoaded", "mapboxmap", "SideMenuData", "SpecialList"]),
  },
  destroyed(){
      this.mapboxmap.removeMapStyle('special-map');
  }
};
</script>

<style>
</style>