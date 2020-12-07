<!--  -->
<template>
	<div class="content">
		<div class="group-item" v-for="(item, findex) in menuData" :key="findex">
			<div class="item-header" @click="fnodeClick(findex)">
				<div class="left">
					<a-icon type="global" />
					<div class="title">{{ item.title }}</div>
				</div>
				<div class="right">
					<a-icon v-if="item.open" type="down" />
					<a-icon v-else type="up" />
				</div>
			</div>
			<div class="group-list" v-if="item.open">
				<div
					class="item"
					v-for="(jtem, cindex) in item.children"
					:key="cindex"
					:class="{ hovered: jtem.hovered }"
					@mouseenter="mouseEnter(findex, cindex)"
					@mouseleave="mouseLeave(findex, cindex)"
				>
					<img :src="jtem.thumbnail" />
					<span> {{ jtem.title }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
export default {
	props: {
		menuData: null,
	},
	data() {
		return {
			//  menuData:[]
		};
	},

	//   components: {},

	mounted() {},
	methods: {
		fnodeClick(findex) {
			let item = this.menuData[findex];
			item.open = !item.open;
			Vue.set(this.menuData, findex, item);
		},
		mouseEnter(findex, cindex) {
			this.menuData[findex].children[cindex].hovered = true;
			Vue.set(this.menuData[findex].children, cindex,this.menuData[findex].children[cindex]);
		},
		mouseLeave(findex, cindex) {
			this.menuData[findex].children[cindex].hovered = false;
	       	Vue.set(this.menuData[findex].children, cindex,this.menuData[findex].children[cindex]);
		},
	},
};
</script>
<style lang="less" scoped>
.content {
	width: 100%;
	height: 100%;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	.group-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		.item-header {
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
			.left {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: start;
				.title {
					margin-left: 10px;
				}
			}
			.right {
				flex: 1;
				display: flex;
				justify-content: flex-end;
			}
		}
		.group-list {
			padding: 20px;
			display: grid;
			grid-row-gap: 15px;
			grid-column-gap: 15px;
			grid-template-columns: 1fr 1fr;
			.item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
                cursor: pointer;
                  box-sizing: border-box;
				span {
					margin-top: 5px;
                }
                img{
                      width: 120px;
                height: 70px;
                       border: 1px solid #202932;
                }
			}
			.hovered {
                font-weight:bold;
                img{
                    
                    display: flex;
                      box-sizing: border-box;
                       border: 3px solid #1077e9;
  
                }
                    
			}
		}
	}
}
</style>
