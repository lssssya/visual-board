// 用于给视觉统一修改颜色属性
import tooltipBg from '@/assets/images/bg_tooltip.png'
import decorateT from '@/assets/images/decoration_axisline_T.png'
import symbolLine from '@/assets/images/symbol_line.png'

export default {
  grid: {
    symbol: symbolLine,
    axisLineDecorate: decorateT,
    markLineColor: 'rgba(255, 255, 255, 0.1)',
    axisLabelColor: 'rgba(255, 255, 255, .6)',
    axisTickColor: 'rgba(255, 255, 255, 0.50)',
    splitColor: 'rgba(229, 252, 255, 0.10)',
    labelColor: 'rgba(158, 252, 255, 0.7)',
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
    lineColor: {
      green: {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
          { offset: 0, color: 'rgba(91,205,135,1)' },
          { offset: 1, color: 'rgba(30,194,148,1)' }
        ]
      },
      blue: {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
          { offset: 0, color: 'rgba(77,227,255,1)' },
          { offset: 1, color: 'rgba(8,136,245,1)' }
        ]
      },
      yellow: {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
          { offset: 0, color: 'rgba(255,221,93,1)' },
          { offset: 1, color: 'rgba(255,134,19,1)' }
        ]
      },
      lightBlue: {
        type: 'linear',
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        colorStops: [
          { offset: 0, color: 'rgba(255,255,255,1)' },
          { offset: 1, color: 'rgba(177,232,255,1)' }
        ]
      }
    },
    lineShadowColor: {
      green: 'rgba(91,205,135,0.18)',
      blue: 'rgba(77,227,255,0.18)',
      yellow: 'rgba(255,221,93,0.18)',
      lightBlue: 'rgba(255,255,255,0.18)'
    }
  },
  opacity: 'rgba(0,0,0,0)',
  tooltipHtml: function (params, dataMap) {
    const basicInfo = params[0]
    let listHtml = ''

    dataMap.map(e => {
      // basicInfo.value[e.key] 取值
      if (e.key === 'unit') return
      let legendBg = ''
      switch (e.icon) {
        case 'green': legendBg = 'background-image: linear-gradient(0, rgba(91, 205, 135, 1), rgba(30, 194, 148, 1));'; break
        case 'blue': legendBg = 'background-image: linear-gradient(0, rgba(77, 227, 255, 1), rgba(8, 136, 245, 1));'; break
        case 'yellow': legendBg = 'background-image: linear-gradient(0, rgba(255, 221, 93, 1), rgba(255, 134, 19, 1));'; break
        case 'white': legendBg = 'background-image: linear-gradient(0, rgba(255, 255, 255, 1), rgba(177, 232, 255, 1));'; break
      }
      listHtml += `
        <div style="margin-top:6px;">
        <span style="display:inline-block; height:10px; width: 4px; ${legendBg}"></span>
          <span style="color:rgba(255,255,255,0.5)">${e.label}</span>
          <span style="float:right;">
            <span style="font-family: DINAlternate-Bold;margin-left:6px;margin-right:2px;">${basicInfo.value[e.key]}</span>
          </span>
        </div>`
    })
    return `
      <div style="color:#F3FAFF;font-size:12px;width:160px;box-sizing:border-box;padding:14px;background:url(${tooltipBg}) no-repeat;background-size: 100% 100%;">
        <div>${basicInfo.name}</div>
        <div style="display: flex;flex-wrap: wrap;justify-content: space-between;">
          ${listHtml}
        </div>
      </div>`
  }
}
