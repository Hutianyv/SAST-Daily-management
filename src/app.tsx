import { PropsWithChildren } from 'react';
import { useLaunch } from '@tarojs/taro';
import { View } from '@tarojs/components';
import '@nutui/nutui-taro/dist/style.css';
import './app.scss';

function App(props: PropsWithChildren<any>){
  useLaunch(() => {
    console.log('App launched.');
  });

  return (
    
      <View>
        {props.children}
      </View>
    
  )
}

export default App;