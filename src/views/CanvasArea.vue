<template>
  <div class="canvas-area" :class="canvasCursorClassObj" :style="canvasAreaSizeStyleObj"></div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import Konva from 'konva';

export default {
  name: "CanvasArea",
  created() {
    let that = this;
    window.onresize = function () {
      that.changeCanvasAreaWidth();
      that.changeCanvasAreaHeight();
      // 如果页面size变化，那么就销毁原stage，新建stage，然后把shape都重新画
      that.initStage();
    };
  },
  data() {
    return {
      stage: null,
    }
  },
  mounted() {
    // 初始化Konva stage
    this.initStage();
  },
  computed: {
    ...mapState({
      currentTypeId: state => state.drawType.currentTypeId,
      canvasAreaWidth: state => state.canvasArea.canvasAreaSize.canvasAreaWidth,
      canvasAreaHeight: state => state.canvasArea.canvasAreaSize.canvasAreaHeight,
    }),
    canvasAreaSizeStyleObj() {
      return {
        width: this.canvasAreaWidth + 'px',
        height: this.canvasAreaHeight + 'px'
      }
    },
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
    },
  },
  methods: {
    ...mapActions({
      changeCanvasAreaWidth: 'changeCanvasAreaWidth',
      changeCanvasAreaHeight: 'changeCanvasAreaHeight'
    }),
    /**
     * 初始化画布
     */
    initStage() {
      // 如果已经有stage了，则销毁它，准备创建新的stage
      if (this.stage) {
        this.stage.destroy();
      }
      // 创建新的stage，stage的宽高是根据页面大小来调整的
      this.stage = new Konva.Stage({
        container: '.canvas-area',
        width: this.canvasAreaWidth - 4,
        height: this.canvasAreaHeight,
      });
    }
  }
}
</script>

<style lang="scss">

.canvas-area {
  border-left: 2px solid rgb(228, 228, 228);
  border-right: 2px solid rgb(228, 228, 228);
}
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
</style>