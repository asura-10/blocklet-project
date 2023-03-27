import moment from 'moment';

export function numberFormat(x) {
  return x.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

export function idFormat(x) {
  return x.slice(0, 4) + '-' + x.slice(-4);
}

export function humanTime(timestamp) {
  return moment(timestamp * 1000).format('MMMM DD, YYYY HH:mm:ss');
}

export function standardTime(timestamp) {
  return moment(timestamp * 1000).format('MM/DD/YYYY, HH:mm:ss');
}
