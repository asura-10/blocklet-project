<template>
  <div class="main">
    <div v-if="data.length === 0" class="empty">
      <div style="margin-bottom: 8px">No data.</div>
      <span>Please input blockHash ...</span>
    </div>
    <div v-else>
      <div v-for="(item, k) in data" :key="k">
        <el-row class="row">
          <el-col :xs="4" :sm="4" :md="2" :lg="1" :xl="1" class="row-h">
            <div class="row-head"><span>TX</span></div>
          </el-col>
          <el-col :xs="20" :sm="20" :md="22" :lg="23" :xl="23">
            <el-row class="row-content">
              <el-col :xs="24" :sm="12" :md="12" :lg="9" :xl="9">
                <span class="row-key">{{ item.key + ' ID:' }}</span>
                <span class="row-value">{{ item.hash | idFormat }}</span>
                <br />
                <span class="row-value">{{ item.time | standardTime }}</span>
              </el-col>
              <el-col :xs="24" :sm="12" :md="12" :lg="9" :xl="9">
                <span class="row-key">{{ 'tx_index: ' }}</span>
                <span class="row-value">{{ item.tx_index }}</span>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="6" :xl="6">
                <span class="row-key">{{ 'fee: ' }}</span>
                <span class="row-value">{{ item.fee }}</span>
                <br />
                <span class="row-key">{{ 'weight: ' }}</span>
                <span class="row-value">{{ item.weight }}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { idFormat, standardTime } from '../libs/filter';

export default {
  name: 'TransactionList',
  props: {
    data: Array,
  },
  filters: {
    idFormat,
    standardTime,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 100%;
}
.empty {
  height: 100px;
  padding: 24px 0 0 0;
  color: #999999;
}
.row {
  width: 100%;
  padding: 4px;
  display: flex;
  line-height: 20px;
}
.row-h {
  height: 100%;
}
.row-head {
  border: 1px solid rgb(238, 238, 238);
  border-radius: 100px;
  height: 30px;
  width: 30px;
  line-height: 32px;
  margin-top: 8px;
}
.row-key {
  color: #444444;
  font-weight: 600;
  font-size: 14px;
}
.row-value {
  color: #999999;
  font-size: 12px;
}
.el-row {
  text-align: left;
}
</style>
