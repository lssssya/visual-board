// 类似于 mock 数据

export default {
  dataset: [
    { date: '4月', value: 350, rate: 93 },
    { date: '5月', value: 430, rate: 95 },
    { date: '6月', value: 556, rate: 100 },
    { date: '7月', value: 616, rate: 100 },
    { date: '8月', value: 830, rate: 100 },
    { date: '9月', value: 945, rate: 95 }
  ],
  dataStat: [
    { key: 'patrols', label: '巡课人员', value: 132, unit: '人' },
    { key: 'patrolRate', label: '完成率', value: 98, unit: '%' },
    { key: 'patrolTotal', label: '巡课总数', value: 6897, unit: '节' }
  ],
  legendGroup: [
    { type: 'color', icon: 'blue', label: '巡课节数', unit: '节', key: 'value' },
    { type: 'symbol', icon: 'white', label: '巡课完成率', unit: '', key: 'rate' }
  ]
}
