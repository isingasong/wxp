// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[
      {
        id:0,
        latitude: 30.317235,
        longitude: 120.258323,
        iconPath:'../../assets/icons/pin.png',
        width:22,
        height:44,
        callout:{
          content:"绿谷",
          fontSize:14,
          color:"#000",
          padding:8,
          bgColor:'#ffffff',
          borderRadius:4,
          boxShadow:'4px 8px 16px 0 rgba(0,0,0,0.18)'
        }
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    const innerAudioContext = wx.createAudioContext()
    innerAudioContext.autoPlay = true
    innerAudioContext.src = "https://resources.ninghao.net/deng-deng-deng.mp3"
    innerAudioContext.onPlay(() => {
      console.log("play")
    })

  },

  play() {
    console.log("play")

  },
  pause() {
    console.log("pause")
  },
  ended() {
    console.log("ended")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})