function indentity<T>(arg: T): T {
	return arg
}

// indentity('string')

indentity<string>("string")

function getInfo<T extends Object, U extends String, H>(
	info: T,
	key: U,
	val: H
): T {
	return info
}
getInfo<object, string, string>({ username: "" }, "username", "张三")
