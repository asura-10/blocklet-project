import axios from '../libs/api';

export function GetBlockChainInfo(blockHash) {
  return axios({
    url: `/api/blockchain/` + blockHash,
    method: 'GET',
  });
}
