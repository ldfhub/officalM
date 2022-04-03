import html2canvas from 'html2canvas';
// 截图，保存图片
export const downloadImg = (dom:any, fileName:string, scale = 1, addheight = 0) => {
  const opts = {
      scale: scale,
      allowTaint: true, // 允许加载跨域的图片
      tainttest: true, // 检测每张图片都已经加载完成
      height: dom.scrollHeight + addheight
  };
  html2canvas(dom, opts).then((canvas) => {
      canvas.toBlob(blob => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.download = fileName;// a标签添加属性
          link.style.display = 'none';
          link.href = url;
          document.body.appendChild(link);
          link.click();// 执行下载
          URL.revokeObjectURL(url); // 释放url
          document.body.removeChild(link);// 释放标签
      });
  });
}

/**
  * 转化中文数字
  * @param {String} num 需要转化的数字
*/
export const toChinesNum = (num:any) => {
  const changeNum = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  let newNum = '';
  const arr = num.toString().split('');
  arr[0] = parseInt(arr[0]) - 1;
  if (arr[0] === -1 && arr.length === 1) { return '零'; }
  if (arr.length > 1) {
      arr[1] = parseInt(arr[1]) - 1;
      if (!arr[0]) {
          newNum = !arr[0] && arr[1] === -1 ? changeNum[9] : changeNum[9] + changeNum[arr[1]];
      } else {
          newNum = (changeNum[arr[0]] + changeNum[9]) + (changeNum[arr[1]] ? changeNum[arr[1]] : '');
      }
  } else {
      newNum = changeNum[arr[0]];
  }
  return newNum;
};
