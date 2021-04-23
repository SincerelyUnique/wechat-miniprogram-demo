// 引入SDK核心类
var QQMapWX = require('./libs/qqmap-wx-jssdk.min')

App({
  globalData: {
    now: (new Date()).toLocaleString(),
    patrolForm: null,
    qqmapsdk: new QQMapWX({
      key: 'CLCBZ-O456X-ZW24B-TZVQH-CXGTJ-32BXW' // 必填
    }),
  }
});