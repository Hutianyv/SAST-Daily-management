import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import Layout from "../layout";
import "./index.scss";
import RoutePath from "@/constants/route";
export default function Column(): JSX.Element {
  function navigate(url) {
    Taro.navigateTo({ url });
  }
  return (
    <Layout>
      <View id="column-container">
        <Text
          className="to-checkin"
          onClick={() => {
            navigate(RoutePath.CHECKIN);
          }}
        >
          签到打卡
        </Text>
        <Text
          className="to-clean"
          onClick={() => {
            navigate(RoutePath.DAILYCLEAN);
          }}
        >
          日常卫生打扫
        </Text>
        <Text
          className="to-workspace"
          onClick={() => {
            navigate(RoutePath.WORKSPACE);
          }}
        >
          工位调动
        </Text>
      </View>
    </Layout>
  );
}
