import Taro from '@tarojs/taro';
/**
 * 这里管理全部权限获取逻辑
 * @returns {Promise<boolean>} 如果成功获取权限则返回true，否则返回false
 */
export const cameraAuth = async (): Promise<boolean> => {
  try {
    const settings = await Taro.getSetting();
    if (!settings.authSetting['scope.camera']) {
      await Taro.authorize({ scope: 'scope.camera' });
      console.log('已获取相机权限');
      return true;
    } else {
      console.log('已有相机权限');
      return true;
    }
  } catch (error) {
    console.log('相机权限获取失败或被拒绝:', error);
    return false;
  }
};