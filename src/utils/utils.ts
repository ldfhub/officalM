import html2canvas from 'html2canvas';
// 截图
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
