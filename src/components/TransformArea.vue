<template>
  <div class="transform-area">
    <div class="area-name">变换</div>
    <div class="content">
      <div class="width-and-height">
        <div class="width">
          <input-fan label="W" :isText="true" labelType="shortText"></input-fan>
        </div>
        <div class="height">
          <input-fan label="H" :isText="true" labelType="shortText"></input-fan>
        </div>
      </div>
      <div class="x-and-y">
        <div class="position-x">
          <input-fan label="X" :isText="true" labelType="shortText"></input-fan>
        </div>
        <div class="position-y">
          <input-fan label="Y" :isText="true" labelType="shortText"></input-fan>
        </div>
      </div>
      <div class="rotate">
        <input-fan :isText="false" labelType="shortText"></input-fan>
      </div>
    </div>

  </div>
</template>

<script>
import InputFan from "./InputFan.vue";

export default {
  name: "TransformArea",
  components: {
    InputFan,
  }
}
</script>

<style lang="scss">
@import "../assets/scss/constant";

  .transform-area {
    border-bottom: 3px solid rgb(228, 228, 228);
    margin-bottom: 15px;
    color: $custom-font-color;

    .area-name {
      @extend %name-area-general;
    }

    .content {
      display: flex;
      margin-left: 15px;
      margin-bottom: 15px;

      .width-and-height {
        margin-right: 10px;

        .width {
          margin-bottom: 15px;
        }
      }
      .x-and-y {
        margin-right: 10px;

        .position-x {
          margin-bottom: 15px;
        }
      }
    }


  }
</style>