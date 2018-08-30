'use strict';

const resErr = e => ({ status: 'error', message: `${e}` });
const resSuccess = data => ({ status: 'success', data: data });
const toInt = value => Math.trunc(value);
const isDef = obj => typeof obj !== 'undefined';
const isStr = obj => typeof obj !== 'undefined' && typeof obj === 'string';
const checkDate = expires => Math.floor(Date.now() / 1000) < expires;
const isReq = prop => (prop.indexOf('?') === -1) ? true : false;
const isArr = prop => (prop.indexOf('[]') !== -1) ? true : false;
const isEmptyObj = obj => Object.keys(obj).length === 0;
const hasKey = (obj, key) => Object.keys(obj).indexOf(key) !== -1;
const monthName = idx => ['January','February','March','April','May','June','July','August','September','October','November','December'].filter((month, i) => i == idx)[0];
const formatDate = date => `${monthName(date.getMonth())} ${date.getDate()}, ${date.getFullYear()}`

module.exports = {
    resErr,
    resSuccess,
    toInt,
    isDef,
    isStr,
    checkDate,
    isReq,
    isArr,
    isEmptyObj,
    hasKey,
    formatDate
}
