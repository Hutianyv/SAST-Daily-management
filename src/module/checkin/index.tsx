import {Text, View} from "@tarojs/components";
import "./index.scss";
import DonutChart from "@/components/chart/chart";
import {useState} from "react";

export default function Checkin() {

  console.log("进入checkin页面");

  const [percentage, setPercentage] = useState(0);//已签到的人数的百分比
  const [signedInList, setSignedInList] = useState(["1", "2", "3"]);
  const [notSignedInList, setNotSignedInList] = useState(["4", "5", "6"]);

  // request.get('').then(res => {
  //   setPercentage(res.data.percentage);
  // }
  // setPercentage(30)

  const handleFn = (item) => {
    console.log(item);
  }
  const data = [
    {value: 40, name: "已签到"},
    {value: 60, name: "未签到"},
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
