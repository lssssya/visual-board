// 类似于 mock 数据
import ICON_EVALUATE from '@/assets/images/icon_evaluate.png'
import ICON_INTERACT from '@/assets/images/icon_interact.png'
import ICON_LIVE from '@/assets/images/icon_live.png'

import avatar1 from '@/assets/images/avatar/1.jpg'
import avatar2 from '@/assets/images/avatar/2.jpg'
import avatar3 from '@/assets/images/avatar/3.jpg'
import avatar4 from '@/assets/images/avatar/4.jpg'
import avatar5 from '@/assets/images/avatar/5.jpg'
import avatar6 from '@/assets/images/avatar/6.jpg'
import avatar7 from '@/assets/images/avatar/7.jpg'
import avatar8 from '@/assets/images/avatar/8.jpg'
import avatar9 from '@/assets/images/avatar/9.png'
import avatar10 from '@/assets/images/avatar/10.jpg'
import avatar11 from '@/assets/images/avatar/11.jpg'
import avatar12 from '@/assets/images/avatar/12.jpg'
import avatar13 from '@/assets/images/avatar/13.jpg'

const cacheMap = new Map([
  ['evaluate', ICON_EVALUATE],
  ['interact', ICON_INTERACT],
  ['live', ICON_LIVE]
])

const avatarArray = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13

]

const getAvatar = function (index) {
  return avatarArray[index]
  // return avatarArray[Math.floor(Math.random() * (avatarArray.length))]
}

// 自动填充一下 type 对应的 icon
let dataset = [
  { avatar: getAvatar(2), time: '08/21 18:10', teacher: '刘伟', org: '富春中学', type: 'interact', content: '雨的四季' },
  { avatar: getAvatar(1), time: '08/22 18:20', teacher: '李媛媛', org: '永兴学校', type: 'interact', content: '古代诗歌四首' },
  { avatar: getAvatar(0), time: '08/23 18:30', teacher: '曾艺淑', org: '富阳中学', type: 'evaluate', content: '三角形的边' },
  { avatar: getAvatar(7), time: '08/24 18:40', teacher: '李诗诗', org: '富春三小', type: 'live', content: '共圆中国梦' },
  { avatar: getAvatar(6), time: '08/25 18:50', teacher: '刘艺彤', org: '富春中学', type: 'interact', content: '等腰三角形' },
  { avatar: getAvatar(11), time: '08/26 18:10', teacher: '李可', org: '富阳中学', type: 'live', content: '绘画基本知识' },
  { avatar: getAvatar(6), time: '08/27 18:20', teacher: '刘艺彤', org: '富春中学', type: 'interact', content: '等边三角形' },
  { avatar: getAvatar(2), time: '08/28 18:30', teacher: '刘伟', org: '富春中学', type: 'interact', content: '植树的牧羊人' }
]
dataset = dataset.map(e => ({ ...e, icon: cacheMap.get(e.type) }))

export default {
  dataset
}
