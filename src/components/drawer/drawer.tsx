import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import "./drawer.scss";


const Drawer = (props) => {

  return(
    <View id="drawer" {...props}>
      {props.children}
    </View>
  )
};

export default Drawer;