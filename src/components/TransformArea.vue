<template>
  <div class="transform-area">
    <div class="width-and-height">
      <div class="width">
        <input-fan label="W" :isText="true"></input-fan>
      </div>
      <div class="height">
        <input-fan label="H" :isText="true"></input-fan>
      </div>
    </div>
    <div class="x-and-y">
      <div class="position-x">
        <input-fan label="X" :isText="true"></input-fan>
      </div>
      <div class="position-y">
        <input-fan label="Y" :isText="true"></input-fan>
      </div>
    </div>
    <div class="rotate">
      <input-fan :isText="false"></input-fan>
    </div>
  </div>
</template>

<script>
import InputFan from "./InputFan";

export default {
  name: "TransformArea",
  components: {
    InputFan,
  }
}
</script>

<style lang="scss">
  .transform-area {
    display: flex;

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
</style>