export const REFRESH_BY_HEADER = 'pleaseRefreshByHeader'
export const REQUEST_SUCCESS = '0'
export const TABEL_LEGEND_CONFIG = [
  { status: 3, bgColor: 'rgba(255,255,255,1)', textColor: 'rgba(0,0,0,0.7)', borderColor: 'rgba(0,0,0,0.05)', text: '已完成' },
  { status: 2, bgColor: 'rgba(236,248,243,1)', textColor: 'rgba(14,164,105,1)', borderColor: 'rgba(0,0,0,0)', text: '上课中' },
  { status: 1, bgColor: 'rgba(245,245,245,1)', textColor: 'rgba(0,0,0,0.2)', borderColor: 'rgba(0,0,0,0)', text: '未开始' }
]
export const DEFAULT_STATUS = 3

export const PRECISE_TEACHING_TEMPLETE = [
  { evaluateName: '学生学习', id: 1001, childEvaluateItems: [{ evaluateName: '独立学习', id: 10011, childEvaluateItems: [{ evaluateName: '学生听课是否专注', id: 100111, childEvaluateItems: [] }, { evaluateName: '学生在听讲时是否有辅助行为（记笔记/查阅/回应/反问/提出不同意见）', id: 100112, childEvaluateItems: [] }] }, { evaluateName: '互动合作', id: 10012, childEvaluateItems: [{ evaluateName: '学生听课是否专注学生是否有小组讨论行为', id: 100121, childEvaluateItems: [] }, { evaluateName: '全班交流中，是否发生主动或被动发言', id: 100122, childEvaluateItems: [] }] }, { evaluateName: '专注解析', id: 10013, childEvaluateItems: [{ evaluateName: '学生听讲是否专注', id: 100131, childEvaluateItems: [] }, { evaluateName: '学生在听讲时是否有辅助行为（记笔记/查阅/回应/反问/提出不同意见）', id: 100132, childEvaluateItems: [] }] }] },
  { evaluateName: '教师教学', id: 1002, childEvaluateItems: [{ evaluateName: '课堂组织', id: 10021, childEvaluateItems: [{ evaluateName: '教师是否分任务组织教学', id: 100211, childEvaluateItems: [] }, { evaluateName: '分任务教学中，是否包含“布置任务-学生独立学习-小组合作讨论-全班交流展示-教师概括精讲”五个步骤', id: 100212, childEvaluateItems: [] }, { evaluateName: '教师是否以小组为着眼点布置任务、管控合作、汇报交流', id: 100213, childEvaluateItems: [] }] }, { evaluateName: '内容显示', id: 10022, childEvaluateItems: [{ evaluateName: '教师是否明确呈现学习目标、学习任务', id: 100221, childEvaluateItems: [] }, { evaluateName: '学习材料呈现时机、方式是否合理有效', id: 100222, childEvaluateItems: [] }, { evaluateName: '教师精讲概括是否准确有效', id: 100223, childEvaluateItems: [] }] }, { evaluateName: '教学机制', id: 10023, childEvaluateItems: [{ evaluateName: '课堂教学设计调整是否有效', id: 100231, childEvaluateItems: [] }, { evaluateName: '教师是否利用课堂生产资源（错误/回答/讨论/展示/作业）', id: 100232, childEvaluateItems: [] }, { evaluateName: '教师是否有有特色的教学策略（语言/教态/学识/技能/思想）', id: 100233, childEvaluateItems: [] }] }] },
  { evaluateName: '教学内容', id: 1003, childEvaluateItems: [{ evaluateName: '目标定制', id: 10031, childEvaluateItems: [{ evaluateName: '预设的学习目标是否合适该班学生', id: 100311, childEvaluateItems: [] }, { evaluateName: '课堂中生成的新的学习目标是否合理', id: 100312, childEvaluateItems: [] }, { evaluateName: '教师是否以小组为着眼点布置任务、管控合作、汇报交流', id: 100313, childEvaluateItems: [] }] }, { evaluateName: '任务内涵', id: 10032, childEvaluateItems: [{ evaluateName: '教师教学过程中是否创设教学情境', id: 100321, childEvaluateItems: [] }, { evaluateName: '教学过程中创设的教学情境是否驱动学习任务完成', id: 100322, childEvaluateItems: [] }, { evaluateName: '教师教材的讲解是否合理', id: 100323, childEvaluateItems: [] }, { evaluateName: '教师是否开发教材以外的课程资源', id: 100324, childEvaluateItems: [] }, { evaluateName: '生成资源（错误/回答/讨论/展示/作业）的利用是否有效', id: 100325, childEvaluateItems: [] }] }, { evaluateName: '课堂评价', id: 10033, childEvaluateItems: [{ evaluateName: '课堂是否有练习环节', id: 100331, childEvaluateItems: [] }, { evaluateName: '教师是否利用过程性评价（肯定/否定/引用/计分/鼓励/批评/体态语等）评价学生的表现', id: 100332, childEvaluateItems: [] }] }] },
  { evaluateName: '课堂文化', id: 1004, childEvaluateItems: [{ evaluateName: '师生习惯', id: 10041, childEvaluateItems: [{ evaluateName: '学生是否主动完成学习任务', id: 100411, childEvaluateItems: [] }, { evaluateName: '教师是否积极调动学生思考和参与学习', id: 100412, childEvaluateItems: [] }] }, { evaluateName: '课堂氛围', id: 10042, childEvaluateItems: [{ evaluateName: '学生是否愿意表达自己的想法', id: 100421, childEvaluateItems: [] }, { evaluateName: '教师是否鼓励意外提问', id: 100422, childEvaluateItems: [] }] }, { evaluateName: '教学特质', id: 10043, childEvaluateItems: [{ evaluateName: '教师上课是否有特色', id: 100431, childEvaluateItems: [] }, { evaluateName: '学生对教师是否认可', id: 100432, childEvaluateItems: [] }] }] }
]
export const SWITCH_TIME_TYPE = [
  { name: '近7天', value: 'seven' },
  { name: '近30天', value: 'thirty' },
  { name: '本学期', value: 'semester' }
]
export const LEADER_COCKPIT_HEADER = [
  { value: 'BasicData', text: '基础数据' },
  { value: 'SourceStatistic', text: '资源统计' },
  { value: 'TeachingAnalysis', text: '教学分析' },
  { value: 'AttendancePatrol', text: '考勤巡课' },
  { value: 'ExamData', text: '考试数据' }
]
export const REPORT_STATUS_OPTIONS = [
  { value: -1, text: '全部对比' },
  { value: 1, text: '课程对比' },
  { value: 2, text: '常模对比' }
]
export const READ_STATUS_OPTIONS = [
  { value: -1, text: '全部阅读状态' },
  { value: 1, text: '已读' },
  { value: 2, text: '未读' }
]
export const WEEK_LABEL = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
// 小部件基础数据
export const BASIC_DATA_LIST = [
  { title: '学校总数（所）', key: 'schoolNum', data: 0 },
  { title: '教师总数（人）', key: 'teacherNum', data: 0 },
  { title: '学生总数（人）', key: 'studentNum', data: 0 },
  { title: '录播时长（分钟）', key: 'recordCourseTime', data: 0 },
  { title: '互动时长（分钟）', key: 'interCourseTime', data: 0 },
  { title: '互动开课数（次）', key: 'interCourseNum', data: 0 }
]
// 小部件资源数据
export const RESOURCE_DATA_LIST = [
  { title: '资源量（个）', key: 'resourceInfo', allNum: 0, addNum: 0 },
  { title: '观看量（人）', key: 'watchInfo', allNum: 0, addNum: 0 },
  { title: '收藏量（人）', key: 'collectInfo', allNum: 0, addNum: 0 }
]

export const AVATAR_LIST = {
  male: [
    require('@/assets/images/avatar/ico_sculpture_male1.svg'),
    require('@/assets/images/avatar/ico_sculpture_male2.svg'),
    require('@/assets/images/avatar/ico_sculpture_male3.svg'),
    require('@/assets/images/avatar/ico_sculpture_male4.svg')
  ],
  female: [
    require('@/assets/images/avatar/ico_sculpture_female1.svg'),
    require('@/assets/images/avatar/ico_sculpture_female2.svg'),
    require('@/assets/images/avatar/ico_sculpture_female3.svg'),
    require('@/assets/images/avatar/ico_sculpture_female4.svg')
  ],
  unknown: [
    require('@/assets/images/avatar/ico_sculpture_unknow.svg')
  ]
}
