 
<template>
<div class="side-menu-container">
  <div class="top">
 <MenuTitle @switchClick = "titleSwitchClick"></MenuTitle>
  </div>
  <div class="bottom">
 <SideMenu v-if="menuData && showMenuList" :menuData="menuData" ></SideMenu> 
  </div>

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
<style lang='less' scoped>
.side-menu-container{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
background: #000c17;
  flex-direction: column;
  .top{
    height: 40px;
  }
  .bottom{
 
    height:calc(100% - 40px);
 
        overflow: auto;
  }

}
</style>