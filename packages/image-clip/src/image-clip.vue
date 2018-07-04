<template>
	<div class="mint-image-clip">
		<div class="mint-image-clip-box" v-if="type">
			<slot name="left">
				<input type="file" accept="image/*" capture="camera" ref='camera' v-on:change.self.stop="hanldeClick">
			</slot>
		</div>
		<div ref='crop_btn' class="mint-image-clip-btn" v-if="!type">
			<slot>
				<mt-button type="primary">{{text}}</mt-button>
			</slot>
		</div>
	</div>
</template>

<script>
	import AlloyCrop from 'alloycrop';
	import AlloyFinger from 'alloyfinger';
	export default {
		name: 'mt-image-clip',
		props: {
			src: {
				type: String,
				default: ""
			},
			width: {
				type: [Number,String],
				default: 200
			},
			height: {
				type: [Number,String],
				default: 100
			},
			confirmText: {
				type: String,
				default: '确定'
			},
			cancelText: {
				type: String,
				default: '取消'
			},
			type: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: '裁剪图片'
			}
		},
		data() {
			return {
				data: this.src
			}
		},
		methods: {
			hanldeClick: function(){
				var crop_btn = this.$refs.crop_btn;
				var file = this.$refs.camera.files[0]
				if(!file) return;
				var reader = new FileReader();
				reader.readAsDataURL(file);
				var _that = this;
				reader.onload=function (oFREvent) {  
					_that.data = oFREvent.target.result;
					var mAlloyCrop = new AlloyCrop({
							image_src: _that.data,
							circle: false,
							width: _that.width,
							height: _that.height,
							output: 1,
							className: 'm-clip-box',
							ok_text: _that.confirmText,
							cancel_text: _that.cancelText,
							ok: function (base64, canvas) {
								_that.$emit('input',base64);
								mAlloyCrop.destroy();
							},
							cancel: function () {
								mAlloyCrop.destroy();
							}
						});
				};
			},
			init: function(){
				var _that = this;
				var crop_result = this.$refs.crop_result;
				var crop_btn = this.$refs.crop_btn;
				var option = {};
				new AlloyFinger(crop_btn, {
					tap: function () {
						if(!_that.data) return;
						var mAlloyCrop = new AlloyCrop({
							image_src: _that.data,
							circle: false,
							width: _that.width,
							height: _that.height,
							output: 1,
							className: 'm-clip-box',
							ok_text: _that.confirmText,
							cancel_text: _that.cancelText,
							ok: function (base64, canvas) {
								_that.$emit('input',base64);
								mAlloyCrop.destroy();
							},
							cancel: function () {
								mAlloyCrop.destroy();
							}
						});

					}
				});
			}
		},
		mounted: function(){
			if(!this.type) this.init();
		}
	}
</script>

<style lang="css">
	.mint-image-clip {
		padding: 10px 0;
	}
	.mint-image-clip button{
		border-radius: 5px; 
	}
</style>