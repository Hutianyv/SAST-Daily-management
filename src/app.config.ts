export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/column/index'
  ],
  subPackages: [
    {
      root: 'module',
      pages: [
        'checkin/index',
        'daily-clean/index',
        'workspace/index'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black' ,
  },
  
})
