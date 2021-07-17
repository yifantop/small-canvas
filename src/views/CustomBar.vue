<template>
  <div class="custom-bar">
    <align-area></align-area>
    <transform-area></transform-area>
    <appearance-area></appearance-area>
  </div>
</template>

<script>
import TransformArea from '../components/TransformArea';
import InputFan from "../components/InputFan";
import AppearanceArea from "../components/AppearanceArea";
import AlignArea from "../components/AlignArea";

export default {
  name: "CustomBar",
  components: {
    TransformArea,
    InputFan,
    AppearanceArea,
    AlignArea,
  }
}
</script>

<style lang="scss">
.custom-bar {
  width: 300px;
  background: rgb(245, 245, 245);
}
</style>