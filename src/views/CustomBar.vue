<template>
  <div class="custom-bar">
    <align-area></align-area>
    <transform-area></transform-area>
    <appearance-area></appearance-area>
  </div>
</template>

<script>
import TransformArea from '../components/TransformArea.vue';
import InputFan from "../components/InputFan.vue";
import AppearanceArea from "../components/AppearanceArea.vue";
import AlignArea from "../components/AlignArea.vue";

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