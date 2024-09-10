const express = require('express');
const mongoose = require('mongoose')
const home = express.Router();
const { Article } = require('../model/article');
const ObjectId = mongoose.Types.ObjectId

// 获取文章列表
home.get('/articles',(req,res) => {
    const page = parseInt(req.query.page) || 1
	const perPage = 10

	Article.find()
		.skip((page - 1) * perPage)
		.limit(perPage)
		.exec((err, articles) => {
			if (err) {
				console.error(err)
				return res.status(500).send("Error retrieving articles")
			}
			res.status(200).send({
				msg: "操作成功",
				code: 200,
				list: articles,
			})
		}) 
})


// 创建文章
home.post('/createArticle',(req,res) => {
	const { title, content, author, sub_title, img } = req.body
	console.log(req.body);
	if(!title || !content || !sub_title)  {
		res.status(500).send({
			msg: "请填写完整文章信息",
			code: 500,
		})
	}else {
		Article.create(
			{
				title,
				content,
				img,
				author,
				sub_title,
			},
			(err, article) => {
				if (err) {
					res.status(500).send("创建失败")
				} else {
					res.status(200).send({
						msg: '操作成功',
						code: 200
					})
				}
			}
		)
	}


})

// 获取文章列表
home.get('/articleDetail',(req,res) => {
	console.log(ObjectId);
    const { id } = req.query
	Article.findOne({
		_id: ObjectId(id)
	},(err,result) => {
		if(err) {
			console.log(err)
			res.status(500).send('Failed to query article')
		}else {
			res.status(200).send({
				msg: '操作成功',
				code: 200,
				data: result
			})
		}
	})
		
})


module.exports = home;
