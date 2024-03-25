// pages/courses/list/courseList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: [
      {
        id: 1,
        name: '象棋飞刀与布局'
      }
    ],
    keyword: '', // 搜索关键词
    sortOptions: ['默认排序', '按字母排序'], // 排序方式选项
    sortIndex: 0, // 当前选中的排序方式索引
    isDescOrder: false // 是否倒序
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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
      url: `/pages/courses/details/courseDetails?id=${id}`,
		});
	},
});