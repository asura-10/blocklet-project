<template>
  <div>
    <el-row>
      <div style="float: left">
        <span class="block-title">Bitcoin Block</span>
        <span class="block-id">{{ data.blockID | numberFormat }}</span>
      </div>
    </el-row>
    <el-row>
      <div style="float: left; display: inline-flex">
        <span class="block-date">{{ 'Mined on: ' }}</span>
        <span v-if="data.mineTimestamp !== 0" class="block-date">
          {{ data.mineTimestamp | humanTime }}
        </span>
      </div>
    </el-row>
  </div>
</template>

<script>
import { numberFormat, humanTime } from '../libs/filter';

export default {
  name: 'BlockHashInput',
  props: {
    data: Object,
  },
  filters: {
    numberFormat,
    humanTime,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row {
  float: left;
  width: 100%;
}
.block-title {
  font-weight: 600;
  font-size: 1.79rem;
  margin-right: 8px;
}
.block-id {
  font-weight: 600;
  font-size: 1.62rem;
  place-self: flex-end;
}
.block-date {
  margin: 0px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  color: rgb(153, 153, 153);
}
</style>
