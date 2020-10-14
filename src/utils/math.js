
/**
 * @static
 * @summary 计算数量级函数
 * @param {Number} 数值
 * @return {Number} 数量级
 */
function _quantityExponent (val) {
  return Math.floor(Math.log(val) / Math.LN10)
}

/**
 * @static
 * @summary 计算步长 interval
 * @param {Number} 间隔 span / splitNumber
 * @param {Boolean} 是否四舍五入
 * @return {Number} 步长结果
 */
function _nice (val, round) {
  var exponent = _quantityExponent(val)
  var exp10 = Math.pow(10, exponent)
  var f = val / exp10 // 1 <= f < 10

  var nf

  if (round) {
    if (f < 1.5) {
      nf = 1
    } else if (f < 2.5) {
      nf = 2
    } else if (f < 4) {
      nf = 3
    } else if (f < 7) {
      nf = 5
    } else {
      nf = 10
    }
  } else {
    if (f < 1) {
      nf = 1
    } else if (f < 2) {
      nf = 2
    } else if (f < 3) {
      nf = 3
    } else if (f < 5) {
      nf = 5
    } else {
      nf = 10
    }
  }

  val = nf * exp10 // Fix 3 * 0.1 === 0.30000000000000004 issue (see IEEE 754).
  // 20 is the uppper bound of toFixed.

  return exponent >= -20 ? +val.toFixed(exponent < 0 ? -exponent : 0) : val
}

/**
 * @static
 * @summary 辅助计算精准度函数
 * @param {Number} 数据
 * @param {Number} 精准度
 * @return {Number} 精准值
 */
function _round (x, precision) {
  if (precision == null) {
    precision = 10
  }
  precision = Math.min(Math.max(0, precision), 20)
  x = (+x).toFixed(precision)
  return +x
}

/**
 * @static
 * @summary 计算估值
 * @param {Number} 最小值
 * @param {Number} 最大值
 * @return {Number} 新估值
 */
function calculateEstimation (data, splitNumber = 4) {
  // 初始化
  const max = Math.max(...data)
  const min = Math.min(...data)
  const span = max - min
  const interval = _nice(span / splitNumber, true)

  // fixMin
  let minVal = _round(Math.floor(min / interval) * interval)

  // fixMax
  let maxVal = _round(Math.ceil(max / interval) * interval)

  // 如果都大于0 或者都小于0 重置0 最大值和最小值 让柱状图的刻度从0 开始
  if (min === 0 || (minVal > 0 && maxVal > 0)) minVal = 0
  if (max === 0 || (minVal < 0 && maxVal < 0)) maxVal = 0
  return { min: minVal, max: maxVal }
}

module.exports = {
  calculateEstimation
}
