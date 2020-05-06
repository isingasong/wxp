// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentView: "blue",
    images: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588674502806&di=f898ee7bcedc452743007a03a8ef96c3&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588674502806&di=ca2b7cff39f079e09733c2ca520cf929&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853", "http://attach.bbs.miui.com/forum/201303/18/233119quyrec7to3ws3rco.jpg"


    ],
    nodes: [
      { name: "img", attrs: { class: "image", src: "http://attach.bbs.miui.com/forum/201303/18/233119quyrec7to3ws3rco.jpg" } },
      {
        name: "h3",
        attrs: {
          class: "header",
        },
        children: [{
          type: "text",
          text: "hello~"
        }]
      }
    ],
    item:[
      "china",
      "korea",
      "japan"

    ],
    pick:["浙江省","杭州市","江干区"]

  },

  setScrollView(event) {
    this.setData({
      currentView: event.target.dataset.view
    })


  },

  formSubmit(event){
    console.log(event.detail.value)

  },
  inputHandler(event) {
    this.setData({
      pick:event.detail.value
    })
    console.log(event.detail.value)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})