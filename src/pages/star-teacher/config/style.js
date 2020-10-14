// 用于给视觉统一修改颜色属性
import imgGroupOneBlue from '@/assets/images/color-group/chart_research_blue.png'
import imgGroupOneGreen from '@/assets/images/color-group/chart_research_green.png'
import imgGroupOneWhite from '@/assets/images/color-group/chart_research_white.png'
import imgGroupOneYellow from '@/assets/images/color-group/chart_research_yellow.png'
import imgGroupTwoBlue from '@/assets/images/color-group/chart_video_blue.png'
import imgGroupTwoGreen from '@/assets/images/color-group/chart_video_green.png'
import imgGroupTwoWhite from '@/assets/images/color-group/chart_video_white.png'
import imgGroupTwoYellow from '@/assets/images/color-group/chart_video_yellow.png'
import imgGroupThreeBlue from '@/assets/images/color-group/chart_net_research_blue.png'
import imgGroupThreeGreen from '@/assets/images/color-group/chart_net_research_green.png'
import imgGroupThreeWhite from '@/assets/images/color-group/chart_net_research_white.png'
import imgGroupThreeYellow from '@/assets/images/color-group/chart_net_research_yellow.png'
import imgGroupFourBlue from '@/assets/images/color-group/chart_gain_blue.png'
import imgGroupFourGreen from '@/assets/images/color-group/chart_gain_green.png'
import imgGroupFourWhite from '@/assets/images/color-group/chart_gain_white.png'
import imgGroupFourYellow from '@/assets/images/color-group/chart_gain_yellow.png'

export default {

  pieColor: [
    '#00e7ff', // 蓝
    '#ebffe6', // 白
    '#ffed56', // 黄
    '#02ffa8' // 绿

  ],
  pieShadowColor: [
    'rgba(0, 229, 255, 0.2)', // 蓝
    'rgba(235, 255, 230, 0.2)', // 白
    'rgba(255, 238, 86, 0.2)', // 黄
    'rgba(2, 255, 166, 0.2)' // 绿
  ],
  imgGroup: {
    blue: [
      imgGroupOneBlue,
      imgGroupTwoBlue,
      imgGroupThreeBlue,
      imgGroupFourBlue
    ],
    green: [
      imgGroupOneGreen,
      imgGroupTwoGreen,
      imgGroupThreeGreen,
      imgGroupFourGreen
    ],
    white: [
      imgGroupOneWhite,
      imgGroupTwoWhite,
      imgGroupThreeWhite,
      imgGroupFourWhite
    ],
    yellow: [
      imgGroupOneYellow,
      imgGroupTwoYellow,
      imgGroupThreeYellow,
      imgGroupFourYellow
    ]
  },
  opacity: 'rgba(0,0,0,0)'
}
