function deepClone(obj) {
  if (!obj || typeof obj !== "object") return obj;
  let newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    let val = obj[key];
    newObj[key] = typeof val === "object" ? deepClone(val) : val;
  }
  return newObj;
}