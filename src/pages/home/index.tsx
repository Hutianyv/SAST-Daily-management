import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Layout from "../layout";
import { cameraAuth } from "@/utils/authority/Auth"
import "./index.scss";


export default function Home() {

  const scan = async () => {
    try {
      const res = await Taro.scanCode({
        onlyFromCamera: true,
      });
      console.log('扫描结果:', res.result);

    } catch (err) {
      console.log('扫描失败:', err);
    }
  };
  const startScan = async () => {
    try {
      const hasCameraAuth = await cameraAuth();
    if (hasCameraAuth) {
      scan();
    } else {
      console.log('未能相机权限，无法进行扫描');
    }
    } catch (err) {
      console.log('相机权限获取失败:', err);
    }
  };

  return (
    <Layout>
      <View id="home-container">
        <View className="scan" onClick={startScan}></View>
        <Text>请扫描工位铭牌二维码进行签到</Text>
      </View>
    </Layout>
  );
}