import {Text, View} from "@tarojs/components";
import "./index.scss";
import DonutChart from "@/components/chart/chart";
import {useEffect, useState} from "react";
import request from "@/utils/request";
import {ChartData, CheckinListResponse} from "@/types";


export default function Checkin() {

  const [signedList, setSignedList] = useState(["1", "2", "3"]);
  const [unsignedList, setUnsignedList] = useState(["4", "5", "6"]);
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    request.get<CheckinListResponse>('/getCheckinList').then(res => {
      console.log(res)
      setSignedList(res.data.signedList);
      setUnsignedList(res.data.unsignedList);
    });
  }, []);

  useEffect(() => {
    setData([
      {value: signedList.length, name: "已签到"},
      {value: unsignedList.length, name: "未签到"},
    ]);
  }, [signedList, unsignedList]);

  console.log("进入checkin页面");

  return (
    <View>
      <View className="checkin">
        <DonutChart data={data}></DonutChart>
      </View>
      <View className="list-container">
        <View className="list-section">
          <Text className="list-title">已签到</Text>
          <View className="list">
            {signedList.map((name) => (
              <Text key={name} className="list-item">{name}</Text>
            ))}
          </View>
        </View>
        <View className="list-section">
          <Text className="list-title">未签到</Text>
          <View className="list">
            {unsignedList.map((name) => (
              <Text key={name} className="list-item">{name}</Text>
            ))}
          </View>
        </View>
      </View>
    </View>

  );
}
