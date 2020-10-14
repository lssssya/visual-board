// 类似于 mock 数据
export default {
  dataset: [
    { date: '4月', microCourse: 300, courseWare: 320, coursePlan: 340, learningPlan: 420 },
    { date: '5月', microCourse: 420, courseWare: 400, coursePlan: 380, learningPlan: 450 },
    { date: '6月', microCourse: 536, courseWare: 546, coursePlan: 566, learningPlan: 666 },
    { date: '7月', microCourse: 636, courseWare: 626, coursePlan: 606, learningPlan: 726 },
    { date: '8月', microCourse: 800, courseWare: 770, coursePlan: 700, learningPlan: 800 },
    { date: '9月', microCourse: 915, courseWare: 930, coursePlan: 900, learningPlan: 915 }
  ],
  dataStat: [
    { key: 'exist', label: '已有资源', value: 3986, unit: '个' },
    { key: 'update', label: '本月更新', value: 326, unit: '个' },
    { key: 'fake', label: '', value: '', unit: '' }
  ],
  legendGroup: [
    { type: '', icon: '', label: '单位', unit: '个', key: 'unit' },
    { type: 'color', icon: 'green', label: '微课', unit: '', key: 'microCourse' },
    { type: 'color', icon: 'blue', label: '课件', unit: '', key: 'courseWare' },
    { type: 'color', icon: 'yellow', label: '教案', unit: '', key: 'coursePlan' },
    { type: 'color', icon: 'white', label: '学案', unit: '', key: 'learningPlan' }
  ]
}
