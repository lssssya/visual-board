// 类似于 mock 数据
// import videoDemo from '@/assets/video/demo.mp4'
// 这里项目没有把 video 资源上传 所以就随便写死一个 防止 import 报错
// 实际是视频轮播
const videoDemo = 'src'

export default {
  videoList: [
    { videoUrl: videoDemo, className: '富阳中学-三年(2)班' },
    { videoUrl: videoDemo, className: '富春中学-四年(1)班' },
    { videoUrl: videoDemo, className: '永兴学校-七年(3)班' },
    { videoUrl: videoDemo, className: '富阳实验中学-六年(1)班' },
    { videoUrl: videoDemo, className: '郁达夫中学-五年(3)班' },
    { videoUrl: videoDemo, className: '江南中学-七年(5)班' }
  ],
  dataset: [
    { date: '4月', Chinese: 360, English: 690, Music: 100, Art: 150 },
    { date: '5月', Chinese: 520, English: 460, Music: 150, Art: 200 },
    { date: '6月', Chinese: 700, English: 550, Music: 250, Art: 150 },
    { date: '7月', Chinese: 150, English: 200, Music: 50, Art: 60 },
    { date: '8月', Chinese: 150, English: 120, Music: 30, Art: 90 },
    { date: '9月', Chinese: 700, English: 750, Music: 200, Art: 100 }
  ],
  dataStat: [
    { key: 'mainClass', label: '主讲班级', value: 172, unit: '个' },
    { key: 'subClass', label: '听课班级', value: 320, unit: '个' },
    { key: 'classTime', label: '累计课时数', value: 6880, unit: '节' },
    { key: 'student', label: '累计受益学生', value: 23040, unit: '人' }

  ],
  legendGroup: [
    { type: '', icon: '', label: '单位', unit: '节', key: 'unit' },
    { type: 'symbol', icon: 'blue', label: '语文', unit: '', key: 'Chinese' },
    { type: 'symbol', icon: 'green', label: '英语', unit: '', key: 'English' },
    { type: 'symbol', icon: 'yellow', label: '音乐', unit: '', key: 'Music' },
    { type: 'symbol', icon: 'white', label: '美术', unit: '', key: 'Art' }
  ],
  lineConfig: [
    { type: 'Chinese', color: 'green' },
    { type: 'English', color: 'blue' },
    { type: 'Music', color: 'yellow' },
    { type: 'Art', color: 'lightBlue' }
  ]
}
