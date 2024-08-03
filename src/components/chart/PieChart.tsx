import React, {useEffect, useState} from 'react';
import {Canvas, View} from '@tarojs/components';
import Taro from '@tarojs/taro';

interface PieChartProps {
  data: { value: number; color: string }[];
  width: number;
  height: number;
  className?: string;
  onSectorClick?: (data: { value: number; color: string }) => void;

}

interface CanvasTouchEvent {
  type: string;
  timeStamp: number;
  target: any; // 可以根据实际情况进一步定义
  currentTarget: any; // 可以根据实际情况进一步定义
  detail: {
    x: number;
    y: number;
  };
}


const PieChart: React.FC<PieChartProps> = ({data, width, height, className, onSectorClick}) => {
  const canvasId = 'pieCanvas';
  // 半径
  const radius = Math.min(width, height) / 3;
  // 中心点坐标，圆心
  const centerX = width / 2;
  const centerY = height / 2;
  // 选中的扇形索引
  const [selectedSectorIndex, setSelectedSectorIndex] = useState<number | null>(null);
  // 动画状态
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    drawChart();
  }, [data, width, height, selectedSectorIndex]);

  const drawChart = () => {
    const context = Taro.createCanvasContext(canvasId);
    let startAngle = -Math.PI / 2;
    const scale = selectedSectorIndex !== null ? 1.02 : 1; // 放大倍数

    data.forEach((item, index) => {
      const {value, color} = item;
      const endAngle = startAngle + value * 2 * Math.PI;

      context.beginPath();
      context.moveTo(centerX, centerY);
      if (selectedSectorIndex === index) {
        context.arc(centerX, centerY, radius * scale, startAngle, endAngle);
      } else {
        context.arc(centerX, centerY, radius, startAngle, endAngle);
      }
      context.closePath();
      context.setFillStyle(color);
      context.fill();

      startAngle = endAngle;
    });

    context.draw();
  };

  const handleCanvasClick = (event: CanvasTouchEvent) => {
    if (animating) return; // 动画进行中时不接受新的点击事件
    console.log("click")
    // 获取点击位置
    const {x, y} = event.detail;
    console.log(x, " ", y)

    //计算点击点与中心点之间的极坐标角度
    const angle = Math.atan2(y - centerY, x - centerX);
    //如果 angle 小于 -Math.PI / 2，则 将angle转化位正的
    let adjustedAngle = angle < -Math.PI / 2 ? angle + 2 * Math.PI : angle;

    // 计算点击点与中心点之间的距离，判断是否在饼图内
    const distance = (x - centerX) ** 2 + (y - centerY) ** 2;
    console.log("distance: ", distance, " radius: ", radius**2)

    // 如果在饼图内，判断点击的位置是否在某个扇形内
    if (distance ** 2 <= radius**2) {
      console.log("click in pie chart")
      let startAngle = -Math.PI / 2;

      for (let index = 0; index < data.length; index++) {
        const {value} = data[index];
        const endAngle = startAngle + value * 2 * Math.PI;

        // 判断点击的位置是否在当前扇形内
        if (adjustedAngle >= startAngle && adjustedAngle <= endAngle) {
          setAnimating(true);
          setSelectedSectorIndex(index);
          if (onSectorClick) onSectorClick(data[index]);

          // 触发动画效果
          setTimeout(() => {
            setSelectedSectorIndex(null);
            setAnimating(false);
          }, 300); // 回弹效果持续300毫秒
          break;
        }

        startAngle = endAngle;
      }
    }
  };
  return (
    <View>
      <Canvas
        onClick={handleCanvasClick}
        className={className}
        canvasId={canvasId}
        style={{width: `${width}px`, height: `${height}px`}}
      />
    </View>
  );
};

export default PieChart;
