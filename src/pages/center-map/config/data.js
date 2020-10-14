// 类似于 mock 数据

function addDetail (array) {
  return array.map((e, i) => ({
    detailData: {
      type: i % 2 === 0 ? 'main' : 'help',
      teacher: 25 + Math.floor((Math.random() * 10 - 5)),
      student: 400 + Math.floor((Math.random() * 100 - 50)),
      class: 16 + Math.floor((Math.random() * 10 - 5)),
      classRoom: 3 + Math.floor((Math.random() * 2 - 1))
    },
    ...e
  }))
}

let allScatter = [
  {
    name: '春江中学',
    value: ['119.96893', '30.035329'],
    detailData: {
      type: 'count',
      count: 3,
      teacher: 25 + Math.floor((Math.random() * 10 - 5)),
      student: 400 + Math.floor((Math.random() * 100 - 50)),
      class: 16 + Math.floor((Math.random() * 10 - 5)),
      classRoom: 3 + Math.floor((Math.random() * 2 - 1))
    }
  },
  // { name: '富春中学', value: ['119.946996', '30.03989'] },
  // { name: '富春二小', value: ['119.955779', '30.052734'] },
  // { name: '富春三小', value: ['119.964996', '30.058029'] },
  // { name: '富春四小', value: ['119.951043', '30.070341'] },
  // { name: '富春五小', value: ['119.949253', '30.051431'] },
  // { name: '富春七小', value: ['119.945416', '30.036717'] },
  // { name: '富春八小', value: ['119.933374', '30.068422'] },
  // { name: '春江中小', value: ['119.944242', '30.000506'] },
  {
    name: '新登镇小',
    value: ['119.765466', '30.000006'],
    detailData: {
      type: 'count',
      count: 3,
      teacher: 25,
      student: 410,
      class: 16,
      classRoom: 3
    }
  },
  {
    name: '环山小学',
    value: ['119.957300', '29.950400'],
    detailData: {
      type: 'count',
      count: 2,
      teacher: 16,
      student: 214,
      class: 12,
      classRoom: 1
    }
  },
  // { name: '环山小学', value: ['119.947300', '29.940400'] },
  // { name: '环山中学', value: ['119.918678', '29.941453'] },
  { name: '渔山小学', value: ['120.104525 ', '30.054593'] },
  { name: '上官小学', value: ['120.011859 ', '29.898284'] },
  { name: '坑西小学', value: ['119.924215 ', '30.155786'] },
  { name: '湖源小学', value: ['119.956915 ', '29.817274'] },
  { name: '春建小学', value: ['119.835186 ', '30.082652'] },
  { name: '南新小学', value: ['119.564084 ', '30.158458'] },
  { name: '新义小学', value: ['119.887642 ', '30.129302'] },
  { name: '永昌镇小', value: ['119.745648', '30.035222'] },
  { name: '东洲小学', value: ['120.032284', '30.073401'] },
  { name: '场口镇小', value: ['119.879553 ', '29.916174'] },
  { name: '东洲中心小学', value: ['120.032284 ', '30.073401'] },
  { name: '杭州银湖实验中学', value: ['119.97853 ', '30.16625'] },
  { name: '南安小学', value: ['119.518034', '30.112533'] },
  { name: '南新小学', value: ['119.564084 ', '30.158458'] },
  { name: '新桐小学', value: ['119.827083', '29.90905'] },
  { name: '高桥小学', value: ['119.94661', '30.101877'] },
  {
    name: '鹿山中学',
    value: ['119.882964 ', '30.005175'],
    detailData: {
      type: 'count',
      count: 2,
      teacher: 18,
      student: 326,
      class: 15,
      classRoom: 2
    }
  },
  // { name: '东吴小学', value: ['119.929542', '30.012761'] },
  // { name: '新登镇中学', value: ['119.739343', '29.997729'] },
  {
    name: '灵桥镇中',
    value: ['120.039767', '30.015097'],
    detailData: {
      type: 'count',
      count: 2,
      teacher: 19,
      student: 381,
      class: 17,
      classRoom: 2
    }
  },
  // { name: '礼源小学', value: ['120.060405 ', '29.979639'] },
  // { name: '大源育才学校', value: ['120.01527', '30.001551'] },
  // { name: '礼源中学', value: ['120.060405', '29.979639'] },
  {
    name: '富春三中',
    value: ['119.900608', '30.079033'],
    detailData: {
      type: 'count',
      count: 9,
      teacher: 27,
      student: 392,
      class: 16,
      classRoom: 3
    }
  },
  // { name: '贤明中学', value: ['119.723349', '29.976247'] },
  // { name: '永兴中学', value: ['119.941028', '30.062188'] },
  {
    name: '渌渚小学',
    value: ['119.76202', '29.921389'],
    detailData: {
      type: 'count',
      count: 2,
      teacher: 22,
      student: 344,
      class: 18,
      classRoom: 1
    }
  },
  // { name: '新浦小学', value: ['119.772734 ', '29.914615'] },

  {
    name: '大源中学',
    value: ['120.001774', '30.002273'],
    detailData: {
      type: 'count',
      count: 3,
      teacher: 25,
      student: 431,
      class: 14,
      classRoom: 2
    }
  }
  // { name: '大源镇小', value: ['120.011706', '30.010521'] }
]
const xindeng = [
  {
    name: '新登镇中学',
    value: ['119.739743', '30.001111'],
    detailData: {
      type: 'main',
      teacher: 25,
      student: 328,
      class: 15,
      classRoom: 1
    }
  }, {
    name: '贤明中学',
    value: ['119.723349', '29.976247'],
    detailData: {
      type: 'main',
      teacher: 20,
      student: 394,
      class: 13,
      classRoom: 2
    }
  }, {
    name: '新登镇小',
    value: ['119.735466', '29.982806'],
    detailData: {
      type: 'help',
      teacher: 30,
      student: 396,
      class: 14,
      classRoom: 2
    }
  }
]
let fuchun = [
  { name: '富春中学', value: ['119.946996', '30.03989'] },
  { name: '富春二小', value: ['119.955779', '30.052734'] },
  { name: '富春三小', value: ['119.964996', '30.058029'] },
  { name: '富春四小', value: ['119.951043', '30.070341'] },
  { name: '富春五小', value: ['119.949253', '30.051431'] },
  { name: '富春七小', value: ['119.945416', '30.036717'] },
  { name: '富春八小', value: ['119.933374', '30.068422'] },
  { name: '富春三中', value: ['119.921608', '30.057033'] },
  { name: '永兴中学', value: ['119.941028', '30.062188'] }
]
let chunjiang = [
  { name: '春江中小', value: ['119.944242', '30.000506'] },
  { name: '春江中学', value: ['119.968930', '30.035329'] },
  { name: '江南中学', value: ['119.960899', '30.030403'] }
]
allScatter = addDetail(allScatter)
fuchun = addDetail(fuchun)
chunjiang = addDetail(chunjiang)

export default {
  dataStat: [
    { key: 'school', label: '互动学校', value: 46, unit: '个' },
    { key: 'teacher', label: '参与教师', value: 1152, unit: '人' },
    { key: 'student', label: '受益学生', value: 23040, unit: '人' }
  ],
  areaData: [{
    name: '富春街道',
    value: 123,
    detailData: {
      school: 9,
      teacher: 225,
      student: 2679,
      class: 123,
      classRoom: 123
    }
  }, {
    name: '春江街道',
    value: 123,
    detailData: {
      school: 3,
      teacher: 72,
      student: 2412,
      class: 42,
      classRoom: 7
    }
  }, {
    name: '新登镇',
    value: 123,
    detailData: {
      school: 3,
      teacher: 76,
      student: 2485,
      class: 49,
      classRoom: 6
    }
  }],
  scatterData: {
    allScatter,
    xindeng,
    fuchun,
    chunjiang
  },
  randomArea: new Map([
    ['洞桥镇', 2],
    ['新桐乡', 2],
    ['常绿镇', 2],
    ['新登镇', 3],
    ['富春街道', 3],
    ['大源镇', 2],
    ['场口镇', 1],
    ['渌渚镇', 1],
    ['万市镇', 1],
    ['灵桥镇', 1],
    ['春建乡', 2],
    ['鹿山街道', 1],
    ['春江街道', 3],
    ['环山乡', 2],
    ['里山镇', 2],
    ['龙门镇', 1],
    ['上官乡', 3],
    ['湖源乡', 3],
    ['永昌镇', 1],
    ['东洲街道', 2],
    ['银湖街道', 1],
    ['胥口镇', 1],
    ['常安镇', 2],
    ['渔山乡', 1]
  ])
}
