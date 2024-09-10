interface Person {
	username: string
	sex?: String
	tel: number
	readonly idcard: Number
}

let user: Person = {
	username: "123",
	tel: 123123,
	idcard: 12321321312,
}
// user.idcard = 11111   error
// let user:Person = {
//     username: '123',
//     tel: 123123,
//     sex: '1'
// }

function getUserInfo(user: Person) {
	console.log(user)
	// user.idcard = 3333 error
}
getUserInfo({
	username: "111",
	tel: 123123,
	idcard: 22222,
})
