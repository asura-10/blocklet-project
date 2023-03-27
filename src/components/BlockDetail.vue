<template>
  <div>
    <el-row class="title"><span>Details</span></el-row>
    <el-row>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <detail-key-value v-for="(item, k) in data.slice(0, 17)" :key="k" :data="item" />
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
        <detail-key-value v-for="(item, k) in data.slice(17, 34)" :key="k" :data="item" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DetailKeyValue from './DetailKeyValue.vue';

export default {
  components: { DetailKeyValue },
  name: 'BlockDetail',
  props: {
    data: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  width: 100%;
  float: left;
  margin-bottom: 16px;
}
.title span {
  float: left;
}
</style>
