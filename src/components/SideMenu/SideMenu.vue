<!--  -->
<template>
	<div class="content">
		<div class="group-item" v-for="(item, index) in menuData" :key="index">
			<div class="item-header" @click="fnodeClick(item)">
				<div class="left">
					<a-icon type="global" />
					<div class="title">{{ item.title }}</div>
				</div>
                <div class="right">
                    <a-icon type="down" />
                </div>
			 
			</div>
            <div class="group-list">
                <div class="item" v-for="(jtem, index) in item.children" :key="index">
                       <img :src="jtem.thumbnail" />
                       <span>  {{jtem.title}}</span>
                  
                </div>
            </div>
		</div>
	</div>

</template>

<script>
export default {
  props: {
    menuData: null
  },
	data() {
		return {
          //  menuData:[]
        };
	},

	//   components: {},

   

  mounted(){
        
 
  },

 
};
</script>
<style lang="less" scoped>
.content{
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    .group-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        .item-header{
            display: flex;
            height: 100%;
            width: 100%;
            color: #fff;
            height: 48px;
            padding: 0 24px;
            background: #001529;
            cursor: pointer;
            align-items: center;
            justify-content: space-between;
            .left{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: start;
                .title{
                    margin-left: 10px;
                }
            }
            .right{
                flex:1;
                display: flex;
                justify-content: flex-end;
            }
            
        }
        .group-list{
            padding: 20px;
            display: grid;
             grid-row-gap: 15px;
             grid-column-gap: 15px;
              grid-template-columns: 1fr 1fr;
              .item{
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  cursor: pointer;
                  span{
                      margin-top: 5px;
                  }
              }
 
        }
    }
}
</style>
