Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		orders: [],
    keyword: '', // 搜索关键词
    sortOptions: ['默认排序', '按字母排序'], // 排序方式选项
    sortIndex: 0, // 当前选中的排序方式索引
    isDescOrder: false // 是否倒序
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
  },

  // TODO: 搜索
  onSearchInput(event) {
    // const { value } = event.detail;
    // this.setData({ keyword: value });

    this.setData({ staffs: [
      {name:"Search input"}
    ] });
  
  },

  // TODO: 清空搜索
  onSearchClear() {
    this.setData({ staffs: [
      {name:"Search clear"}
    ] });

    // this.fetchListData();
  },

  viewDetails(event) {
    const { id } = event.currentTarget.dataset;
    console.log(id);
		wx.navigateTo({
      url: `/pages/orders/details/orderDetails?id=${id}`,
		});
	},
});