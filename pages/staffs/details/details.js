Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		staff: {
      id: 1,
      name: "hongyuan"
    }
	},
  onLoad() {
    this.fetchListData();
  },

  fetchListData() {
    // const { filterOptions, filterIndex, keyword, sortOptions, sortIndex } = this.data;

    // // 构造请求参数
    // const params = {
    //   filterOption: filterOptions[filterIndex],
    //   keyword,
    //   sortOption: sortOptions[sortIndex]
    // };

    // // 调用后端接口获取列表数据
    // wx.request({
    //   url: '后端列表接口的URL',
    //   method: 'GET',
    //   data: params,
    //   success: res => {
    //     const { data } = res.data;
    //     this.setData({ items: data });
    //   },
    //   fail: error => {
    //     console.error('请求列表数据失败', error);
    //   }
    // });
  }

});