<template>
  <div id="app">
    <!-- <div :style="{ display: 'flex', justifyContent: 'center' }">
      <pre :style="{ textAlign: 'left' }">
        <code>{{ JSON.stringify(blocklet, null, 2) }}</code>
      </pre>
    </div> -->
    <el-row>
      <el-col :xs="1" :sm="1" :md="6" :lg="6" :xl="6">
        <div style="min-height: 24px"></div>
      </el-col>
      <el-col :xs="22" :sm="22" :md="12" :lg="12" :xl="12">
        <block-hash-input @search="getInfoByHash" v-model="blockHash" />
      </el-col>
    </el-row>
    <el-row class="main">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-row class="left-top">
          <block-base-info :data="baseInfo" />
        </el-row>
        <el-row class="left-bottom">
          <block-detail :data="detail" />
        </el-row>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-row class="transaction">
          <div>Transactions</div>
        </el-row>
        <div class="right">
          <transaction :data="transactions.slice((currentPage - 1) * 10, currentPage * 10)" />
          <el-pagination
            @current-change="pageChange"
            :page-count="total"
            :page-size="10"
            :total="total"
            layout="prev, pager, next" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { GetBlockChainInfo } from './api/blockchain';
import BlockHashInput from './components/BlockHashInput.vue';
import BlockBaseInfo from './components/BlockBaseInfo.vue';
import BlockDetail from './components/BlockDetail.vue';
import Transaction from './components/Transaction.vue';
import { idFormat, humanTime, numberFormat } from './libs/filter';

export default {
  name: 'App',
  components: {
    BlockHashInput,
    BlockBaseInfo,
    BlockDetail,
    Transaction,
  },
  data() {
    return {
      blocklet: window?.blocklet,
      blockHash: '',
      info: {},
      baseInfo: {
        blockID: '---',
        mineTimestamp: 0,
      },
      detail: [
        ['Hash', '---'],
        ['Capacity', '---'],
        ['Distance', '---'],
        ['BTC', '---'],
        ['Value', '---'],
        ['Value Today', '---'],
        ['Average Value', '---'],
        ['Median Value', '---'],
        ['Input Value', '---'],
        ['Output Value', '---'],
        ['Transactions', '---'],
        ["Witness Tx's", '---'],
        ['Inputs', '---'],
        ['Outputs', '---'],
        ['Fees', '---'],
        ['Fees Kb', '---'],
        ['Fees kWU', '---'],
        ['Depth', '---'],
        ['Size', '---'],
        ['Version', '---'],
        ['Merkle Root', '---'],
        ['Difficulty', '---'],
        ['Nonce', '---'],
        ['Bits', '---'],
        ['Weight', '---'],
        ['Minted', '---'],
        ['Reward', '---'],
        ['Mined on', '---'],
        ['Height', '---'],
        ['Confirmations', '---'],
        ['Fee Range', '---'],
        ['Average Fee', '---'],
        ['Median Fee', '---'],
        ['Miner', '---'],
      ],
      transactions: [],
      total: 10,
      currentPage: 1,
    };
  },
  methods: {
    getInfoByHash() {
      GetBlockChainInfo(this.blockHash).then((x) => {
        this.info = x.data;
        this.getBaseInfoFromData();
        this.getTransactions();
        this.getDetailFromData();
      });
    },
    getBaseInfoFromData() {
      this.baseInfo = {
        blockID: this.info.block_index,
        mineTimestamp: this.info.time,
      };
      for (let i in this.info.tx) {
        this.info.tx[i].key = i;
      }
    },
    getDetailFromData() {
      let detail = [];
      detail.push(['Hash', this.info.hash ? idFormat(this.info.hash) : '---']);
      detail.push(['Capacity', '---']);
      detail.push(['Distance', '---']);
      detail.push(['BTC', '---']);
      detail.push(['Value', '---']);
      detail.push(['Value Today', '---']);
      detail.push(['Average Value', '---']);
      detail.push(['Median Value', '---']);
      detail.push(['Input Value', '---']);
      detail.push(['Output Value', '---']);
      detail.push(['Transactions', this.transactions.length]);
      detail.push(["Witness Tx's", '---']);
      detail.push(['Inputs', '---']);
      detail.push(['Outputs', '---']);
      detail.push(['Fees', '---']);
      detail.push(['Fees Kb', '---']);
      detail.push(['Fees kWU', '---']);
      detail.push(['Depth', '---']);
      detail.push(['Size', '---']);
      detail.push(['Version', '0x20000000']);
      detail.push(['Merkle Root', this.info.mrkl_root ? idFormat(this.info.mrkl_root) : '---']);
      detail.push(['Difficulty', '---']);
      detail.push(['Nonce', this.info.nonce ? numberFormat(this.info.nonce) : '---']);
      detail.push(['Bits', '---']);
      detail.push(['Weight', this.info.weight ? this.info.weight : '---']);
      detail.push(['Minted', '---']);
      detail.push(['Reward', '---']);
      detail.push(['Mined on', this.info.time ? humanTime(this.info.time) : '---']);
      detail.push(['Height', this.info.block_index ? numberFormat(this.info.block_index) : '---']);
      detail.push(['Confirmations', '---']);
      detail.push(['Fee Range', '---']);
      detail.push(['Average Fee', '---']);
      detail.push(['Median Fee', '---']);
      detail.push(['Miner', 'Poolin']);
      this.detail = detail;
    },
    getTransactions() {
      this.transactions = this.info.tx;
      this.total = this.info.tx.length;
    },
    pageChange(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.main {
  width: 95%;
  margin: 16px auto;
}
.left-top {
  height: 100px;
  border: 1px solid rgb(238, 238, 238);
  padding: 16px;
}
.left-bottom {
  /* height: 480px; */
  border: 1px solid rgb(238, 238, 238);
  padding: 16px;
}
.right {
  /* height: 546px; */
  border: 1px solid rgb(238, 238, 238);
  padding: 16px;
}
.transaction {
  float: left;
  margin: 8px;
}
</style>
