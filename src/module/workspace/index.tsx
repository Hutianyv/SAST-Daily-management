import {View, Text, Button} from "@tarojs/components";
import "./index.scss";
import {useState} from "react";
import AttendanceTable from "@/components/attendanceTable/attendanceTable";

export default function Workspace() {

  const [title, setTitle] = useState("101-西区")
  const [attendanceData, setAttendanceData] = useState([
    { seatNumber: 'A1', name: '张三', status: '绑定中', lastCheckInTime: '2023-07-27 08:00' },
    { seatNumber: 'A2', name: '李四', status: '已解绑', lastCheckInTime: '2023-07-26 18:00' },
    { seatNumber: 'A3', name: '王五', status: '绑定中', lastCheckInTime: '2023-07-27 08:05' },
    // 其他记录...
  ]);
  return (
    <View className="workspace">
      <View className="one">
        <Button className="btn" onClick={()=>setTitle("101-东区")}>101-东区</Button>
        <Button className="btn" onClick={()=>setTitle("101-中区")}>101-中区</Button>
        <Button className="btn" onClick={()=>setTitle("101-西区")}>101-西区</Button>
      </View>
      <View className="one">
        <Button className="btn" onClick={()=>setTitle("213教室")}>213教室</Button>
        <Button className="btn" onClick={()=>setTitle("332教室")}>332教室</Button>
      </View>
      <Text className="tit">{title}</Text>
      <AttendanceTable data={attendanceData}></AttendanceTable>
    </View>
  );
}
