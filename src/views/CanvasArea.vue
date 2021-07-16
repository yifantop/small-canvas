<template>
  <canvas class="canvas-area" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<script>
export default {
  name: "CanvasArea",
  created() {
    let that = this;
    window.onresize = function () {
      that.changeCanvasWidth();
      that.changeCanvasHeight();
    }
  },
  data() {
    return {
      canvasWidth: window.innerWidth - 350,
      canvasHeight: window.innerHeight - 10,
    }
  },
  methods: {
    changeCanvasWidth() {
      this.canvasWidth = window.innerWidth - 350;
    },
    changeCanvasHeight() {
      this.canvasHeight = window.innerHeight - 10;
    }
  }
}
</script>

<style lang="scss">
  .canvas-area {
    border-left: 2px solid rgb(228, 228, 228);
    border-right: 2px solid rgb(228, 228, 228);
  }
</style>