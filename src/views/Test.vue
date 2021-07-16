<template>
  <div class="test">
    <div v-show="isDisplay"> {{ message }} </div>
    <button @click="check">check</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isDisplay: [true],
      message: 'hello'
    }
  },
  methods: {
    check() {
      if (this.isDisplay[0]) {
        this.isDisplay[0] = false;
        console.log(this.isDisplay[0]);
        return;
      }
      this.isDisplay[0] = true;
    }
  }
}
</script>

<style lang="scss">
  .test {

  }
</style>