import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import "./tabbar.scss";
import RoutePath from "@/constants/route";

const TabBar = () => {
  const switchTab = (url) => {
    Taro.reLaunch({ url });
  };

  return (
    <View className="tabbar">
      <View className="tab-item" onClick={() => switchTab(RoutePath.HOME)}>
        <Text className="tab-text">Home</Text>
      </View>
      <View className="tab-item" onClick={() => switchTab(RoutePath.ME)}>
        <Text className="tab-text">Me</Text>
      </View>
    </View>
  );
};

export default TabBar;
