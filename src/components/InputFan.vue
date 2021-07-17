<template>
  <div class="input-fan">
    <div v-if="isText" :class="labelOfClassObj">{{ label }}</div>
    <div v-else class="icon-label-area">
      <img src="../assets/img/rotate.png" alt=""/>
    </div>
    <input :class="inputOfClassObj" type="text">
  </div>
</template>

<script>
export default {
  name: "InputFan",
  props: {
    label: String,
    isText: Boolean,
    labelType: String,
  },
  data() {
    return {

    }
  },
  computed: {
    labelOfClassObj() {
      if (this.labelType === 'shortText') {
        return {
          'label-area-1': true,
          'label-area-2': false
        }
      }
      return {
        'label-area-1': false,
        'label-area-2': true
      }
    },
    inputOfClassObj() {
      if (this.labelType === 'shortText') {
        return {
          'input-default': true,
          'input-width-1': true,
          'input-width-2': false,
        };
      }
      return {
        'input-default': true,
        'input-width-1': false,
        'input-width-2': true,
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/constant";
  .input-fan {
    display: flex;
    font-size: $primary-font-size;
    color: $custom-font-color;

    .label-area-1 {
      padding-top: 3px;
      margin-right: 2px;
      width: 20px;
    }
    .label-area-2 {
      margin-right: 5px;
      width: 35px;
    }
    .icon-label-area {
      width: 20px;
      margin-right: 4px;

      img {
        width: 20px;
      }
    }
    .input-default {
      font-size: $primary-font-size;
      outline: none;
      border: none;
      height: 28px;
      padding-bottom: 5px;
      border-bottom: 2px solid rgb(228, 228, 228);
      background: rgb(245, 245, 245);
    }
    .input-width-1 {
      width: 50px;
    }
    .input-width-2 {
      width: 25px;
    }
  }
</style>