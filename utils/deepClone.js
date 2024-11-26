// 深克隆
// 1. 判断数据类型
// 2. 递归，判断结束条件
function deepClone(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let result = Array.isArray(obj) ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key]);
    }
  }
}