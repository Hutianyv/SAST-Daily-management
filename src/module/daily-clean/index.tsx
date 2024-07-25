import { View, Text, Image} from "@tarojs/components";
import Drawer from "@/components/drawer/drawer";
import { DEPARTMENTS } from "@/constants/data";
import { DRAWER } from "@/constants/assets";
import "./index.scss";

export default function DailyClean() {

  return (
    <View id="daily-clean">
      {DEPARTMENTS.map((department) => (
        <Drawer key={department.department_name}>
          <Text>{department.department_name}</Text>
          <Text>{`(${department.memberCount})`}</Text>
          <Image src={DRAWER.RIGHT_ARRAY} style={{width:'10px',height:'10px'}} />
        </Drawer>
      ))}
    </View>
  );
}