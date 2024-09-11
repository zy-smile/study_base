interface User1 {
	name: string
	age: number
}

interface User2 {
	name: string
	sex: number
}

let persons: User1 & User2 = {
	name: "张三",
	age: 12,
	sex: 1
}
