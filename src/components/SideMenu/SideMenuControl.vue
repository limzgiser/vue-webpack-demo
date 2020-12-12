 
<template>
  <div class="side-menu-container">
    <div class="top">
      <MenuTitle @switchClick="titleSwitchClick"></MenuTitle>
    </div>
    <div class="bottom">
      <SideMenu
        v-if="menuData && showMenuList"
        :menuData="menuData"
        @menuClick="menuClick"
      ></SideMenu>
    </div>
  </div>
</template>

<script>
import SideMenu from "./SideMenu.vue";

import { cloneDeep } from "lodash";
import MenuTitle from "./MenuTitle.vue";
import { mapState } from "vuex";
export default {
  components: {
    SideMenu,
    MenuTitle,
  },
  data() {
    return {
      menuData: null,
      showMenuList: true,
    };
  },
  mounted() {
    let tmpMenuData =   this.$store.state.SideMenuData;
    tmpMenuData.forEach((item) => {
      item.children &&
        item.children.forEach((element) => {
          element.thumbnail = require("@/assets/images/" + element.thumbnail);
        });
    });
    this.menuData = tmpMenuData;
  },

  methods: {
    /**
     * 切换显示/隐藏导航列表
     */
    titleSwitchClick(e) {
      this.showMenuList = e;
    },
    menuClick(item) {
      let { path } = item;
      this.$router.push({ path: `/home/${path}`});
    },
  },
  computed: {
    ...mapState(["mapFirstLoaded", "mapboxmap"]),
  },
};
</script>
<style lang='less' scoped>
.side-menu-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;

  flex-direction: column;
  .top {
    height: 40px;
  }
  .bottom {
    // height:calc(100% - 40px);
    overflow: auto;
  }
}
</style>