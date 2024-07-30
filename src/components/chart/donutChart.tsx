import {useEffect, useRef} from 'react';
import {View} from '@tarojs/components';
import {EChart} from 'echarts-taro3-react';

const DonutChart = () => {
  const chartRef = useRef<EChart>(null);

  useEffect(() => {
    const chart = chartRef.current;
    console.log(chart);
    if (chart) {
      chart.refresh({
        title: {
          text: '简单圆环饼图',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: 'bottom',
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '70%'], // 内半径和外半径
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '20',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {value: 1048, name: '搜索引擎'},
              {value: 735, name: '直接访问'},
              {value: 580, name: '邮件营销'},
              {value: 484, name: '联盟广告'},
              {value: 300, name: '视频广告'},
            ],
          },
        ],
      });
    }
  }, []);

  return (
    <View className="v">
      <EChart ref={chartRef} canvasId="myChart"/>
    </View>
  );
};

export default DonutChart;
