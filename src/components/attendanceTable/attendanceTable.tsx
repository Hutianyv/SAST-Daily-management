import React, {useState} from "react";
import {Text, View} from "@tarojs/components";
import "./attendanceTable.scss";
import {Button, Popup} from '@nutui/nutui-react-taro'

interface AttendanceRecord {
  seatNumber: string;
  name: string;
  status: string;
  lastCheckInTime: string;
}

interface AttendanceTableProps {
  data: AttendanceRecord[];
}

const AttendanceTable: React.FC<AttendanceTableProps> = ({data}) => {

  const [showPop, setShowPop] = useState(false);

  const [curItem, setCurItem] = useState<AttendanceRecord | null>(null);

  const handleOperation = (record: AttendanceRecord) => {
    setShowPop(true)
    setCurItem(record);
  }
  const handleUnbind = () => {
    console.log("解绑")
    setShowPop(false)
    console.log('解绑成功')
  }

  const handleBind = () => {
    console.log("绑定")
    setShowPop(false)
    console.log('绑定成功')
  }
  return (
    <View className="table-container">
      <View className="table-header">
        <Text className="table-cell">座位号</Text>
        <Text className="table-cell">姓名</Text>
        <Text className="table-cell">状态</Text>
        <Text className="table-cell">上次打卡时间</Text>
      </View>
      {data.map((record, index) => (
        <View className="table-row" key={index}>
          <Text className="table-cell">{record.seatNumber}</Text>
          <Text className="table-cell">{record.name}</Text>
          <Text className="table-cell" style={{
            backgroundColor: record.status === '绑定中' ? 'green' : 'red',
          }} onClick={() => handleOperation(record)}
          >
            {record.status}
          </Text>
          <Text className="table-cell">{record.lastCheckInTime}</Text>
        </View>
      ))}
      <Popup
        visible={showPop}
        onClose={() => {
          setShowPop(false);

          console.log("关闭")
        }}
        className={`popup-center ${showPop ? 'visible' : ''}`}
      >
        <View>
          {curItem?.status === '绑定中' ?
            <Button className="nut-btn" onClick={handleUnbind}>解绑</Button>
            : <Button className="nut-btn" onClick={handleBind}>绑定</Button>
          }
        </View>
      </Popup>
    </View>
  );
};
export default AttendanceTable;
