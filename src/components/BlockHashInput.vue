<template>
  <el-input v-model="v" class="input" :placeholder="inputPlaceHolder">
    <el-button id="search" slot="append" icon="el-icon-search" @click="search"></el-button>
  </el-input>
</template>

<script>
export default {
  name: 'BlockHashInput',
  props: {
    value: String,
  },
  data() {
    return {
      inputPlaceHolder: 'Please input blockHash',
      v: '',
    };
  },
  mounted() {
    this.v = this.value;
  },
  watch: {
    v() {
      this.$emit('input', this.v);
    },
  },
  methods: {
    search() {
      this.$emit('search');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  border: none;
  width: 100%;
  box-sizing: border-box;
  max-width: 750px;
  font-size: 1rem;
  overflow: hidden;
  height: 40px;
  background: rgba(255, 255, 255, 0.4);
  padding: 0px 5px 0px 17px;
  margin: 0 0 8px 0;
}
</style>
