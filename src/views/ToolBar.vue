<template>
  <ul class="tool-bar">
    <li @click="drawTypeChange(0)">
      <img v-show="!isDisplay[0].value" src="../assets/img/choose.png" alt="">
      <img v-show="isDisplay[0].value" src="../assets/img/choose-click.png" alt="">
    </li>
    <li @click="drawTypeChange(1)">
      <img v-show="!isDisplay[1].value" src="../assets/img/rectangle.png" alt="">
      <img v-show="isDisplay[1].value" src="../assets/img/rectangle-click.png" alt="">
    </li>
    <li @click="drawTypeChange(2)">
      <img v-show="!isDisplay[2].value" src="../assets/img/ellipse.png" alt="">
      <img v-show="isDisplay[2].value" src="../assets/img/ellipse-click.png" alt="">
    </li>
    <li @click="drawTypeChange(3)">
      <img v-show="!isDisplay[3].value" src="../assets/img/polygon.png" alt="">
      <img v-show="isDisplay[3].value" src="../assets/img/polygon-click.png" alt="">
    </li>
    <li @click="drawTypeChange(4)">
      <img v-show="!isDisplay[4].value" src="../assets/img/straightLine.png" alt="">
      <img v-show="isDisplay[4].value" src="../assets/img/straightLine-click.png" alt="">
    </li>
    <li @click="drawTypeChange(5)">
      <img v-show="!isDisplay[5].value" src="../assets/img/pen.png" alt="">
      <img v-show="isDisplay[5].value" src="../assets/img/pen-click.png" alt="">
    </li>
    <li @click="drawTypeChange(6)">
      <img v-show="!isDisplay[6].value" src="../assets/img/text.png" alt="">
      <img v-show="isDisplay[6].value" src="../assets/img/text-click.png" alt="">
    </li>
    <li @click="drawTypeChange(7)">
      <img v-show="!isDisplay[7].value" src="../assets/img/scale.png" alt="">
      <img v-show="isDisplay[7].value" src="../assets/img/scale-click.png" alt="">
    </li>
  </ul>
</template>

<script>

export default {
  name: "ToolBar",
  data() {
    return {
      isDisplay: [
        {value: true},
        {value: false},
        {value: false},
        {value: false},
        {value: false},
        {value: false},
        {value: false},
        {value: false},
      ],
      currentTypeId: 0,
    }
  },
  methods: {
    drawTypeChange(id) {
      this.isDisplay[this.currentTypeId].value = false;
      this.isDisplay[id].value = true;
      this.currentTypeId = id;
    },
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