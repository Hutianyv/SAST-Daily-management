import Taro from '@tarojs/taro';

/**
 * 下载并缓存图片数据到本地存储
 * @param {string} url 图片的URL
 * @returns {Promise<boolean>} 如果成功缓存和获取返回true, 否则返回false
 */
export const cacheImageData = async (url) => {
  try {
    const downloadRes = await Taro.downloadFile({ url });
    if (downloadRes.statusCode === 200) {
      const base64Data = await new Promise((resolve, reject) => {
        Taro.getFileSystemManager().readFile({
          filePath: downloadRes.tempFilePath,
          encoding: 'base64',
          success: (res) => resolve(res.data),
          fail: (err) => reject(err)
        });
      });
      Taro.setStorageSync(url, base64Data);

      return true;
    } else {
      console.error('下载文件失败，状态码:', downloadRes.statusCode);
      return false;
    }
  } catch (error) {
    console.error('操作失败:', error);
    return false;
  }
};
