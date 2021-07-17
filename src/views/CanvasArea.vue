<template>
  <div class="canvas-area">
    <canvas :class="canvasCursorClassObj" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script>
import {mapState} from 'vuex';

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
      canvasWidth: window.innerWidth - 360,
      canvasHeight: window.innerHeight - 12,
    }
  },
  computed: {
    ...mapState({
      currentTypeId: state => state.drawType.currentTypeId,
    }),
    canvasCursorClassObj() {
      switch (this.currentTypeId) {
        case 0:
          return {
            'cursor-arrow': true,
            'cursor-aim-point': false,
            'cursor-pen': false,
            'cursor-text': false,
            'cursor-scale': false,
          };
        case 5:
          return {
            'cursor-arrow': false,
            'cursor-aim-point': false,
            'cursor-pen': true,
            'cursor-text': false,
            'cursor-scale': false,
          };
        case 6:
          return {
            'cursor-arrow': false,
            'cursor-aim-point': false,
            'cursor-pen': false,
            'cursor-text': true,
            'cursor-scale': false,
          };
        case 7:
          return {
            'cursor-arrow': false,
            'cursor-aim-point': false,
            'cursor-pen': false,
            'cursor-text': false,
            'cursor-scale': true,
          };
        default:
          return {
            'cursor-arrow': false,
            'cursor-aim-point': true,
            'cursor-pen': false,
            'cursor-text': false,
            'cursor-scale': false,
          };
      }
    }
  },
  methods: {
    changeCanvasWidth() {
      this.canvasWidth = window.innerWidth - 360;
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

  .cursor-arrow {
    cursor: url("../assets/img/mouse-type/choose.png"), auto;
  }

  .cursor-aim-point {
    cursor: url("../assets/img/mouse-type/ten.png"), auto;
  }

  .cursor-pen {
    cursor: url("../assets/img/mouse-type/pen.png"), auto;
  }

  .cursor-text {
    cursor: text;
  }

  .cursor-scale {
    cursor: url("../assets/img/mouse-type/scale.png"), auto;
  }
}
</style>