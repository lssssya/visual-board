// 用于给视觉统一修改颜色属性
import textrueMapSelect from '@/assets/images/texture_map_select.png'
// 点位
import scatterMain from '@/assets/images/scatter_point_chief.png'
import scatterHelp from '@/assets/images/scatter_point_help.png'
import scatterCount from '@/assets/images/scatter_point_count.png'
// tooltip
import tooltipBgMain from '@/assets/images/bg_map_tooltip_main.png'
import tooltipBgMainLight from '@/assets/images/bg_map_tooltip_main_light.png'
import tooltipBgHelp from '@/assets/images/bg_map_tooltip_help.png'
import tooltipBgHelpLight from '@/assets/images/bg_map_tooltip_help_light.png'
import tooltipBgCount from '@/assets/images/bg_map_tooltip_count.png'
import tooltipBgCountLight from '@/assets/images/bg_map_tooltip_count_light.png'
import tooltipBgArea from '@/assets/images/bg_map_tooltip_area.png'
import tooltipBgAreaLight from '@/assets/images/bg_map_tooltip_area_light.png'

// icon
import iconMain from '@/assets/images/icon_main.png'
import iconHelp from '@/assets/images/icon_help.png'

// 纹理图
const pattern = new Image()
pattern.src = textrueMapSelect
pattern.width = '1000px'
pattern.height = '1000px'

export default {
  scatter: {
    main: scatterMain,
    help: scatterHelp,
    count: scatterCount
  },
  normal: {
    borderColor: 'rgba(0,0,0,1)',
    labelColor: 'rgba(158, 252, 255, 0.7)',
    areaRandom_1: 'rgba(41, 102, 145, 0.6)',
    areaRandom_2: {
      type: 'linear',
      x: 1,
      y: 0.75,
      x2: 0,
      y2: 0.25,
      colorStops: [{
        offset: 0, color: 'rgba(10, 189, 244, 0.4)' // 0% 处的颜色
      }, {
        offset: 1, color: 'rgba(0, 255, 234, 0.4)' // 100% 处的颜色
      }],
      global: false
    },
    areaRandom_3: 'rgba(41, 102, 145, 0.2)'
  },
  emphasis: {
    // areaColor: 'rgba(255,239,0,1)',
    areaColor: pattern,
    borderColor: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [{
        offset: 0, color: 'rgba(255,255,255,0.42)' // 0% 处的颜色
      }, {
        offset: 1, color: 'rgba(255,239,0,1)' // 100% 处的颜色
      }],
      global: false
    },
    labelColor: 'rgba(255,255,255,1)'
  },
  oacity: 'rgba(0,0,0,0)',
  areaTooltipHtml: function (params) {
    if (!params.data) return
    const basicInfo = params.data.detailData
    const tooltipBgLight = tooltipBgAreaLight
    const tooltipBg = tooltipBgArea

    return `
      <div style="position: absolute;top: -175px;left: -50px;color:#ffffff;font-size:12px;width:216px;height:155px;box-sizing:border-box;padding: 16px 20px 0 24px;background:url(${tooltipBg}) no-repeat;background-size: 100% 100%;">
        <div style="font-size:14px;font-family: MicrosoftYaHei-Bold;">${params.name}</div>
        <div style="display: flex;flex-wrap: wrap; margin-top: 12px;">
          <div style="margin-top:6px;width: 50%;">
            <span style="color:rgba(255,255,255,0.7)">互动学校</span>
            <span style="font-size:16px;font-family: DINAlternate-Bold;margin-left:2px;margin-right:2px;">${basicInfo.school}</span>
          </div>
          <div style="margin-top:6px;width: 50%;">
            <span style="color:rgba(255,255,255,0.7)">参与教师</span>
            <span style="font-size:16px;font-family: DINAlternate-Bold;margin-left:2px;margin-right:2px;">${basicInfo.teacher}</span>
          </div>
          <div style="margin-top:6px;width: 50%;">
            <span style="color:rgba(255,255,255,0.7">参与班级</span>
            <span style="font-size:16px;font-family: DINAlternate-Bold;margin-left:2px;margin-right:2px;">${basicInfo.class}</span>
          </div>
          <div style="margin-top:6px;width: 50%;">
            <span style="color:rgba(255,255,255,0.7)">受益学生</span>
            <span style="font-size:16px;font-family: DINAlternate-Bold;margin-left:2px;margin-right:2px;">${basicInfo.student}</span>
          </div>
          <div style="margin-top:6px;width: 50%;">
            <span style="color:rgba(255,255,255,0.7)">参与教室</span>
            <span style="font-size:16px;font-family: DINAlternate-Bold;margin-left:2px;margin-right:2px;">${basicInfo.classRoom}</span>
          </div>
        </div>
        <div style="position:absolute;width:216px;height:70px;top: 145px;left: 0; background:url(${tooltipBgLight}) no-repeat;background-size: 100% 64px;"></div>
      </div>`
  },
  scatterTooltipHtml: function (params) {
    const basicInfo = params.data.detailData
    let tooltipBgLight, tooltipBg, icon
    switch (basicInfo.type) {
      case 'main':
        tooltipBgLight = tooltipBgMainLight
        tooltipBg = tooltipBgMain
        icon = iconMain
        break
      case 'help':
        tooltipBgLight = tooltipBgHelpLight
        tooltipBg = tooltipBgHelp
        icon = iconHelp
        break
      case 'count':
        tooltipBgLight = tooltipBgCountLight
        tooltipBg = tooltipBgCount
        icon = iconHelp
        break
    }
    return `
      <div style="margin-left:-11px;position:relative;color:#ffffff;font-size:12px;width:216px;height:126px;box-sizing:border-box;padding: 16px 20px 0 24px;background:url(${tooltipBg}) no-repeat;background-size: 100% 100%;">
        <div style="font-size:14px;font-family: MicrosoftYaHei-Bold;">
          <img src="${icon}" style="vertical-align: text-bottom;"></span>
          ${params.name}
        </div>
        <div style="display: flex;flex-wrap: wrap;margin-top: 12px;">
          <div style="margin-top:6px;width: 50%;">
            <span style="color:rgba(255,255,255,0.7)">参与教师</span>
            <span style="font-size:16px;font-family: DINAlternate-Bold;margin-left:2px;margin-right:2px;">${basicInfo.teacher}</span>
          </div>
          <div style="margin-top:6px;width: 50%;">
            <span style="color:rgba(255,255,255,0.7">参与班级</span>
            <span style="font-size:16px;font-family: DINAlternate-Bold;margin-left:2px;margin-right:2px;">${basicInfo.class}</span>
          </div>
          <div style="margin-top:6px;width: 50%;">
            <span style="color:rgba(255,255,255,0.7)">受益学生</span>
            <span style="font-size:16px;font-family: DINAlternate-Bold;margin-left:2px;margin-right:2px;">${basicInfo.student}</span>
          </div>
          <div style="margin-top:6px;width: 50%;">
            <span style="color:rgba(255,255,255,0.7)">参与教室</span>
            <span style="font-size:16px;font-family: DINAlternate-Bold;margin-left:2px;margin-right:2px;">${basicInfo.classRoom}</span>
          </div>
        </div>
        <div style="position:absolute;width:202px;height:70px;top: 115px;left: 13px; background:url(${tooltipBgLight}) no-repeat;background-size: 100% 64px;"></div>
      </div>`
  }
}
