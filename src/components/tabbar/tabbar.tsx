import Taro from "@tarojs/taro";
import { View, Text, Image} from "@tarojs/components";
import "./tabbar.scss";
import RoutePath from "@/constants/route";
import HOME from "@/assets/tabbar/home.svg";
import COLUMN from "@/assets/tabbar/column.svg";
import HOME_ACTIVE from "@/assets/tabbar/home-active.svg";
import COLUMN_ACTIVE from "@/assets/tabbar/column-active.svg";
const TabBar = () => {
  const currentPath = Taro.getCurrentInstance().router?.path;
  const homeIconSrc = currentPath === '/pages/home/index' ? HOME_ACTIVE : HOME;
  const columnIconSrc = currentPath === '/pages/column/index' ? COLUMN_ACTIVE : COLUMN;
  const switchTab = (url) => {
    Taro.reLaunch({ url });
  };

  return (
    <View id="tabbar">
      <View className="tab-item" onClick={() => switchTab(RoutePath.HOME)}>
        <Image src = {homeIconSrc} style={{width:'50px',height:'50px'}}></Image>
        <Text>首页</Text>
      </View>
      <View className="tab-item" onClick={() => switchTab(RoutePath.ME)}>
        <Image src = {columnIconSrc} style={{width:'50px',height:'50px'}}></Image>
        <Text>栏目</Text>
      </View>
    </View>
  );
};

export default TabBar;
