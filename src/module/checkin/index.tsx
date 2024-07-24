import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Checkin() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="checkin">
      <Text>Hello world!1</Text>
    </View>
  );
}