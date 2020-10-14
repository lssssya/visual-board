// 用于给视觉统一修改颜色属性
export default {
  // 三次贝塞尔曲线的各种参数
  // bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
  bezierCurve: [
    {
      finalBezier: [72, 75, 60, 10, 176, 10],
      processBezier: [72, 75, 60, 75, 176, 75],
      width: 20,
      colorType: 'yellow'
    }, {
      finalBezier: [72, 75, 60, 140, 176, 140],
      processBezier: [72, 75, 60, 75, 176, 75],
      width: 8,
      colorType: 'blue'
    }, {
      finalBezier: [72, 75, 60, 55, 176, 55],
      processBezier: [72, 75, 60, 75, 176, 75],
      width: 20,
      colorType: 'yellow'
    }, {
      finalBezier: [72, 75, 60, 95, 176, 95],
      processBezier: [72, 75, 60, 75, 176, 75],
      width: 14,
      colorType: 'blue'
    }
  ],
  bezierColor: {
    yellow: {
      start: 'rgba(255,231,13,0.6)',
      end: 'rgba(255,121,0,0.6)'
    },
    blue: {
      start: 'rgba(255,173,0,0.6)',
      end: 'rgba(134,255,254,0.6)'
    }
  },
  opacity: 'rgba(0,0,0,0)'
}
