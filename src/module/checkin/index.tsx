import {Text, View} from "@tarojs/components";
import "./index.scss";
import DonutChart from "@/components/chart/chart";
import {useState} from "react";
import request from "@/utils/request";

export default function Checkin() {

  console.log("进入checkin页面");

  const [signedInList, setSignedInList] = useState(["1", "2", "3"]);
  const [notSignedInList, setNotSignedInList] = useState(["4", "5", "6"]);

  request.get('/getCheckinList').then(res => {
    setSignedInList(res.data.signedInList);
    setNotSignedInList(res.data.notSignedInList);
  });

  const data = [
    {value: signedInList.length, name: "已签到"},
    {value: notSignedInList.length, name: "未签到"},
  ];
  return (
    <View>
      <View className="checkin">
        <DonutChart data={data}></DonutChart>
      </View>
      <View className="list-container">
        <View className="list-section">
          <Text className="list-title">已签到</Text>
          <View className="list">
            {signedInList.map((name) => (
              <Text key={name} className="list-item">{name}</Text>
            ))}
          </View>
        </View>
        <View className="list-section">
          <Text className="list-title">未签到</Text>
          <View className="list">
            {notSignedInList.map((name) => (
              <Text key={name} className="list-item">{name}</Text>
            ))}
          </View>
        </View>
      </View>
    </View>

  );
}
