import {View} from "@tarojs/components";
import "./index.scss";
import PieChart from "@/components/chart/PieChart";
import DonutChart from "@/components/chart/donutChart";
import {useState} from "react";

export default function Checkin() {

  console.log("进入checkin页面");

  const [percentage, setPercentage] = useState(0);//已签到的人数的百分比

  // request.get('').then(res => {
  //   setPercentage(res.data.percentage);
  // }
  // setPercentage(30)

  const handleFn = (item) => {
    console.log(item);
  }
  const data = [
    {value: 0.3, color: '#ff6370'}, //
    {value: 0.7, color: '#3ceb36'}, // 未签到的百分比
  ];
  return (
    <View className="checkin">
      <PieChart data={data} width={300} height={400} onSectorClick={handleFn}></PieChart>
      <DonutChart></DonutChart>
    </View>
  );
}
