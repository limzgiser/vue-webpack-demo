 
<template>
   <div class="header">
    <div class="left">
      <span>
        场景专题
      </span>
    </div>
    <div class="right">
      <span (click)="clear()" v-if="selectItemNode">清除</span> 
        <span v-if="isshow" class="toogle" @click="toogle()">收起</span>
        <span v-else class="toogle" @click="toogle()">展开</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        isshow : true,
        selectItemNode:false
    };
  },

  methods: {
        toogle() {
            this.isshow = !this.isshow;
            this.$emit('switchClick',this.isshow);
        }
        ,
        clear(){

        }
  }
}

</script>
<style lang='less' scoped>
.header {
    width: 100%;
    height: 40px;
    background: linear-gradient(to right, #005ccd, #0092de);
    display: flex;
    color: #ffffff;
    align-items: center;
    justify-content: space-between;
    pointer-events: all;
    padding: 0 10px;
    .left {
        padding-left: 6px;
        height: 15px;
        line-height: 15px;
        border-left: 4px solid #fabd00;
    }
    .right {
        span {
            cursor: pointer;
        }
    }
    .toogle {
        margin-left: 10px;
        ;
    }
}
</style>