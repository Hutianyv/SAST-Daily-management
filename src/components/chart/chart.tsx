import {VChart} from '@visactor/taro-vchart';
import {useEffect, useState} from "react";

const ChartComponent = ({data}) => {
  // 1. 准备图表配置项与数据
  const [spec,setSpec] = useState({
    data: [
      {
        id: 'data',
        values: data
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
  useEffect(() => {
    setSpec(prevSpec => ({
      ...prevSpec,
      data: [
        {
          ...prevSpec.data[0],
          values: data
        }
      ]
    }));
  }, [data]);

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
