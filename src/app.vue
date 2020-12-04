<template>
  <div id="app">
    <img :src="logo" alt="logo" />
    <div class="message">
      {{ msg }}
    </div>
  </div>
</template>
<script>
import logo from "./images/logo.jpg";
export default {
  name: "app",
  data() {
    return {
      logo: logo,
      msg: "hello webpack vue !!"
    };
  }
};
</script>
 <!--   style 没用 -->
<style lang="less" scoped>

 
.message {
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  
}
</style>>

 
