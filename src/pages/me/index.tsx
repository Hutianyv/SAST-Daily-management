import { View, Text } from "@tarojs/components";
import Layout from "../layout";
import "./index.scss";

export default function Me() {
  return (
    <Layout>
      <View className="me">
        <Text>Hello world!我是me</Text>
      </View>
    </Layout>
  );
}