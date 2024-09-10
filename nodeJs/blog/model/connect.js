const mongoose = require('mongoose');
mongoose
	.connect("mongodb://127.0.0.1:27017/blog", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("数据库连接成功"))
	.catch((err) => console.log(err, "数据库连接失败"))