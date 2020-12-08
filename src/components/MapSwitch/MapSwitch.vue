<template>
	<div class="map-switch">
		<div
			class="item"
			:class="{ active: activeIndex == index }"
			v-for="(item, index) in data"
			:key="index"
			@click="itemClick(index, item)"
		>
			<img v-if="item.active" :src="item.simg" />
			<img v-else :src="item.dimg" />
			<span>{{ item.title }}</span>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// 输入属性输入
			data: [
				{
					title: '地图',
					dimg: require('@/assets/images/mapswitch/btn_mapMode_map.png'),
					simg: require('@/assets/images/mapswitch/btn_mapMode_map_select.png'),
					index: 0,
					active: true,
				},
				{
					title: '影像',
					dimg: require('@/assets/images/mapswitch/btn_mapMode_sta.png'),
					simg: require('@/assets/images/mapswitch/btn_mapMode_sta_select.png'),
					active: false,
					index: 1,
				},
				{
					title: '三维',
					dimg: require('@/assets/images/mapswitch/btn_mapMode_sta.png'),
					simg: require('@/assets/images/mapswitch/btn_mapMode_sta_select.png'),
					active: false,
					index: 2,
				},
			],
			activeIndex: 0,
		};
	},
	methods: {
		itemClick(index, item) {
			this.activeIndex = index;
			this.data.forEach((i) => {
				if (i.index !== index) {
					i.active = false;
				} else {
					i.active = true;
				}
			});
			this.data = [...this.data];
			this.$emit('itemClick', item);
		},
	},
};
</script>
<style lang="less" scoped>
.map-switch {
	display: flex;
	.item {
		width: 80px;
		height: 35px;
		background: #ffffff;
		box-shadow: 0 0 1px #ddd;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		span {
			margin-left: 5px;
		}
	}
	.item:first-child {
		border-right: 1px solid #ccc;
	}
	.item:last-child {
		margin-left: 10px;
		border-radius: 3px;
	}
	.active {
		background: #1077e9;
		color: #fff;
	}
}
</style>
