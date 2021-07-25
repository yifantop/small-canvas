<template>
  <div class="home">
    <tool-bar></tool-bar>
    <canvas-area></canvas-area>
    <custom-bar></custom-bar>
  </div>
</template>

<script>
import ToolBar from "./ToolBar.vue";
import CanvasArea from "./CanvasArea.vue";
import CustomBar from "./CustomBar.vue";

export default {
  name: 'Home',
  components: {
    ToolBar,
    CanvasArea,
    CustomBar
  }
}
</script>

<style lang="scss">
@import "../assets/scss/constant";

  .home {
    display: flex;
    border-top: 2px solid rgb(228, 228, 228);
    border-bottom: 2px solid rgb(228, 228, 228);
  }
</style>
