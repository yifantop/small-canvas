<template>
  <div class="align-area">
    <div class="vertical">
      <img src="../assets/img/top-align.png" alt="">
      <img src="../assets/img/middle-align.png" alt="">
      <img src="../assets/img/bottom-align.png" alt="">
    </div>
    <div class="vertical-sep"></div>
    <div class="horizontal">
      <img src="../assets/img/left-align.png" alt="">
      <img src="../assets/img/vertical-middle-align.png" alt="">
      <img src="../assets/img/right-align.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "AlignArea"
}
</script>

<style lang="scss">
@import "../assets/scss/constant";
  .align-area {
    display: flex;
    border-bottom: 3px solid rgb(228, 228, 228);
    margin-bottom: 15px;

    .vertical-sep {
      width: 3px;
      height: 44px;
      background: $sep-line-color;
    }
    .vertical {
      width: 145px;
      margin-left: 5px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .horizontal {
      width: 145px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    img {
      width: 20px;
      height: 20px;
    }
  }
</style>