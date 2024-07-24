export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/me/index'
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
