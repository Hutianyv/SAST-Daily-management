import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.scss";

export default function Workspace() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className="workspace">
      <Text>Hello world!345</Text>
    </View>
  );
}