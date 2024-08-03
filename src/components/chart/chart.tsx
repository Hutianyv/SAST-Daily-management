import {VChart} from '@visactor/taro-vchart';
import {useState} from "react";

const ChartComponent = ({data}) => {
  // 1. 准备图表配置项与数据
  const [spec] = useState({
    data: [
      {
        id: 'data1',
        values: [
          ...data
        ]
      }
    ],
    type: 'pie',
    color: ['#3ceb36', '#ff6370'],
    outerRadius: 0.6,
    innerRadius: 0.3,
    categoryField: 'name',
    valueField: 'value',
    // legends: {
    //   visible: true
    // },
    // 添加标签配置
    label: {
      visible: true,
      textStyle: {
        fontSize: 12,
        color: '#000'
      }
    },
  });

  return (
    <VChart
      type="lark"
      spec={spec}
      canvasId="pie"
      style={{height: '35vh', width: '100%'}}
      onChartInit={() => {
        console.log('init pie');
      }}
      onChartReady={() => {
        console.log('ready pie');
      }}
      onChartUpdate={() => {
        console.log('update pie');
      }}
    />
  );
};

export default ChartComponent;
