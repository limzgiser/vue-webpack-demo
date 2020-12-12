<template>
	<!-- <div id="app">
    <img :src="logo" alt="logo" />
    <div class="message">
      {{ msg }}
    </div>
  </div> -->
	<router-view></router-view>
</template>
<script>
import logo from './assets/images/logo.jpg';
export default {
	name: 'app',
	data() {
		return {
			logo: logo,
			msg: 'hello webpack vue !!',
		};
	},
};
</script>
 
<style lang="less" scoped>
// .message {
// 	position: absolute;
// 	top: 50px;
// 	left: 50%;
// 	transform: translate(-50%);
// }
</style>
