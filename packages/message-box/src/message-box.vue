<template>
  <div class="mint-msgbox-wrapper">
    <transition name="msgbox-bounce">
      <div class="mint-msgbox mt-bg-white" v-show="value">
        <div class="mint-msgbox-header" v-if="title !== ''">
          <div class="mint-msgbox-title mt-color-grey">{{ title==="Tip"?i18n.tip:title }}</div>
        </div>
        <div class="mint-msgbox-content">
          <div
            class="mint-msgbox-message mt-color-grey-lv3"
            v-html="message"
            v-if="message"
          ></div>
          <div class="mint-msgbox-input" v-if="showInput">
            <input
              v-model="inputValue"
              :placeholder="inputPlaceholder"
              ref="input"
              class="mt-bg-white mt-bColor-grey-lv4"
            />
            <div
              class="mint-msgbox-errormsg mt-color-red"
              v-if="editorErrorMessage"
            >
              {{ editorErrorMessage }}
            </div>
          </div>
        </div>
        <div class="mint-msgbox-btns">
          <button
            class="mint-msgbox-btn mint-msgbox-cancel mt-btn-default"
            v-show="showCancelButton"
            @click="handleAction('cancel')"
          >
            {{ i18n.buttonCancel }}
          </button>
          <button
            class="mint-msgbox-btn mint-msgbox-confirm mt-btn-primary"
            v-show="showConfirmButton"
            @click="handleAction('confirm')"
          >
            {{ i18n.buttonConfirm }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script type="text/babel">
let CONFIRM_TEXT = "确定";
let CANCEL_TEXT = "取消";

import Popup from "bh-mint-ui2/src/utils/popup";

export default {
  mixins: [Popup],

  props: {
    modal: {
      default: true,
    },
    showClose: {
      type: Boolean,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      default: false,
    },
    closeOnClickModal: {
      default: true,
    },
    closeOnPressEscape: {
      default: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
  },
  computed: {
    confirmButtonClasses() {
      let classes =
        "mint-msgbox-btn mint-msgbox-confirm " + this.confirmButtonClass;
      if (this.confirmButtonHighlight) {
        classes += " mint-msgbox-confirm-highlight";
      }
      return classes;
    },
    cancelButtonClasses() {
      let classes =
        "mint-msgbox-btn mint-msgbox-cancel " + this.cancelButtonClass;
      if (this.cancelButtonHighlight) {
        classes += " mint-msgbox-cancel-highlight";
      }
      return classes;
    },
    i18n() {
      return this.$t("message");
    },
  },

  methods: {
    doClose() {
      this.value = false;
      this._closing = true;

      this.onClose && this.onClose();

      setTimeout(() => {
        if (this.modal && this.bodyOverflow !== "hidden") {
          document.body.style.overflow = this.bodyOverflow;
          document.body.style.paddingRight = this.bodyPaddingRight;
        }
        this.bodyOverflow = null;
        this.bodyPaddingRight = null;
      }, 200);
      this.opened = false;

      if (!this.transition) {
        this.doAfterClose();
      }
    },

    handleAction(action) {
      if (this.$type === "prompt" && action === "confirm" && !this.validate()) {
        return;
      }
      var callback = this.callback;
      this.value = false;
      callback(action);
    },

    validate() {
      if (this.$type === "prompt") {
        var inputPattern = this.inputPattern;
        if (inputPattern && !inputPattern.test(this.inputValue || "")) {
          this.editorErrorMessage =
            this.inputErrorMessage || this.i18n.inputDataInvalid;
          this.$nextTick(() => {
            this.$refs.input.classList.add("mt-bColor-danger");
          });
          return false;
        }
        var inputValidator = this.inputValidator;
        if (typeof inputValidator === "function") {
          var validateResult = inputValidator(this.inputValue);
          if (validateResult === false) {
            this.editorErrorMessage =
              this.inputErrorMessage || this.i18n.inputDataInvalid;
            this.$nextTick(() => {
              this.$refs.input.classList.add("mt-bColor-danger");
            });
            return false;
          }
          if (typeof validateResult === "string") {
            this.editorErrorMessage = validateResult;
            return false;
          }
        }
      }
      this.editorErrorMessage = "";
      this.$nextTick(() => {
        this.$refs.input.classList.remove("mt-bColor-danger");
      });
      return true;
    },

    handleInputType(val) {
      if (val === "range" || !this.$refs.input) return;
      this.$refs.input.type = val;
    },
  },

  watch: {
    inputValue() {
      if (this.$type === "prompt") {
        this.validate();
      }
    },

    value(val) {
      this.handleInputType(this.inputType);
      if (val && this.$type === "prompt") {
        setTimeout(() => {
          if (this.$refs.input) {
            this.$refs.input.focus();
          }
        }, 500);
      }
    },

    inputType(val) {
      this.handleInputType(val);
    },
  },

  data() {
    return {
      title: "",
      message: "",
      type: "",
      showInput: false,
      inputValue: null,
      inputPlaceholder: "",
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: "",
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonText: CONFIRM_TEXT,
      cancelButtonText: CANCEL_TEXT,
      confirmButtonClass: "",
      confirmButtonDisabled: false,
      cancelButtonClass: "",
      editorErrorMessage: null,
      callback: null,
    };
  },
};
</script>

<style>
@component-namespace mint {
  @component msgbox {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 280px;
    max-height: 760px;
    padding: 18px 16px 16px 16px;
    border-radius: 6px;
    font-size: 16px;
    -webkit-user-select: none;
    overflow: hidden;
    backface-visibility: hidden;
    transition: 0.2s;

    @descendent content {
      position: relative;
      overflow: hidden;
    }

    @descendent input {
      padding-top: 18px;
      padding-bottom: 6px;
      & input {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        padding: 0 0 0 12px;
        line-height: 42px;
        width: 100%;
        font-size: 17px;
        appearance: none;
        outline: none;
      }
    }

    @descendent errormsg {
      font-size: 12px;
      min-height: 18px;
      margin-top: 2px;
    }

    @descendent title {
      text-align: center;
      overflow: hidden;
      font-size: 18px;
      max-height: 48px;
    }

    @descendent message {
      width: 100%;
      overflow-y: auto;
      max-height: 144px;
      font-size: 15px;
      line-height: 24px;
      margin-top: 10px;
      text-align: center;
    }

    @descendent btns {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
      margin-top: 18px;
      line-height: 40px;
    }

    @descendent btn {
      appearance: none;
      border-radius: 5px;
      border: 0;
      box-sizing: border-box;
      display: block;
      font-size: 18px;
      height: 40px;
      flex: 0 1 auto;
      outline: 0;
      overflow: hidden;
      position: relative;
      text-align: center;
    }
    @descendent btn:not(:last-child) {
      margin-right: 12px;
    }

    @descendent cancel {
      width: 100%;
    }

    @descendent confirm {
      width: 100%;
    }
  }
}

.msgbox-bounce-enter {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.7);
}
.msgbox-bounce-leave-active {
  opacity: 0;
  transform: translate3d(-50%, -50%, 0) scale(0.9);
}
</style>
<style src="bh-mint-ui2/src/style/popup.css"></style>


