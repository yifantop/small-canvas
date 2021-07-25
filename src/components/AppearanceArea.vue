<template>
  <div class="appearance-area">
    <div class="name-area">外观</div>
    <div class="content">
      <div class="fill-function">
        <checkbox-fan></checkbox-fan>
        <div class="palette"></div>
        <div>填充</div>
      </div>
      <div class="border-function">
        <checkbox-fan></checkbox-fan>
        <div class="palette"></div>
        <div>边界</div>
      </div>
      <div class="line-control">
        <div class="size">
          <input-fan label="大小" :isText="true" labelType="longText"></input-fan>
        </div>
        <div class="dotted-line">
          <input-fan label="虚线" :isText="true" labelType="longText"></input-fan>
        </div>
        <div class="gap">
          <input-fan label="间隙" :isText="true" labelType="longText"></input-fan>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckboxFan from "./CheckboxFan.vue";
import InputFan from "./InputFan.vue";

export default {
  name: "AppearanceArea",
  components: {
    CheckboxFan,
    InputFan,
  }
}
</script>

<style lang="scss">
@import "../assets/scss/constant";
@import "../assets/scss/palette";

  .appearance-area {
    font-size: $primary-font-size;
    color: $custom-font-color;
    border-bottom: 3px solid rgb(228, 228, 228);

    .name-area {
      @extend %name-area-general;
    }
    .content {
      margin-left: 15px;

      margin-bottom: 15px;

      .fill-function {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        .palette {
          @extend %palette-block-general;
          background: lightcoral;
        }
      }
      .border-function {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        .palette {
          @extend %palette-block-general;
          background: darkgrey;
        }
      }
      .line-control {
        display: flex;
        padding-left: 20px;
        justify-content: space-around;
      }
    }
  }
</style>