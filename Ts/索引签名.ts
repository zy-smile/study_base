interface UserInfo {
	username: string
	age?: number
	[propName: string]: any
}

let patient: UserInfo = {
	username: "张三",
	sex: 1,
	info: "",
}
