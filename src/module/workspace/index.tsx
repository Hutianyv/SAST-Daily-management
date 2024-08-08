import {View, Text, Button} from "@tarojs/components";
import "./index.scss";
import {useEffect, useState} from "react";
import AttendanceTable from "@/components/attendanceTable/attendanceTable";
import request from "@/utils/request";

export default function Workspace() {

  const [title, setTitle] = useState("101-西区")//默认第一次显示101-西区
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    request.get('/attendance?roomName=101-西区').then(res => {
      setAttendanceData(res.data);
    });
  }, []);

  const handleClick = (roomName:string) => {
    setTitle(roomName);
    request.get('/attendance?roomName='+roomName).then(res => {
      setAttendanceData(res.data);
    });
  }
  return (
    <View className="workspace">
      <View className="one">
        <Button className="btn" onClick={()=>handleClick("101-东区")}>101-东区</Button>
        <Button className="btn" onClick={()=>handleClick("101-中区")}>101-中区</Button>
        <Button className="btn" onClick={()=>handleClick("101-西区")}>101-西区</Button>
      </View>
      <View className="one">
        <Button className="btn" onClick={()=>handleClick("213教室")}>213教室</Button>
        <Button className="btn" onClick={()=>handleClick("332教室")}>332教室</Button>
      </View>
      <Text className="tit">{title}</Text>
      <AttendanceTable data={attendanceData}></AttendanceTable>
    </View>
  );
}
