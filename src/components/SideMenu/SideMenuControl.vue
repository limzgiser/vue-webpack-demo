 
<template>
<div>
<MenuTitle @switchClick = "titleSwitchClick"></MenuTitle>
 <SideMenu v-if="menuData && showMenuList" :menuData="menuData" ></SideMenu>
</div>

</template>

<script>
 import SideMenu from './SideMenu.vue';
 import  SideMenuData from '@/config/menu.config.json';
 import {cloneDeep} from 'lodash';
 import MenuTitle from './MenuTitle.vue';
export default {
    components:{
         SideMenu,
        MenuTitle
    },
  data () {
    return {
        menuData:null,
        showMenuList:true
    };
  },

//   components: {},

//   computed: {},

   mounted() {
   
      let tmpMenuData = cloneDeep(SideMenuData);
      tmpMenuData.forEach(item => {
          item.children && item.children.forEach(element => {
              element.thumbnail = require('@/assets/images/'+ element.thumbnail );
          });
      });
      this.menuData = tmpMenuData;
   },

   methods: {
     /**
      * 切换显示/隐藏导航列表
      */
     titleSwitchClick(e){
       this.showMenuList = e;
     }
   }
}

</script>
<style lang='scss' scoped>
</style>