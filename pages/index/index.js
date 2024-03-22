//index.js
//获取应用实例
const app = getApp()
const myRequest = require('../../api/index.js');
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		imgList: [
			'/image/swiper/music.jpeg',
			'/image/swiper/music2.jpg',
		],
		navList: [
      {
				icon: '/image/nav-icon/bangdan.png',
				events: 'members',
				text: '学员管理'
      },
			{
				icon: '/image/nav-icon/gushi.png',
				events: 'staffs',
				text: '员工管理'
      },
      {
				icon: '/image/nav-icon/diantai.png',
				events: 'orders',
				text: '课表管理'
      },
    ],
		swiperCurrent: 0,
	},
	onLoad: function (options) {
		const that = this
		myRequest.getData().then(res => {
			const {guess} = res.data
			that.setData({
				showitem: true,
				guess: guess.list.slice(0, 3),
			})
		}).catch(err => {
			console.log('error :>> ', err);
			that.setData({
				showitem: false
			})
		})
	},
	//轮播图改变事件
	swiperChange: function (e) {
		this.setData({
			swiperCurrent: e.detail.current
		})
	},

	staffs(e) {
		wx.navigateTo({
			url: '/pages/staffs/list/list',
		})
  },

  orders(e) {
		wx.navigateTo({
			url: '/pages/orders/list/orderList',
		})
	}
})