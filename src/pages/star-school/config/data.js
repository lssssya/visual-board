// 类似于 mock 数据

export default {
  dataset: [
    { date: '9/1', course: 20, people: 1200, times: 2200 },
    { date: '9/2', course: 40, people: 1500, times: 2500 },
    { date: '9/3', course: 30, people: 2200, times: 3200 },
    { date: '9/4', course: 48, people: 2800, times: 2800 },
    { date: '9/5', course: 33, people: 3000, times: 3000 },
    { date: '9/6', course: 59, people: 2900, times: 2900 }
    // { date: '9/6', course: 73, people: 3300, times: 3300 },
    // { date: '9/6', course: 38, people: 3800, times: 3800 },
    // { date: '9/6', course: 40, people: 3900, times: 3900 },
    // { date: '9/6', course: 60, people: 3600, times: 3600 }
  ],
  dataStat: [
    { key: 'school', label: '名校', value: 22, unit: '个' },
    { key: 'course', label: '课程', value: 980, unit: '个' },
    { key: 'studyPeople', label: '学习人数', value: 11320, unit: '人' },
    { key: 'studyTimes', label: '学习次数', value: 25980, unit: '次' }
  ],
  legendGroup: [
    { type: 'symbol', icon: 'white', label: '学习人数', unit: '人', key: 'people' },
    { type: 'symbol', icon: 'yellow', label: '学习次数', unit: '次', key: 'times' },
    { type: 'color', icon: 'green', label: '新增课程', unit: '个', key: 'course' }
  ]
}
