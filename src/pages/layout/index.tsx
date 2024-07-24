import { View } from "@tarojs/components";
import TabBar from "@/components/tabbar/tabbar";

const Layout = ({ children }) => (
  <View className="layout">
    <View className="content">{children}</View>
    <TabBar />
  </View>
);

export default Layout;
