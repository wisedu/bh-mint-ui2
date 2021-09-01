<template>
	<div class="mint-image-clip">
		<div class="mint-image-clip-box" v-if="type">
			<slot name="left">
				<input type="file" accept="image/*" capture="camera" ref='camera' v-on:change.self.stop="hanldeClick">
			</slot>
		</div>
		<div ref='crop_btn' class="mint-image-clip-btn" v-if="!type">
			<slot>
				<mt-button type="primary">{{computedText}}</mt-button>
			</slot>
		</div>
	</div>
</template>

<script>
	import AlloyCrop from 'alloycrop';
	import AlloyFinger from 'alloyfinger';
	import Locale from 'bh-mint-ui2/src/mixins/locale';
	export default {
		name: 'mt-image-clip',
		mixins: [Locale],
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
				default: 'buttonConfirm' // 确定
			},
			cancelText: {
				type: String,
				default: 'buttonCancel' // 取消
			},
			type: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: 'imageCrop' // 裁剪图片
			}
		},
		data() {
			return {
				data: this.src
			}
		},
        computed:{
            i18n(){
                return this.t('mint');
            },
            // 确定按钮国际化
            computedConfirmText(){
                return this.i18n[this.confirmText] || this.confirmText;
            },
            // 取消按钮国际化
            computedCancelText(){
                return this.i18n[this.cancelText] || this.cancelText;
            },
            // 裁剪图片按钮国际化
            computedText(){
                return this.i18n[this.text] || this.text;
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
							ok_text: _that.computedConfirmText,
							cancel_text: _that.computedCancelText,
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
							ok_text: _that.computedConfirmText,
							cancel_text: _that.computedCancelText,
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