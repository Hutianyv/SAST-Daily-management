import React, { useEffect } from 'react';
import { View } from '@tarojs/components';
import F2 from '@antv/f2';
import Taro from "@tarojs/taro";

interface PieChartProps {
  data: { name: string; value: number }[];
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  useEffect(() => {
    // 获取canvas的上下文
    const canvasNode = Taro.createSelectorQuery().select('#chart').node();
    canvasNode.fields({ node: true, size: true }).exec((res) => {
      const canvas = res[0].node;
      const context = canvas.getContext('2d');

      // 初始化 F2 Chart
      const chart = new F2.Chart({
        context,
        width: 300,
        height: 300,
      });

      // 配置数据源
      chart.source(data);

      // 配置饼图
      chart.interval().position('name*value').color('name').adjust('stack');

      // 渲染图表
      chart.render();

      return () => {
        chart.destroy();
      };
    });
  }, [data]);

  return (
    <View>
      <canvas id="chart" style={{ width: '100%', height: '300px' }} />
    </View>
  );
};

export default PieChart;
