type ElementParam = any;

import html2canvas from 'html2canvas';
import BScroll from 'better-scroll';
import md5 from 'js-md5';

// 截图，保存图片
export const downloadImg = (
  dom: any,
  fileName: string,
  scale = 1,
  addheight = 0,
) => {
  const opts = {
    scale: scale,
    allowTaint: true, // 允许加载跨域的图片
    tainttest: true, // 检测每张图片都已经加载完成
    height: dom.scrollHeight + addheight,
  };
  html2canvas(dom, opts).then((canvas) => {
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = fileName; // a标签添加属性
      link.style.display = 'none';
      link.href = url;
      document.body.appendChild(link);
      link.click(); // 执行下载
      URL.revokeObjectURL(url); // 释放url
      document.body.removeChild(link); // 释放标签
    });
  });
};

/**
 * 转化中文数字
 * @param {String} num 需要转化的数字
 */
export const toChinesNum = (num: any) => {
  const changeNum = [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
  ];
  let newNum = '';
  const arr = num.toString().split('');
  arr[0] = parseInt(arr[0]) - 1;
  if (arr[0] === -1 && arr.length === 1) {
    return '零';
  }
  if (arr.length > 1) {
    arr[1] = parseInt(arr[1]) - 1;
    if (!arr[0]) {
      newNum =
        !arr[0] && arr[1] === -1
          ? changeNum[9]
          : changeNum[9] + changeNum[arr[1]];
    } else {
      newNum =
        changeNum[arr[0]] +
        changeNum[9] +
        (changeNum[arr[1]] ? changeNum[arr[1]] : '');
    }
  } else {
    newNum = changeNum[arr[0]];
  }
  return newNum;
};

/**
 * 根据路由判断是否要渲染Header组部分
 * @param {String} linkRouter 需要判断的路由
 */

export const affirmRouterHeader = (
  addRouterHeader: string[],
  router: string,
) => {
  return addRouterHeader.indexOf(router) !== -1;
};

/**
 * 横向滚动
 * @param {Object} dom 滚动的dom元素
 * @param {Object} betterScrollParams 参数
 */
export const betterScroll = (dom: ElementParam, betterScrollParams: any) => {
  return new BScroll(dom, betterScrollParams);
};

/**
 * 正则校验密码
 * @param {string} value 密码
 */
export const VerifyPassword = (value: string) => {
  const res = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(value);
  return res;
};

/**
 * 正则校验用户名
 * @param {string} value 用户名
 */
export const VerifyUserName = (value: string) => {
  // 字母开头，5-12位数字字母
  const res = /^[a-zA-Z][-_a-zA-Z0-9]{5,11}$/.test(value);
  return res;
};

/**
 * md5加密
 * @param {string} value 加密字符串
 */
export const encryptMd5 = (value: string) => {
  return md5(value);
};
