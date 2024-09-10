interface Info {
	username: string
	age: number
}
interface patientInfo extends Info {
	sex: number
}
type baseInfo = {
	username: string
	age: number
}
type peopleForm = baseInfo & {
	sex: string
}

let peopleInfo: patientInfo = {
	username: "张三",
	sex: 1,
	age: 12,
}
let peopleInfo2: peopleForm = {
	username: "123",
	sex: "1",
	age: 12,
}
