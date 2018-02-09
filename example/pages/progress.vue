<template>
  <div class="page-progress" >
    <div style="height:100px;" ref="test"></div>
    <div  ref="progress" style="background:#fff;">
      <mt-cell-group>
        <mt-cell title="默认">
          <mt-progress></mt-progress>
        </mt-cell>
        <mt-cell title="预设 20%">
          <mt-progress :value="20"></mt-progress>
        </mt-cell>
        <mt-cell title="左右文字">
          <mt-progress :value="40">
            <div slot="start">0%</div>
            <div slot="end">100%</div>
          </mt-progress>
        </mt-cell>
        <mt-cell title="定义线宽">
          <mt-progress :value="60" :bar-height="5"></mt-progress>
        </mt-cell>
      </mt-cell-group>
      <div class="page-progress-wrapper">
        <mt-button size="large" type="primary" @click.native="uploadFile">上传文件</mt-button>
        <mt-progress :value="value" v-if="progressVisible" transition="progress-fade">
          <div slot="end">{{ value }}%</div>
        </mt-progress>
      </div>
    </div>
  </div>
</template>

<style>
  @component-namespace page {
    @component progress {
/*      margin-top: 44px;*/
      background: #FFFFFF;
      .mint-cell-value {
        flex: 2.5;
        position: relative;
        top: -20px;
      }

      .mt-progress {
        width: 100%;
        position: absolute;
        top: 5px;
      }

      @descendent wrapper {
        padding: 0 10px;
        margin-top: 50px;

        .mt-progress {
          position: relative;
        }

        .progress-fade-transition {
          transition: opacity .3s;
        }

        .progress-fade-enter,
        .progress-fade-leave {
          opacity: 0;
        }
      }
    }
  }
</style>

<script type="text/babel">
  import { Toast } from 'src/index';

  export default {
    data() {
      return {
        progressVisible: false,
        value: 0,
        uploading: false,
        timer: null
      };
    },

    watch: {
      value(val) {
        if (val >= 100) {
          this.uploading = false;
          this.progressVisible = false;
          setTimeout(() => Toast({ message: '上传成功', position: 'bottom', duration: 1000 }), 200);
          clearTimeout(this.timer);
        }
      }
    },

    methods: {
      uploadFile() {
        if (!this.uploading) {
          this.value = 0;
          this.progressVisible = true;
          this.uploading = true;
          this.timer = setInterval(() => this.value++, 10);
        }
      },
      bhFillStyle(childNode,parentNode){
        console.log(document.getElementsByTagName("html")[0].clientHeight);
        for(var i=0;i<arguments.length;i++){
            if(!this.isDom(arguments[i])) throw new Error("Invalid arguments");
        }
        var childNodeTop = childNode.offsetTop,
            childNodeHeight = childNode.clientHeight,
            parentNodeHeight = null;
        var htmlHeight = document.getElementsByTagName("html")[0].clientHeight;
        if(childNodeHeight+parentNodeHeight<htmlHeight){
            if(parentNode){
                if(!this.isFather(childNode,parentNode)) throw new Error(parentNode+" should be "+childNode+"'s Parent Node. ");
                parentNodeHeight = parentNode.clientHeight;
            }else{
                parentNodeHeight = htmlHeight;//window.screen.availHeight;
            }
            childNode.style.minHeight = parentNodeHeight-childNodeTop+"px";
        }
      },
      isDom(obj){
        return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
      },
      isFather(childNode,parentNode){
        let child = childNode; 
        while(child.parentNode){
          child = child.parentNode;
          if(child === parentNode) return true;
        }
        return false;
      }
    },
    mounted(){
      let progress = this.$refs.progress;
      let test = this.$refs.test;
      let screen = document.body;
      this.bhFillStyle(progress);
    }
  };
</script>