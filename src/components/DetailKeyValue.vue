<template>
  <div class="kv">
    <el-row>
      <el-col :span="9">
        <div class="key">{{ data[0] }}</div>
      </el-col>
      <el-col :span="15">
        <div class="value">{{ data[1] }}</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BlockHashInput',
  props: {
    data: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  width: 100%;
  padding: 4px 0 4px 8px;
}
.kv {
  display: flex;
}
.key {
  /* width: 40%; */
  float: left;
  /* display: inline-block; */
  color: rgb(0, 0, 0);
  cursor: pointer;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  font-size: 14px;
  place-self: flex-start;
  margin-right: 3px;
}
.value {
  /* width: 60%; */
  float: left;
  font-size: 0.875rem;
  max-height: max-content;
  margin: 0px;
  cursor: pointer;
  word-break: break-all;
}
</style>
