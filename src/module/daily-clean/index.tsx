import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function DailyClean() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="daily-clean">
      <Text>Hello world!2</Text>
    </View>
  );
}