interface Person1 {
	username: string
	sex: number
}
interface Person2 {
	username: string
}
let user1: Person1 = {
	username: "李四",
	sex: 1,
}
let user2: Person2 = {
	username: "张三",
}

// user1 = user2  // error 不兼容

user2 = user1 // 兼容
