<template>
  <ul class="tool-bar">
    <li><img src="../assets/img/choose.png" alt=""></li>
    <li><img src="../assets/img/rectangle.png" alt=""></li>
    <li><img src="../assets/img/ellipse.png" alt=""></li>
    <li><img src="../assets/img/polygon.png" alt=""></li>
    <li><img src="../assets/img/straightLine.png" alt=""></li>
    <li><img src="../assets/img/pen.png" alt=""></li>
    <li><img src="../assets/img/text.png" alt=""></li>
    <li><img src="../assets/img/scale.png" alt=""></li>
  </ul>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "ToolBar",
  computed: {
    drawingTypes() {
      return this.drawingTypes;
    },
    ...mapState({
      drawingTypes: state => state.drawTypes.drawingTypes,
    })
  }
}
</script>

<style lang="scss">
.tool-bar {
  background: rgb(245, 245, 245);
  width: 50px;

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    width: 30px;
    height: 30px;
    margin: 10px 0 10px 0;

    img {
      width: 30px;
    }
  }
}
</style>