// 类似于 mock 数据
export default {
  total: 79,
  dataset: {
    blue: {
      subject: '语文',
      teacherNumber: 20,
      barData: [
        { category: '1', value: 35, label: '教研组' },
        { category: '2', value: 190, label: '名师公开课' },
        { category: '3', value: 148, label: '网络教研' },
        { category: '4', value: 409, label: '教研成果' }
      ]
    },
    white: {
      subject: '美术',
      teacherNumber: 10,
      barData: [
        { category: '1', value: 75, label: '教研组' },
        { category: '2', value: 150, label: '名师公开课' },
        { category: '3', value: 287, label: '网络教研' },
        { category: '4', value: 550, label: '教研成果' }
      ]
    },
    yellow: {
      subject: '音乐',
      teacherNumber: 15,
      barData: [
        { category: '1', value: 90, label: '教研组' },
        { category: '2', value: 100, label: '名师公开课' },
        { category: '3', value: 337, label: '网络教研' },
        { category: '4', value: 774, label: '教研成果' }
      ]
    },
    green: {
      subject: '英语',
      teacherNumber: 30,
      barData: [
        { category: '1', value: 50, label: '教研组' },
        { category: '2', value: 240, label: '名师公开课' },
        { category: '3', value: 217, label: '网络教研' },
        { category: '4', value: 707, label: '教研成果' }
      ]
    }
  },
  dataStat: [
    { key: 'group', label: '教研组', value: 250, unit: '组' },
    { key: 'lesson', label: '名师公开课', value: 680, unit: '节' },
    { key: 'research', label: '网络教研', value: 989, unit: '次' },
    { key: 'result', label: '教研成果', value: 2440, unit: '个' }
  ]
}
