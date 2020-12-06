 
<template>
 <SideMenu v-if="menuData" :menuData="menuData" ></SideMenu>
</template>

<script>
 import SideMenu from './SideMenu.vue';
 import  SideMenuData from '@/config/menu.config.json';
 import {cloneDeep} from 'lodash';
export default {
    components:{
         SideMenu
    },
  data () {
    return {
        menuData:null
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

//   methods: {}
}

</script>
<style lang='scss' scoped>
</style>