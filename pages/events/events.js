// pages/events.js
import helper from '../../libs/helper'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    greeting: ""
  },

  greet(greeting){
    return greeting[Math.floor(Math.random() * greeting.length)];
  },

  tapGreeting(){
    console.log('onTap')
    this.setData({
      greeting: helper.randItem(app.globalData.greeting)
    })

  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('onLoad')
    this.setData({
      greeting: helper.randItem(app.globalData.greeting)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('onReady')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {
    console.log('onShow')
    console.log(options)

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('onHide')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('onUnload')

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh')

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('onReachBottom')

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log('onShareAppMessage')

  },

  /**
   * 错误监听
   */
  onError: function(options) {},



/**
 * 滑动监听
 */
  onPageScroll(calculations){
    console.log(calculations)
  }
})