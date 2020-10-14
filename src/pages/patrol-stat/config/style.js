// 用于给视觉统一修改颜色属性
import tooltipBg from '@/assets/images/bg_tooltip.png'
import decorateT from '@/assets/images/decoration_axisline_T.png'
import symbolLine from '@/assets/images/symbol_line.png'

export default {
  grid: {
    symbol: symbolLine,
    axisLineDecorate: decorateT,
    markLineColor: 'rgba(255, 255, 255, 0.1)',
    splitColor: 'rgba(229, 252, 255, 0.10)',
    axisLabelColor: 'rgba(255, 255, 255, 0.6)',
    left: {
      axisLabelColor: 'rgba(53,196,252,1)',
      axisTickColor: 'rgba(0, 113, 255, 0.50)'
    },
    right: {
      axisLabelColor: 'rgba(255, 255, 255, 0.6)',
      axisTickColor: 'rgba(255, 255, 255, 0.6)'
    },
    axisPointerColor: {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [
        { offset: 0, color: 'rgba(255,255,255,0.84)' },
        { offset: 1, color: 'rgba(255,255,255,0)' }
      ]
    }
  },
  normal: {
    barColor: {
      type: 'linear',
      x: 0,
      y: 1,
      x2: 0,
      y2: 0,
      colorStops: [
        { offset: 0, color: '#00F1FF' },
        { offset: 1, color: '#0099FE' }
      ]
    },
    lineColor: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [
        { offset: 0, color: '#FFFFFF' },
        { offset: 1, color: '#BDFFDE' }
      ]
    },
    lineShadowColor: 'rgba(255,255,255,0.18)'
  },
  opacity: 'rgba(0,0,0,0)',
  tooltipHtml: function (params, dataMap) {
    const basicInfo = params[0]
    let listHtml = ''

    dataMap.map(e => {
      let legendBg = ''
      switch (e.icon) {
        case 'green': legendBg = 'background-image: linear-gradient(0, rgba(91, 205, 135, 1), rgba(30, 194, 148, 1));'; break
        case 'blue': legendBg = 'background-image: linear-gradient(0, rgba(77, 227, 255, 1), rgba(8, 136, 245, 1));'; break
        case 'yellow': legendBg = 'background-image: linear-gradient(0, rgba(255, 221, 93, 1), rgba(255, 134, 19, 1));'; break
        case 'white': legendBg = 'background-image: linear-gradient(0, rgba(255, 255, 255, 1), rgba(177, 232, 255, 1));'; break
      }
      // basicInfo.value[e.key] 取值
      listHtml += `
        <div style="margin-top:6px;">
        <span style="display:inline-block; height:10px; width: 4px; ${legendBg}"></span>
          <span style="color:rgba(255,255,255,0.5)">${e.label}</span>
          <span style="float:right;">
            <span style="font-family: DINAlternate-Bold;margin-left:6px;margin-right:2px;">${basicInfo.value[e.key]}</span>${e.unit || '%'}
          </span>
        </div>`
    })
    return `
      <div style="color:#F3FAFF;font-size:12px;width:140px;box-sizing:border-box;padding:14px;background:url(${tooltipBg}) no-repeat;background-size: 100% 100%;">
        <div>${basicInfo.name}</div>
        <div>
          ${listHtml}
        </div>
      </div>`
  }
}
