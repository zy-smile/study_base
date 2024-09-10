const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
	title: String,
    sub_title: String,
	content: String,
    img: String,
    author: String
})

const Article = mongoose.model("Article", articleSchema)
Article.create({
    title: '这是文章标题',
    sub_title: '这是副标题',
    content: '这是文章内容。。。。',
    img: '',
    author: '王五'
})

module.exports = {
    Article
}
