import Taro from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { useEffect, useState } from "react";
import Drawer from "@/components/drawer/drawer";
import { DEPARTMENTS } from "@/constants/data";
import { DRAWER } from "@/constants/assets";
import RoutePath from "@/constants/route";
import "./index.scss";


// 递归查找部门函数
function findDepartment(name, departments) {
  for (let department of departments) {
    if (department.department_name === name) {
      return department;
    }
    if (department.sub_departments) {
      const found = findDepartment(name, department.sub_departments);
      if (found) return found;
    }
  }
  return null;
}

function MapDrawers({ mapDeparts, onClickDepartment }) {
  return mapDeparts.map((department) => (
    <Drawer
      key={department.department_name}
      onClick={() => onClickDepartment(department)}
    >
      <Text>{department.department_name}</Text>
      <Text>{`(${department.memberCount})`}</Text>
      <Image src={DRAWER.RIGHT_ARRAY} style={{ width: '10px', height: '10px' }} />
    </Drawer>
  ));
}

export default function DailyClean() {
  const params = Taro.getCurrentInstance().router?.params;
  const [selectedDepartment, setSelectedDepartment] = useState(params?.department || '');
  const [mapDeparts, setMapDeparts] = useState(DEPARTMENTS);

  useEffect(() => {
    if (params && params.department) {
      setSelectedDepartment(params.department);
    }
  }, [params]);

  useEffect(() => {
    if (selectedDepartment) {
      const department = findDepartment(selectedDepartment, DEPARTMENTS);
      if (department) {
        setMapDeparts(department.sub_departments || [department]);  //后面把这个第二个数组整理一下改成显示用户就好了
      } else {
        setMapDeparts(DEPARTMENTS); 
      }
    } else {
      setMapDeparts(DEPARTMENTS); 
    }
  }, [selectedDepartment]);

  const handleDepartmentClick = (department) => {
    Taro.navigateTo({
      url: `${RoutePath.DAILYCLEAN}?department=${department.department_name}`
    });
  };

  return (
    <View id="daily-clean">
      <MapDrawers mapDeparts={mapDeparts} onClickDepartment={handleDepartmentClick} />
    </View>
  );
}
