 let obj1 = {
 	age: 12,
 	name: 'zs',
 	address: {
 		city: 'BJ'
 	}
 }
 let obj2 = deepClone(obj1)
 obj2.address.city = 'Sh'

 //  例二
 let options = {
 	title: {
 		text: ''
 	},
 	xAxis: {
 		textStyle: {
 			color: '#fff'
 		},
 		data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
 		formatter: function (params) {
 			return ''
 		}
 	}
 }
 let newOptions = deepClone(options)
 newOptions.xAxis.data = ['2021', '2022', '2023', '2024']
 console.log(newOptions)
 console.log(options)

 function deepClone(obj) {
 	if (typeof (obj) !== 'object' || obj == null) return
 	let result = Array.isArray(obj) ? [] : {}
 	for (key in obj) {
 		if (obj.hasOwnProperty(key)) {
 			if (obj[key] && typeof (obj[key]) == 'object') {
 				result[key] = deepClone(obj[key])
 			} else {
 				result[key] = obj[key]
 			}

 		}
 	}
 	return result
 }