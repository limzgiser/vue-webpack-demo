 
<template>
  <div class="main">
    <img :src="require('../../images/header_light.png')" />
    <a class="user" @click="showLogoout()">
      Mina
    </a>

    <div class="ext-login" v-if="showExtProp">
      <a-icon type="logout" />
      <span @click="logoOut()">退出</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data() {
    return {
      showExtProp:false,
    };
  },
  methods:{
     showLogoout() {
      this.showExtProp = !this.showExtProp;
    },
    logoOut(){
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
<style lang='less' scoped>
.main {
  padding-left: 10px;
  height: 60px;
  width: 100%;
  background: linear-gradient(90deg, #005ccd, #0092de);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .user {
    display: flex;
    color: #fff;
    width: 120px;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  .ext-login {
    position: absolute;
    height: 40px;
    top: 60px;
    right: 0;
    width: 120px;
    background: #fff;
    border-left: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    border-radius: 0 0 0 10px;
    color: #333;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    span {
      margin-left: 5px;
    }
  }
}
</style>