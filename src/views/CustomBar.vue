<template>
  <div class="custom-bar">
    <transform-area></transform-area>
  </div>
</template>

<script>
import Test from './Test';
import TransformArea from '../components/TransformArea';
import InputFan from "../components/InputFan";

export default {
  name: "CustomBar",
  components: {
    Test,
    TransformArea,
    InputFan,
  }
}
</script>

<style lang="scss">
  .custom-bar {
    width: 300px;
    background: rgb(245, 245, 245);
  }
</style>