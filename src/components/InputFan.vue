<template>
  <div class="input-fan">
    <div v-if="isText" class="label-area">{{ label }}</div>
    <div v-else class="icon-label-area">
      <img src="../assets/img/rotate.png" alt=""/>
    </div>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: "InputFan",
  props: {
    label: String,
    isText: Boolean
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/constant";
  .input-fan {
    display: flex;
    font-size: $primary-font-size;
    color: rgb(170, 170, 170);

    .label-area {
      padding-top: 3px;
      margin-right: 2px;
      width: 20px;
    }
    .icon-label-area {
      width: 20px;
      margin-right: 4px;

      img {
        width: 20px;
      }
    }
    input {
      font-size: $primary-font-size;
      outline: none;
      border: none;
      width: 50px;
      height: 28px;
      padding-bottom: 5px;
      border-bottom: 2px solid rgb(228, 228, 228);
      background: rgb(245, 245, 245);
    }
  }
</style>