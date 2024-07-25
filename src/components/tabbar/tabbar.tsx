import Taro from "@tarojs/taro";
import { View, Text, Image} from "@tarojs/components";
import "./tabbar.scss";
import RoutePath from "@/constants/route";
import { TABBAR } from "@/constants/assets";
const TabBar = () => {
  const currentPath = Taro.getCurrentInstance().router?.path;
  const homeIconSrc = currentPath === '/pages/home/index' ? TABBAR.HOME_ACTIVE : TABBAR.HOME;
  const columnIconSrc = currentPath === '/pages/column/index' ? TABBAR.COLUMN_ACTIVE : TABBAR.COLUMN;
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
