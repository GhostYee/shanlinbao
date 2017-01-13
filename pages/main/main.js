// pages/main/main.js
Page({
  data: {
    imgUrls: ["http://image.shanlinbao.com/bao/banner/2016/04/25/8ef2fbc1-dd27-43e0-856b-d09328c47ff6.png", "http://image.shanlinbao.com/bao//banner/2017/01/10/b3263e6a-3c46-4db0-a6c0-cb42183d7cde.jpg", "http://image.shanlinbao.com/bao//banner/2017/01/10/11308c24-efc0-41d2-a038-b8daa2bcd06c.png"],

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
    var context = wx.createContext();
    context.fill();
    context.setLineWidth(6);
    context.beginPath();
    context.setStrokeStyle('#eaeaea');
    context.setFillStyle('#eaeaea')
    context.arc(100, 60, 50, 0, 2 * Math.PI, true);
    context.stroke();
    context.closePath();
    context.setStrokeStyle('#ff7460');
    context.setFillStyle('#ff7460')
    context.beginPath();
    context.arc(100, 60, 50, 0, Math.PI, true);
    context.stroke();
    context.closePath();
    context.setFontSize(20);
    context.fillText('抢购', 80, 65);
    wx.drawCanvas({
      canvasId: 'firstCanvas',
      actions: context.getActions()
    })
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})